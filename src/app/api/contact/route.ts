import { NextRequest, NextResponse } from "next/server";
import nodemailer, { type SendMailOptions } from "nodemailer";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildContactEmail(data: ContactPayload): SendMailOptions {
  return {
    from: `"New Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    replyTo: data.email,
    subject: "New Enquiry — Contact Form",

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #10233f;">New Contact Enquiry</h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
              Name
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${escapeHtml(data.name)}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
              Company
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${escapeHtml(data.company || "Not provided")}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
              Email
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${escapeHtml(data.email)}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
              Phone
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${escapeHtml(data.phone || "Not provided")}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
              Monthly Quantity
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${escapeHtml(data.quantity || "Not provided")}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">
              Requirement
            </td>
            <td style="padding: 10px;">
              ${escapeHtml(data.message)}
            </td>
          </tr>
        </table>

        <p style="margin-top: 25px; color: #64748b; font-size: 13px;">
          This enquiry was submitted through the TESQ Capacitors website.
        </p>
      </div>
    `,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  console.log("[CONTACT API] Received request");

  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid JSON body.",
      },
      {
        status: 400,
      },
    );
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      {
        error: "Name, email and requirement are required.",
      },
      {
        status: 422,
      },
    );
  }

  const payload: ContactPayload = {
    ...body,
    email: body.email.trim().toLowerCase(),
  };

  try {
    await transporter.sendMail(buildContactEmail(payload));

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("[SMTP] Contact enquiry failed:", error);

    return NextResponse.json(
      {
        error: "Failed to send enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}
