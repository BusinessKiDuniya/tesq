// lib/mailTemplates.ts

import type { ProductEnquiryPayload } from "@/app/api/enquiry/route";

// ─────────────────────────────────────────────
// OTP EMAIL
// ─────────────────────────────────────────────

export function createOtpMail(firstName: string, otp: string) {
  return `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#f5f8fc;
      font-family:Arial,Helvetica,sans-serif;
    ">

      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        padding:40px;
      ">

        <h2 style="
          margin:0;
          color:#10233f;
        ">
          Verify your email
        </h2>

        <p style="
          color:#526176;
          line-height:1.6;
          margin-top:20px;
        ">
          Hi ${firstName},
        </p>

        <p style="
          color:#526176;
          line-height:1.6;
        ">
          Please use the verification code below to confirm your
          enquiry with TESQ Capacitors.
        </p>

        <div style="
          margin:30px 0;
          padding:20px;
          background:#f1f6ff;
          border-radius:10px;
          text-align:center;
        ">

          <div style="
            font-size:36px;
            font-weight:bold;
            letter-spacing:8px;
            color:#1d65d6;
          ">
            ${otp}
          </div>

          <p style="
            margin:10px 0 0;
            color:#64748b;
            font-size:13px;
          ">
            This code expires in 5 minutes.
          </p>

        </div>

        <p style="
          color:#94a3b8;
          font-size:13px;
          line-height:1.5;
        ">
          If you did not submit an enquiry on the TESQ Capacitors
          website, you can safely ignore this email.
        </p>

      </div>

    </div>
  `;
}

// ─────────────────────────────────────────────
// INTERNAL TESQ LEAD EMAIL
// ─────────────────────────────────────────────

export function createNewProductEnquiryMail(data: ProductEnquiryPayload) {
  return `
    <div style="
      margin:0;
      padding:30px 20px;
      background:#f5f8fc;
      font-family:Arial,Helvetica,sans-serif;
    ">

      <div style="
        max-width:700px;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
      ">

        <div style="
          background:#10233f;
          padding:25px 30px;
        ">

          <h2 style="
            margin:0;
            color:#ffffff;
          ">
            New Product Enquiry
          </h2>

          <p style="
            margin:8px 0 0;
            color:#dbe7f5;
          ">
            TESQ Capacitors website
          </p>

        </div>

        <div style="padding:30px;">

          <div style="
            padding:18px;
            background:#f1f6ff;
            border-radius:8px;
            margin-bottom:25px;
          ">

            <div style="
              font-size:12px;
              text-transform:uppercase;
              letter-spacing:1px;
              color:#64748b;
            ">
              Product
            </div>

            <div style="
              margin-top:6px;
              font-size:20px;
              font-weight:bold;
              color:#10233f;
            ">
              ${data.productName}
            </div>

          </div>

          <h3 style="color:#10233f;">
            Customer Details
          </h3>

          <table style="
            width:100%;
            border-collapse:collapse;
          ">

            <tr>
              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
                font-weight:bold;
                width:35%;
              ">
                Name
              </td>

              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
              ">
                ${data.name}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
                font-weight:bold;
              ">
                Email
              </td>

              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
              ">
                ${data.email}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
                font-weight:bold;
              ">
                Phone
              </td>

              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
              ">
                ${data.phone}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
                font-weight:bold;
              ">
                Company
              </td>

              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
              ">
                ${data.company}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
                font-weight:bold;
              ">
                Required Quantity
              </td>

              <td style="
                padding:10px;
                border:1px solid #e2e8f0;
              ">
                ${data.quantity}
              </td>
            </tr>

          </table>

          <h3 style="
            margin-top:30px;
            color:#10233f;
          ">
            Capacitor Details
          </h3>

          <div style="
            padding:18px;
            background:#f8fafc;
            border:1px solid #e2e8f0;
            border-radius:8px;
            color:#475569;
            line-height:1.6;
            white-space:pre-wrap;
          ">
            ${data.capacitorDetails}
          </div>

          <div style="
            margin-top:25px;
            color:#94a3b8;
            font-size:12px;
          ">
            Submitted from: ${data.pageUrl}
          </div>

        </div>

      </div>

    </div>
  `;
}

// ─────────────────────────────────────────────
// CUSTOMER CONFIRMATION
// ─────────────────────────────────────────────

export function createConfirmationMail(firstName: string, productName: string) {
  return `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#f5f8fc;
      font-family:Arial,Helvetica,sans-serif;
    ">

      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        padding:40px;
      ">

        <h2 style="
          margin:0;
          color:#10233f;
        ">
          Thank you for your enquiry
        </h2>

        <p style="
          margin-top:20px;
          color:#526176;
          line-height:1.6;
        ">
          Hi ${firstName},
        </p>

        <p style="
          color:#526176;
          line-height:1.6;
        ">
          We have received your enquiry for:
        </p>

        <div style="
          margin:20px 0;
          padding:16px 18px;
          background:#f1f6ff;
          border-radius:8px;
          color:#10233f;
          font-weight:bold;
        ">
          ${productName}
        </div>

        <p style="
          color:#526176;
          line-height:1.6;
        ">
          Our sales team will review your requirement and
          get back to you shortly with the relevant information,
          pricing and availability.
        </p>

        <div style="
          margin-top:30px;
          padding-top:20px;
          border-top:1px solid #e2e8f0;
          color:#64748b;
          font-size:13px;
        ">
          TESQ Capacitors<br />
          Capacitor solutions for motor and electrical applications
        </div>

      </div>

    </div>
  `;
}
