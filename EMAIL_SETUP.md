# Contact Form Email Setup

The contact form sends:

- One enquiry email to `creativtechie@gmail.com`
- One thank-you email to the visitor who submitted the form

## 1. Create a Gmail app password

Use a Gmail App Password, not your normal Gmail password.

1. Open your Google Account.
2. Turn on 2-Step Verification if it is not enabled.
3. Go to App passwords.
4. Create an app password for Mail.
5. Copy the generated 16-character password.

## 2. Add local environment variables

Create `.env.local` in the project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=creativtechie@gmail.com
SMTP_PASS=your-16-character-gmail-app-password
CONTACT_TO=creativtechie@gmail.com
CONTACT_FROM=CreativTechie <creativtechie@gmail.com>
```

After editing `.env.local`, stop and restart the dev server:

```bash
npm run dev
```

## 3. Add the same variables in hosting

In Vercel, Netlify or your hosting panel, add the same values as environment variables. Redeploy after saving them.
