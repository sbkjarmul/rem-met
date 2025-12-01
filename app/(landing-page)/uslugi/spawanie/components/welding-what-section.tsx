"use client";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

const WeldingWhatSection = () => {
  const t = useTranslations("welding");

  return (
    <section className="flex flex-col justify-center items-center relative min-h-[400px] bg-gray-900">
      <Container className="relative z-1 flex flex-col lg:flex-row justify-center gap-20 py-16 md:py-20">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2 text-center">
            <AccentText className="text-brand-blue-200">
              {t("what.accent")}
            </AccentText>
            <h2 className="text-4xl md:text-6xl text-gray-200 font-medium">
              {t("what.title")}
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeldingWhatSection;
