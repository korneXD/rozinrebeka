"use server";

import { env } from "@/lib/zod";
import { Resend } from "resend";
import { Email } from "./page";

const resend = new Resend(env.RESEND_API_KEY);

export default async function sendEmail(formData) {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rebeka.kozmetikus88@gmail.com",
      subject: "Weboldal üzenet: Rozin Rebeka - " + name + " - " + email,
      react: Email({ name: name, from: email, message: message }),
    });
  } catch (error) {
    console.log(error);
  }
}
