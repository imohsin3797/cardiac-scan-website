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
TO_EMAIL=your_admin_email@example.com

# Quo API Configuration (formerly OpenPhone)
QUO_API_KEY=your_quo_api_key_here
QUO_FROM_NUMBER=+14078016575
QUO_TO_NUMBER=+13176145209
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

Quo (formerly OpenPhone) provides SMS messaging capabilities through their API.

1. Visit https://www.quo.com or https://www.openphone.com and create an account
2. Navigate to Settings → Developers → API Keys in your Quo dashboard
3. Generate a new API key and copy it - paste it as `QUO_API_KEY` in your `.env.local` file
4. Get your Quo phone number (the number you registered with Quo to send SMS from) and set it as `QUO_FROM_NUMBER` in E.164 format (e.g., +14078016575)
5. Set `QUO_TO_NUMBER` to the phone number where you want to receive SMS notifications in E.164 format (e.g., +13176145209)

**Important Notes:**
- The API endpoint is: `https://api.openphone.com/v1/messages`
- Phone numbers must be in E.164 format (include country code with +)
- The `QUO_FROM_NUMBER` must be a phone number registered in your Quo account
- Quo API uses simple Bearer token authentication (no "Bearer" prefix needed in header)
- Successfully sent messages will have a status of "queued" initially

### 6. Update Admin Email

Set `TO_EMAIL` in your `.env.local` file to the email address where you want to receive form submissions.

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
| `TO_EMAIL` | Where form submissions are sent | `admin@cardiacscan.com` |
| `QUO_API_KEY` | Your Quo API key | `5XBy1SutLn9FT8JzXeadyMzxjj2Lxj59` |
| `QUO_FROM_NUMBER` | Quo sender phone number (E.164) | `+14078016575` |
| `QUO_TO_NUMBER` | Phone for SMS alerts/recipient (E.164) | `+13176145209` |

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
- Check that both `QUO_FROM_NUMBER` (sender) and `QUO_TO_NUMBER` (recipient) are set correctly
- Ensure phone number format is in E.164 format (include country code with +, e.g., +14078016575)
- Verify the `QUO_FROM_NUMBER` matches a phone number registered in your Quo account
- Ensure your Quo account is active and has appropriate permissions
- Check the API endpoint is correct: `https://api.openphone.com/v1/messages`
- Check server logs for specific Quo API error messages

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
