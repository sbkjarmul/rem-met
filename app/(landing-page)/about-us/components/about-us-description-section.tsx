import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface StatisticsCardProps {
  value: string;
  text: string;
  subtext?: string;
}

const StatisticsCard = ({ value, text, subtext }: StatisticsCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center md:text-left md:items-start md:justify-start">
      <h3 className="text-8xl font-medium text-brand-blue-200">{value}</h3>
      <div>
        <p className="text-gray-500 text-2xl md:text-lg">{text}</p>
        {subtext && (
          <p className="text-gray-400 text-md md:text-sm">{subtext}</p>
        )}
      </div>
    </div>
  );
};

const AboutUsDescriptionSection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="flex flex-col justify-start relative bg-gray-200 min-h-[800px]">
      <Container className="relative z-1 flex flex-col justify-center gap-10 md:gap-20 py-16 md:py-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("breadcrumb")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                {t("name")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-20 items-start">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <AccentText className="text-brand-blue-200 hidden md:block">
                {t("description.accent")}
              </AccentText>
              <h2 className="text-3xl text-brand-blue-200 font-medium md:hidden">
                {t("description.accent")}
              </h2>
              <h2 className="text-4xl text-gray-600 hidden md:block">
                {t("description.title")}
              </h2>
              <p className="text-gray-500 text-lg md:hidden">
                {t("description.title")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <StatisticsCard value="100+" text={t("description.statistics.1")} />
            <StatisticsCard
              value="20+"
              text={t("description.statistics.2")}
              subtext={t("description.statistics.2.subtext")}
            />
            <StatisticsCard value="3" text={t("description.statistics.4")} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsDescriptionSection;
