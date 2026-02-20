import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email to forward form data to your static email
    const forwardEmail = {
      to: process.env.TO_EMAIL || '',
      from: process.env.SENDGRID_FROM_EMAIL || '',
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
      from: process.env.SENDGRID_FROM_EMAIL || '',
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

    // Send both emails
    await Promise.all([
      sgMail.send(forwardEmail),
      sgMail.send(confirmationEmail),
    ]);

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
