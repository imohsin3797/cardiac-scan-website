# Contact Form Setup Guide

The contact form has been successfully implemented with the following features:
- Sends confirmation email to the user
- Forwards form submission to your admin email
- Sends SMS notification via Quo API
- Blocks bots with Cloudflare Turnstile human verification

## Setup Instructions

### 1. Install Dependencies (Already Done)
The required package `resend` has been added to your dependencies.

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory of your project with the following variables:

```bash
# Resend Configuration
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL=CardiacScan Imaging <noreply@yourdomain.com>
TO_EMAIL=your_admin_email@example.com

# Quo API Configuration (formerly OpenPhone)
QUO_API_KEY=your_quo_api_key_here
QUO_FROM_NUMBER=+14078016575
QUO_TO_NUMBER=+13176145209

# Cloudflare Turnstile (human verification)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
```

### 3. Get Resend API Key

1. Go to https://resend.com and create an account (free tier: 3,000 emails/month, 100/day)
2. Navigate to API Keys → Create API Key
3. Give it a name (e.g., "CardiacScan Contact Form") with "Sending access" permission
4. Copy the key (starts with `re_`) and paste it as `RESEND_API_KEY` in your `.env.local` file

### 4. Verify Your Sending Domain in Resend

**IMPORTANT:** Until a domain is verified, Resend only lets you send from `onboarding@resend.dev` to the email address on your Resend account. The confirmation email to form submitters will fail until you verify a domain.

1. Go to Domains → Add Domain in the Resend dashboard (a subdomain like `mail.cardiacscanimaging.com` is recommended)
2. Add the DNS records Resend shows you (SPF/MX and DKIM) at your DNS provider
3. Click Verify and wait for the status to show "Verified"
4. Set `RESEND_FROM_EMAIL` to an address on that domain, e.g. `CardiacScan Imaging <noreply@mail.cardiacscanimaging.com>`

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

### 5b. Set Up Cloudflare Turnstile (Human Verification)

The form shows a Turnstile widget above the Send button. The button stays disabled until the visitor passes, and the server re-checks the token with Cloudflare before sending any SMS or email.

1. Go to https://dash.cloudflare.com (free account) → Turnstile → Add widget
2. Add hostnames `cardiacscanimaging.com` and `www.cardiacscanimaging.com` (add `localhost` too if you want to test real keys locally)
3. Widget mode: "Managed"
4. Copy the Site Key into `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the Secret Key into `TURNSTILE_SECRET_KEY`

For local testing you can use Cloudflare's always-pass test keys: site key `1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA`. These show a red "For testing only" banner and must not be used in production.

**Note:** `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is baked in at build time, so redeploy after changing it.

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
| `RESEND_API_KEY` | Your Resend API key | `re_xxxxxxxxxx` |
| `RESEND_FROM_EMAIL` | Sender on a Resend-verified domain | `noreply@mail.cardiacscanimaging.com` |
| `TO_EMAIL` | Where form submissions are sent | `admin@cardiacscan.com` |
| `QUO_API_KEY` | Your Quo API key | `5XBy1SutLn9FT8JzXeadyMzxjj2Lxj59` |
| `QUO_FROM_NUMBER` | Quo sender phone number (E.164) | `+14078016575` |
| `QUO_TO_NUMBER` | Phone for SMS alerts/recipient (E.164) | `+13176145209` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile site key (public) | `0x4AAAAAAA...` |
| `TURNSTILE_SECRET_KEY` | Turnstile secret key | `0x4AAAAAAA...` |

### 9. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's environment settings
2. Make sure to use production API keys (not development/test keys)
3. Make sure your sending domain is verified in Resend
4. Test the form after deployment to ensure everything works

### Troubleshooting

**Emails not sending:**
- Verify your Resend API key is correct
- Make sure `RESEND_FROM_EMAIL` is on a domain verified in Resend (a 403 "only send testing emails to your own email address" means it isn't)
- Check the Emails and Logs pages in the Resend dashboard for errors
- Ensure you haven't exceeded Resend's free tier limits (100 emails/day, 3,000/month — each submission sends 2)

**SMS not sending:**
- Verify Quo API credentials are correct
- Check that both `QUO_FROM_NUMBER` (sender) and `QUO_TO_NUMBER` (recipient) are set correctly
- Ensure phone number format is in E.164 format (include country code with +, e.g., +14078016575)
- Verify the `QUO_FROM_NUMBER` matches a phone number registered in your Quo account
- Ensure your Quo account is active and has appropriate permissions
- Check the API endpoint is correct: `https://api.openphone.com/v1/messages`
- Check server logs for specific Quo API error messages

**"Human verification failed" error / Send button stays disabled:**
- Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are a matching pair from the same widget
- Make sure the site's hostname is listed in the Turnstile widget settings
- Check server logs for `Turnstile verification failed:` error codes

**Form submission fails:**
- Open browser console to check for JavaScript errors
- Check the Network tab in DevTools for API response errors
- Verify all environment variables are set correctly
- Ensure the API route is accessible at `/api/contact`

### Files Modified/Created

- `app/api/contact/route.ts` - API endpoint handling form submissions
- `app/components/ContactSection.tsx` - Updated with submission logic
- `package.json` - Added resend and @marsidev/react-turnstile dependencies
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
