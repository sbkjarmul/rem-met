import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

import Image from "next/image";

interface DocumentationCardProps {
  text: string;
  subtext?: string;
}

const DocumentationCard = ({ text, subtext }: DocumentationCardProps) => {
  return (
    <div className="flex flex-col gap-1 max-w-md">
      <h3 className="text-2xl font-medium text-gray-200">{text}</h3>
      <div>
        <p className="text-gray-500 text-md">{subtext}</p>
      </div>
    </div>
  );
};

const Design3dDocumentationSection = () => {
  const t = useTranslations("design3d");

  return (
    <section className="flex flex-col justify-center items-center relative min-h-[800px] bg-brand-blue-400">
      <Container className="relative z-1 flex flex-col-reverse lg:flex-row justify-center gap-10 md:gap-20 py-16 md:py-20">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/services/rem-met-design-3d-documentation.png"
            alt={t("hero.image.alt")}
            width={1920}
            height={1080}
            sizes="50vw"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-10 items-start">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <AccentText className="text-brand-blue-200">
                {t("documentation.accent")}
              </AccentText>
              <h2 className="text-3xl text-gray-200 font-medium md:hidden">
                {t("documentation.title")}
              </h2>
              <h2 className="text-4xl text-gray-200 font-medium hidden md:block">
                {t("documentation.title")}
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <DocumentationCard
              text={t("documentation.feature1.text")}
              subtext={t("documentation.feature1.subtext")}
            />

            <DocumentationCard
              text={t("documentation.feature2.text")}
              subtext={t("documentation.feature2.subtext")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Design3dDocumentationSection;
