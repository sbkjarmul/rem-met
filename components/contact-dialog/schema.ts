import z from "zod";
import { Translations } from "@/hooks/useTranslations";

export const contactFormSchema = (t: Translations) =>
  z.object({
    fullName: z
      .string()
      .min(5, t("fullName.minError"))
      .max(100, t("fullName.maxError"))
      .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, t("fullName.regexError")),
    email: z.string().email(t("email.regexError")),
    companyName: z.string().min(2, t("companyName.minError")),
    phone: z.string().min(9, t("phone.minError")).max(15, t("phone.maxError")),
    description: z
      .string()
      .min(10, t("description.minError"))
      .max(2000, t("description.maxError")),
    acceptPolicy: z.boolean().refine((val) => val === true, {
      message: t("acceptPolicy.error"),
    }),
  });

export type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;

export const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  companyName: "",
  phone: "",
  description: "",
  acceptPolicy: false,
};
