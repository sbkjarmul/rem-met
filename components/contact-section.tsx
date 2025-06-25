import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";
import { AccentText } from "@/components/ui/accent-text";
import Button from "@/components/ui/button";

const ContactSection = () => {
  const t = useTranslations("contactSection");

  return (
    <section className="relative bg-gray-900 gap-4 h-fit min-h-[400px] flex justify-center items-center py-20 px-10">
      <Image
        className="z-0 hidden md:block"
        src="/icons/rem-met-triple-stars-icon.svg"
        alt="REM-MET Triple Stars Icon"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center gap-8 text-center max-w-2xl z-1">
        <div className="flex flex-col items-center gap-2">
          <AccentText className="text-brand-blue-100">{t("accent")}</AccentText>
          <h2 className="text-4xl font-medium text-gray-100">{t("title")}</h2>
        </div>
        <p className="text-lg text-gray-400">{t("description")}</p>
        <Button>{t("button")}</Button>
      </div>

      <Image
        className="scale-x-[-1] z-0 hidden md:block"
        src="/icons/rem-met-triple-stars-icon.svg"
        alt="REM-MET Triple Stars Icon"
        width={200}
        height={200}
      />
    </section>
  );
};

export default ContactSection;
