import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

import Image from "next/image";

interface SupportCardProps {
  text: string;
  subtext?: string;
}

const SupportCard = ({ text, subtext }: SupportCardProps) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center text-center md:text-left md:items-start md:justify-start max-w-md">
      <h3 className="text-lg font-medium text-gray-700">{text}</h3>
      <div>
        <p className="text-gray-500 text-sm text-md">{subtext}</p>
      </div>
    </div>
  );
};

const Design3dSupportSection = () => {
  const t = useTranslations("design3d");

  return (
    <section className="flex flex-col relative bg-gray-200 min-h-[800px]">
      <Container className="relative z-1 flex flex-row gap-10 flex-1 h-full">
        <div className="flex flex-col w-1/2 gap-10 items-start justify-center py-16 md:py-20 flex-1 ">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <AccentText className="text-brand-blue-200 hidden md:block">
                {t("support.accent")}
              </AccentText>
              <h2 className="text-3xl text-brand-blue-200 font-medium md:hidden">
                {t("support.title")}
              </h2>
              <h2 className="text-4xl text-gray-600 hidden md:block">
                {t("support.title")}
              </h2>
            </div>
            <p className="text-gray-500 whitespace-pre-line">
              <span className="text-md">{t("support.description")}</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <SupportCard
              text={t("support.feature1.text")}
              subtext={t("support.feature1.subtext")}
            />

            <SupportCard
              text={t("support.feature2.text")}
              subtext={t("support.feature2.subtext")}
            />

            <SupportCard
              text={t("support.feature3.text")}
              subtext={t("support.feature3.subtext")}
            />

            <SupportCard
              text={t("support.feature3.text")}
              subtext={t("support.feature3.subtext")}
            />
          </div>
        </div>

        <div className="flex flex-col w-1/2 items-start justify-end pt-16 md:pt-20">
          <div className="w-full">
            <Image
              src="/images/services/rem-met-design-3d-support.png"
              alt={t("hero.image.alt")}
              width={1920}
              height={1080}
              sizes="50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Design3dSupportSection;
