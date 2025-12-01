import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

interface WhyCardProps {
  text: string;
  subtext?: string;
}

const WhyCard = ({ text, subtext }: WhyCardProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1 text-left items-start justify-start max-w-md">
      <h3 className="text-xl font-medium text-gray-200">{text}</h3>
      <div>
        <p className="text-gray-400 text-md">{subtext}</p>
      </div>
    </div>
  );
};

const DesignCadWhySection = () => {
  const t = useTranslations("designCad");

  return (
    <section className="flex flex-col relative min-h-[600px] bg-brand-blue-200">
      <Container className="relative z-1 flex flex-row gap-10 flex-1 h-full">
        <div className="flex flex-col gap-10 md:gap-20 items-start justify-center py-16 md:py-20 flex-1">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <AccentText className="text-gray-400">
                {t("why.accent")}
              </AccentText>
              <h2 className="text-3xl text-gray-200 font-medium md:hidden">
                {t("why.title")}
              </h2>
              <h2 className="text-4xl text-gray-200 font-medium hidden md:block">
                {t("why.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-content gap-10">
            <WhyCard
              text={t("why.feature1.text")}
              subtext={t("why.feature1.subtext")}
            />

            <WhyCard
              text={t("why.feature2.text")}
              subtext={t("why.feature2.subtext")}
            />

            <WhyCard
              text={t("why.feature3.text")}
              subtext={t("why.feature3.subtext")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DesignCadWhySection;
