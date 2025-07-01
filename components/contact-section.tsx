"use client";

import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";
import { AccentText } from "@/components/ui/accent-text";
import Button from "@/components/ui/button";
import { ContactDialog } from "./contact-dialog/contact-dialog";

interface ContactSectionProps {
  variant?: "product" | "default";
}

const ContactSection = ({ variant = "default" }: ContactSectionProps) => {
  const t = useTranslations("contactSection");

  const styles = {
    product: {
      background: "bg-brand-blue-200",
      button: "secondary",
      description: "text-gray-300",
      title: "text-gray-100",
      accent: "text-gray-300",
      text: {
        accent: t("accent.product"),
        description: t("description.product"),
        title: t("title.product"),
      },
    },
    default: {
      background: "bg-gray-900",
      button: "default",
      description: "text-gray-400",
      title: "text-gray-100",
      accent: "text-brand-blue-100",
      text: {
        accent: t("accent"),
        description: t("description"),
        title: t("title"),
      },
    },
  };

  const currentStyle = variant === "product" ? styles.product : styles.default;

  const bgColor = currentStyle.background;
  const buttonVariant = currentStyle.button as "default" | "secondary";
  const descriptionColor = currentStyle.description;
  const titleColor = currentStyle.title;
  const accentColor = currentStyle.accent;
  const accentText = currentStyle.text.accent;
  const description = currentStyle.text.description;
  const title = currentStyle.text.title;

  return (
    <section
      className={`relative ${bgColor} ${descriptionColor} gap-4 h-fit md:min-h-[400px] flex justify-center items-center py-16 md:py-20 px-4 md:px-10`}
    >
      <Image
        className="z-0 hidden md:block select-none"
        src="/icons/rem-met-triple-stars-icon.svg"
        alt="REM-MET Triple Stars Icon"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-2xl z-1">
        <div className="flex flex-col items-center gap-2">
          <AccentText className={accentColor}>{accentText}</AccentText>
          <h2 className={`text-2xl md:text-4xl font-medium ${titleColor}`}>
            {title}
          </h2>
        </div>
        <p className="text-md md:text-lg mb-4 md:mb-0">{description}</p>

        <ContactDialog
          triggerButton={
            <Button variant={buttonVariant} className="w-full md:w-auto">
              {t("button")}
            </Button>
          }
        />
      </div>

      <Image
        className="scale-x-[-1] z-0 hidden md:block select-none"
        src="/icons/rem-met-triple-stars-icon.svg"
        alt="REM-MET Triple Stars Icon"
        width={200}
        height={200}
      />
    </section>
  );
};

export default ContactSection;
