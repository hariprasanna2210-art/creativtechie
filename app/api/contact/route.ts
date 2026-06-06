import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const OWNER_EMAIL = process.env.CONTACT_TO || "creativtechie@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM || process.env.SMTP_USER || "creativtechie@gmail.com";
const SMTP_SETUP_ERROR = "Email is not configured yet. Add SMTP_USER and SMTP_PASS in .env.local, then restart npm run dev.";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 2000);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(SMTP_SETUP_ERROR);
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const email = clean(body.email).toLowerCase();
    const company = clean(body.company);
    const phone = clean(body.phone);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill name, email and project notes." }, { status: 400 });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const transporter = getTransporter();
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company || "Not provided"),
      phone: escapeHtml(phone || "Not provided"),
      service: escapeHtml(service || "Not selected"),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
      submittedAt: escapeHtml(submittedAt)
    };

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        "New CreativTechie enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        `Submitted: ${submittedAt}`,
        "",
        "Project notes:",
        message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#06345f">
          <h2>New CreativTechie enquiry</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Company:</strong> ${safe.company}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Service:</strong> ${safe.service}</p>
          <p><strong>Submitted:</strong> ${safe.submittedAt}</p>
          <hr />
          <p><strong>Project notes:</strong></p>
          <p>${safe.message}</p>
        </div>
      `
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      replyTo: OWNER_EMAIL,
      subject: "Thanks for contacting CreativTechie",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for contacting CreativTechie. We received your enquiry and will get back to you soon.",
        "",
        "Your project notes:",
        message,
        "",
        "Regards,",
        "CreativTechie",
        OWNER_EMAIL
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#06345f">
          <h2>Thanks for contacting CreativTechie</h2>
          <p>Hi ${safe.name},</p>
          <p>Thanks for contacting us. We received your enquiry and will get back to you soon.</p>
          <p><strong>Your project notes:</strong></p>
          <p>${safe.message}</p>
          <p>Regards,<br />CreativTechie</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof Error && error.message === SMTP_SETUP_ERROR) {
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? SMTP_SETUP_ERROR
              : "Unable to send your enquiry right now. Please try again or WhatsApp us."
        },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Unable to send your enquiry right now. Please try again or WhatsApp us." }, { status: 500 });
  }
}
