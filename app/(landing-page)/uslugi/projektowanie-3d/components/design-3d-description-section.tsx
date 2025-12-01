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
import Image from "next/image";

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

const Design3dDescriptionSection = () => {
  const t = useTranslations("design3d");

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
          <div className="flex flex-col w-full lg:w-1/2 gap-10 items-start">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-2">
                <AccentText className="text-brand-blue-200 hidden md:block">
                  {t("description.accent")}
                </AccentText>
                <h2 className="text-3xl text-brand-blue-200 font-medium md:hidden">
                  {t("description.title")}
                </h2>
                <h2 className="text-4xl text-gray-600 hidden md:block font-medium">
                  {t("description.title")}
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
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
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src="/images/services/rem-met-design-3d-logo-3d.webp"
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

export default Design3dDescriptionSection;
