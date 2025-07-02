"use server";

import { Resend } from "resend";
import z from "zod";

import ContactConfirmationEmailTemplate from "@/emails/contact-confirmation-email-template";
import ContactNotificationEmailTemplate from "@/emails/contact-notification-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  previousState: {
    success: boolean;
    error?: string;
  },
  formData: FormData
) {
  const schema = z.object({
    fullName: z.string().nonempty(),
    email: z.string().nonempty(),
    companyName: z.string(),
    description: z.string().nonempty(),
    phone: z.string().nonempty(),
  });

  try {
    const data = schema.parse({
      fullName: formData.get("fullName")?.toString(),
      email: formData.get("email")?.toString(),
      companyName: formData.get("companyName")?.toString(),
      phone: formData.get("phone")?.toString(),
      description: formData.get("description")?.toString(),
      acceptPolicy: formData.get("acceptPolicy")?.toString(),
    });

    const { fullName, email, description, companyName, phone } = data;

    // Send confirmation email to client
    await resend.emails.send({
      from: "REM-MET <noreply@rem-met.com>",
      to: email.toString(),
      subject: "Wypełniłeś formularz kontaktowy",
      react: ContactConfirmationEmailTemplate({
        fullName,
        companyName,
        description,
      }),
    });

    // Send notification email to ENTEI
    await resend.emails.send({
      from: "REM-MET <noreply@rem-met.com>",
      to: "sbkjarmul@gmail.com",
      subject: "Nowe zapytanie",
      react: ContactNotificationEmailTemplate({
        fullName,
        companyName,
        description,
        email: email,
        phone: phone,
      }),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
