import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

interface StandardCardProps {
  accent: string;
  title: string;
  description: string;
}

const StandardCard = ({ accent, title, description }: StandardCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <AccentText className="text-brand-blue-200">{accent}</AccentText>
        <h3 className="text-lg md:text-2xl text-gray-600 font-medium">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-2 border-l-6 border-brand-blue-200 pl-4">
        <p className="text-gray-500 text-md whitespace-pre-line leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

const StandardsIso14120Section = () => {
  const t = useTranslations("standards");

  return (
    <section className="flex flex-col justify-start relative bg-gray-200 h-fit py-16 md:py-20 gap-10 md:gap-20">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <AccentText className="text-brand-blue-200">
            {t("iso14120.accent")}
          </AccentText>
          <h2 className="text-xl md:text-4xl font-medium text-gray-600">
            {t("iso14120.title")}
          </h2>
        </div>
        <p className="text-gray-600">{t("iso14120.description")}</p>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <StandardCard
            accent={t("iso14120.5.2.4.accent")}
            title={t("iso14120.5.2.4.title")}
            description={t("iso14120.5.2.4.description")}
          />
          <StandardCard
            accent={t("iso14120.5.2.5.2.accent")}
            title={t("iso14120.5.2.5.2.title")}
            description={t("iso14120.5.2.5.2.description")}
          />
          <StandardCard
            accent={t("iso14120.5.2.5.3.accent")}
            title={t("iso14120.5.2.5.3.title")}
            description={t("iso14120.5.2.5.3.description")}
          />
          <StandardCard
            accent={t("iso14120.5.3.3.accent")}
            title={t("iso14120.5.3.3.title")}
            description={t("iso14120.5.3.3.description")}
          />
          <StandardCard
            accent={t("iso14120.5.10.accent")}
            title={t("iso14120.5.10.title")}
            description={t("iso14120.5.10.description")}
          />
          <StandardCard
            accent={t("iso14120.5.18.accent")}
            title={t("iso14120.5.18.title")}
            description={t("iso14120.5.18.description")}
          />
        </div>
      </Container>
    </section>
  );
};

export default StandardsIso14120Section;
