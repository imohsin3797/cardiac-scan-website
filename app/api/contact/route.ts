import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Confirms the Cloudflare Turnstile token came from a real visitor solving the widget
async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('Missing TURNSTILE_SECRET_KEY');
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = await res.json();
    if (!data.success) {
      console.error('Turnstile verification failed:', data['error-codes']);
    }
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { RESEND_API_KEY, RESEND_FROM_EMAIL, TO_EMAIL } = process.env;
    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !TO_EMAIL) {
      console.error('Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or TO_EMAIL');
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // Initialize Resend per request so a missing key doesn't break the build
    const resend = new Resend(RESEND_API_KEY);

    const body = await request.json();
    const { name, email, subject, phone, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !email || !subject || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Block bots before any SMS or email is sent
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? null;
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json(
        { error: 'Human verification failed. Please complete the verification and try again.' },
        { status: 403 }
      );
    }

    // Email to forward form data to your static email
    const forwardEmail = {
      to: TO_EMAIL,
      from: RESEND_FROM_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0A2F4A; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background-color: #f7f7f7;">
            <h2 style="color: #0A2F4A; margin-bottom: 20px;">Contact Details</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 5px 0;"><strong style="color: #0A2F4A;">Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong style="color: #0A2F4A;">Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong style="color: #0A2F4A;">Phone:</strong> ${phone}</p>
              <p style="margin: 5px 0;"><strong style="color: #0A2F4A;">Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #0A2F4A;">Message:</strong></p>
              <p style="margin: 0; color: #7A7A7A; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <div style="background-color: #0A2F4A; padding: 20px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 14px;">CardiacScan Imaging</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the user
    const confirmationEmail = {
      to: email,
      from: RESEND_FROM_EMAIL,
      subject: 'We Received Your Message - CardiacScan Imaging',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0A2F4A; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Thank You for Contacting Us</h1>
          </div>
          <div style="padding: 30px; background-color: #f7f7f7;">
            <p style="color: #0A2F4A; font-size: 18px; margin-bottom: 20px;">Hello ${name},</p>
            <p style="color: #7A7A7A; line-height: 1.6; margin-bottom: 20px;">
              We have received your message and will get back to you as soon as possible. Our team typically responds within 24-48 hours during business days.
            </p>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #0A2F4A;">Your Message:</strong></p>
              <p style="margin: 0 0 5px 0; color: #7A7A7A;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 0; color: #7A7A7A; line-height: 1.6;">${message}</p>
            </div>
            <p style="color: #7A7A7A; line-height: 1.6; margin-bottom: 20px;">
              If you have any urgent matters, please feel free to call us directly at <strong style="color: #C41F3E;">(407) 801-6575</strong>.
            </p>
            <p style="color: #7A7A7A; line-height: 1.6;">
              Best regards,<br/>
              <strong style="color: #0A2F4A;">CardiacScan Imaging Team</strong>
            </p>
          </div>
          <div style="background-color: #0A2F4A; padding: 20px; text-align: center;">
            <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 14px;">CardiacScan Imaging</p>
            <p style="color: rgba(255, 255, 255, 0.8); margin: 0; font-size: 12px;">
              1317 Edgewater Dr, #3015, Orlando, FL 32804<br/>
              Phone: (407) 801-6575 | Email: info@cardiacscanimaging.com
            </p>
          </div>
        </div>
      `,
    };

    // Send SMS notification via Quo API (formerly OpenPhone)
    try {
      const smsContent = `New contact form submission from Cardiac Scan Imaging:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`;
      
      const quoResponse = await fetch('https://api.openphone.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.QUO_API_KEY || '',
        },
        body: JSON.stringify({
          content: smsContent,
          from: process.env.QUO_FROM_NUMBER,
          to: [process.env.QUO_TO_NUMBER || ''],
          setInboxStatus: 'done',
        }),
      });

      if (!quoResponse.ok) {
        const errorText = await quoResponse.text();
        console.error('Quo API error:', errorText);
        // Don't fail the entire request if SMS fails
      } else {
        const quoData = await quoResponse.json();
        console.log('SMS sent successfully:', quoData);
      }
    } catch (smsError) {
      console.error('SMS notification failed:', smsError);
      // Don't fail the entire request if SMS fails
    }

    // Send both emails (Resend returns errors instead of throwing)
    const results = await Promise.all([
      resend.emails.send(forwardEmail),
      resend.emails.send(confirmationEmail),
    ]);

    const failed = results.filter((result) => result.error);
    if (failed.length > 0) {
      failed.forEach((result) => console.error('Resend error:', result.error));
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
