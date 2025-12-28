# Contact Form Setup Guide

The contact form has been successfully implemented with the following features:
- Sends confirmation email to the user
- Forwards form submission to your admin email
- Sends SMS notification via Quo API

## Setup Instructions

### 1. Install Dependencies (Already Done)
The required package `@sendgrid/mail` has been added to your dependencies.

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory of your project with the following variables:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=your_admin_email@example.com

# Quo API Configuration
QUO_API_KEY=your_quo_api_key_here
QUO_FROM_PHONE_NUMBER=+1234567890
NOTIFICATION_PHONE_NUMBER=+1987654321
```

### 3. Get SendGrid API Key

1. Go to https://sendgrid.com and create an account (free tier available)
2. Navigate to Settings → API Keys
3. Click "Create API Key"
4. Give it a name (e.g., "CardiacScan Contact Form")
5. Select "Full Access" or at minimum "Mail Send" permissions
6. Copy the API key and paste it as `SENDGRID_API_KEY` in your `.env.local` file

### 4. Verify Sender Email in SendGrid

**IMPORTANT:** SendGrid requires you to verify the sender email address.

1. Go to Settings → Sender Authentication in your SendGrid dashboard
2. Click "Verify a Single Sender"
3. Fill in your details with the email you want to use as `SENDGRID_FROM_EMAIL`
4. SendGrid will send a verification email - click the link to verify
5. Once verified, update `SENDGRID_FROM_EMAIL` in `.env.local` with this email

**Note:** For production, you should set up domain authentication for better deliverability.

### 5. Get Quo API Credentials

1. Visit https://www.quoapi.com and create an account
2. Navigate to your dashboard and find your API credentials
3. Copy your API key and paste it as `QUO_API_KEY` in your `.env.local` file
4. Get your Quo phone number (the number you registered with Quo to send SMS from) and set it as `QUO_FROM_PHONE_NUMBER` (include country code, e.g., +1234567890)
5. Set `NOTIFICATION_PHONE_NUMBER` to the phone number where you want to receive SMS notifications (include country code, e.g., +1987654321)

**Note:** Quo API may require account verification or credits for SMS sending. The `QUO_FROM_PHONE_NUMBER` is the sender number provided by Quo.

### 6. Update Admin Email

Set `ADMIN_EMAIL` in your `.env.local` file to the email address where you want to receive form submissions.

### 7. Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your website
3. Fill out and submit the test form
4. Verify that:
   - You receive a confirmation email at the submitted email address
   - You receive the form data at your admin email
   - You receive an SMS notification (if Quo API is configured)

### 8. Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SENDGRID_API_KEY` | Your SendGrid API key | `SG.xxxxxxxxxx` |
| `SENDGRID_FROM_EMAIL` | Verified sender email | `noreply@cardiacscan.com` |
| `ADMIN_EMAIL` | Where form submissions are sent | `admin@cardiacscan.com` |
| `QUO_API_KEY` | Your Quo API key | `quo_xxxxxxxxxx` |
| `QUO_FROM_PHONE_NUMBER` | Quo sender phone number | `+15551234567` |
| `NOTIFICATION_PHONE_NUMBER` | Phone for SMS alerts (recipient) | `+15559876543` |

### 9. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's environment settings
2. Make sure to use production API keys (not development/test keys)
3. Verify your domain with SendGrid for better email deliverability
4. Test the form after deployment to ensure everything works

### Troubleshooting

**Emails not sending:**
- Verify your SendGrid API key is correct
- Make sure the sender email is verified in SendGrid
- Check SendGrid activity logs for errors
- Ensure you haven't exceeded SendGrid's free tier limits (100 emails/day)

**SMS not sending:**
- Verify Quo API credentials are correct
- Check that both `QUO_FROM_PHONE_NUMBER` (sender) and `NOTIFICATION_PHONE_NUMBER` (recipient) are set correctly
- Ensure phone number format is correct (include country code with +, e.g., +15551234567)
- Verify the `QUO_FROM_PHONE_NUMBER` matches the phone number registered in your Quo account
- Ensure your Quo account has sufficient credits
- Check Quo API logs for errors

**Form submission fails:**
- Open browser console to check for JavaScript errors
- Check the Network tab in DevTools for API response errors
- Verify all environment variables are set correctly
- Ensure the API route is accessible at `/api/contact`

### Files Modified/Created

- `app/api/contact/route.ts` - API endpoint handling form submissions
- `app/components/ContactSection.tsx` - Updated with submission logic
- `package.json` - Added @sendgrid/mail dependency
- `.env.example` - Example environment variables
- `CONTACT_FORM_SETUP.md` - This setup guide

### Features Implemented

✅ Form validation (all fields required)
✅ Loading state during submission
✅ Success/error message display
✅ Email confirmation to user
✅ Email forwarding to admin
✅ SMS notification via Quo API
✅ Form reset after successful submission
✅ Professional email templates with CardiacScan branding
