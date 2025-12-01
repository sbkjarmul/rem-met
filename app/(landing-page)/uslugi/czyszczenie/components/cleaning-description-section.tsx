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

interface DescriptionCardProps {
  text: string;
  subtext?: string;
}

const DescriptionCard = ({ text, subtext }: DescriptionCardProps) => {
  return (
    <div className="flex flex-col gap-1 :justify-center items-center items-start md:text-center md:text-left max-w-md">
      <h3 className="text-2xl font-medium text-gray-700">{text}</h3>
      <div>
        <p className="text-gray-500 text-md">{subtext}</p>
      </div>
    </div>
  );
};

const CleaningDescriptionSection = () => {
  const t = useTranslations("cleaning");

  return (
    <section className="flex flex-col justify-start relative bg-gray-200 min-h-[800px]">
      <Container className="relative z-1 flex flex-col justify-center gap-10 md:gap-20 py-16 md:py-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("breadcrumb")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{t("offer")}</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                {t("name")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col lg:flex-row gap-10 items-start md:items-center">
          <div className="flex flex-col w-full gap-10 md:gap-20 items-start">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-2">
                <AccentText className="text-brand-blue-200 hidden md:block">
                  {t("description.accent")}
                </AccentText>
                <h2 className="text-xl md:text-3xl">
                  <span className="text-gray-600 ">
                    {t("description.title")}
                  </span>
                  <span className="ml-1 text-gray-700 font-medium">
                    {t("description.subtitle")}
                  </span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <DescriptionCard
                text={t("description.feature1.text")}
                subtext={t("description.feature1.subtext")}
              />

              <DescriptionCard
                text={t("description.feature2.text")}
                subtext={t("description.feature2.subtext")}
              />

              <DescriptionCard
                text={t("description.feature3.text")}
                subtext={t("description.feature3.subtext")}
              />

              <DescriptionCard
                text={t("description.feature4.text")}
                subtext={t("description.feature4.subtext")}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CleaningDescriptionSection;
