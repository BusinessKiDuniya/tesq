import { NextRequest, NextResponse } from "next/server";
import nodemailer, { type SendMailOptions } from "nodemailer";

import { createNewProductEnquiryMail } from "@/lib/mailTemplates";

export interface ProductEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  quantity: string;
  capacitorDetails: string;
  productName: string;
  submittedAt: string;
  pageUrl: string;
  source: string;
}

// ─────────────────────────────────────────────
// SMTP
// ─────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─────────────────────────────────────────────
// SALES TEAM EMAIL
// ─────────────────────────────────────────────

function buildInternalEmail(data: ProductEnquiryPayload): SendMailOptions {
  return {
    from: `"New Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `New Product Enquiry — ${data.productName}`,
    html: createNewProductEnquiryMail(data),
  };
}

// ─────────────────────────────────────────────
// POST
// ─────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: ProductEnquiryPayload;

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

  // ─────────────────────────────────────────────
  // VALIDATION
  // ─────────────────────────────────────────────

  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.company ||
    !body.quantity ||
    !body.capacitorDetails ||
    !body.productName
  ) {
    return NextResponse.json(
      {
        error: "Please complete all required fields.",
      },
      {
        status: 422,
      },
    );
  }

  const payload: ProductEnquiryPayload = {
    ...body,
    email: body.email.trim().toLowerCase(),
  };

  // ─────────────────────────────────────────────
  // SEND TO SALES TEAM
  // ─────────────────────────────────────────────

  try {
    await transporter.sendMail(buildInternalEmail(payload));

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("[SMTP] Product enquiry email failed:", error);

    return NextResponse.json(
      {
        error: "Failed to send enquiry email.",
      },
      {
        status: 500,
      },
    );
  }
}
