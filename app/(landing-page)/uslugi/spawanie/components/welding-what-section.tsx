"use client";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

interface WeldingServiceItemProps {
  title: string;
  description: React.ReactNode;
}

const WeldingServiceItem = ({
  title,
  description,
}: WeldingServiceItemProps) => {
  return (
    <div className="flex flex-col justify-start p-6 bg-gray-200 gap-4">
      <h3 className="text-xl text-brand-blue-200 font-medium">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

const WeldingWhatSection = () => {
  const t = useTranslations("welding");

  return (
    <section className="flex flex-col justify-center items-center relative min-h-[400px] bg-gray-300">
      <Container className="relative z-1 flex flex-col lg:flex-row justify-center gap-10 md:gap-20 py-16 md:py-20">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2 text-left">
            <AccentText className="text-brand-blue-200">
              {t("what.accent")}
            </AccentText>
            <h2 className="text-4xl md:text-5xl text-gray-600 font-medium">
              {t("what.title")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6">
          <WeldingServiceItem
            title={t("fences.title")}
            description={t("fences.description")}
          />
          <WeldingServiceItem
            title={t("shelves.title")}
            description={t("shelves.description")}
          />
          <WeldingServiceItem
            title={t("construction.title")}
            description={t("construction.description")}
          />
          <WeldingServiceItem
            title={t("elements.title")}
            description={t("elements.description")}
          />
        </div>
      </Container>
    </section>
  );
};

export default WeldingWhatSection;
