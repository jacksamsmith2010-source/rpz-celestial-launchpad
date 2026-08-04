import { createServerFn } from "@tanstack/react-start";
import { sendLovableEmail, EmailAPIError } from "@lovable.dev/email-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    const toEmail = process.env["CONTACT_TO_EMAIL"] || "recruit@rpzcelestial.gg";
    const fromEmail = process.env["CONTACT_FROM_EMAIL"] || "contact@rpzcelestial.gg";

    if (!apiKey) {
      return {
        sent: false,
        reason: "email_not_configured",
        message: "Email sending is not configured on this project yet. Please reach out on Discord instead.",
      };
    }

    const html = `
      <h2>New message from RPZ CELESTIAL contact form</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <hr />
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `;

    const text = `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`;

    try {
      const result = await sendLovableEmail(
        {
          to: toEmail,
          from: fromEmail,
          reply_to: data.email,
          subject: `Fan message: ${data.subject}`,
          html,
          text,
          label: "contact-form",
        },
        { apiKey },
      );

      if (!result.success) {
        return {
          sent: false,
          reason: "provider_rejected",
          message: "We couldn't send your message right now. Please try again or contact us on Discord.",
        };
      }

      return { sent: true, message: "Your message has been sent. We'll get back to you soon!" };
    } catch (error) {
      if (error instanceof EmailAPIError && error.code === "emails_disabled") {
        return {
          sent: false,
          reason: "emails_disabled",
          message: "Project emails are currently disabled. Please reach out on Discord instead.",
        };
      }

      console.error("Contact form email failed:", error);
      return {
        sent: false,
        reason: "send_failed",
        message: "We couldn't send your message right now. Please try again or contact us on Discord.",
      };
    }
  });

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
