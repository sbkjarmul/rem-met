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
import { EyeIcon, HourGlassIcon, UserIcon } from "@/components/icons";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  const clipPathStyle = {
    clipPath: "polygon(0% 65%, 25% 100%, 85% 100%, 100% 35%, 75% 0%, 15% 0%)",
  };

  return (
    <div>
      <div
        style={clipPathStyle}
        className="bg-brand-blue-200 text-white flex justify-center items-center gap-2 w-[75px] h-[60px] md:w-[100px] md:h-[80px]"
      >
        <span className="w-[36px] md:w-[48px]">{children}</span>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex flex-row gap-4 md:gap-6 items-start justify-start">
      <IconWrapper>{icon}</IconWrapper>

      <div className="flex flex-col w-[320px] gap-1">
        <h4 className="text-md md:text-xl font-medium text-gray-600">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const WeldingDescriptionSection = () => {
  const t = useTranslations("welding");

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
                  <span className="text-gray-700 font-medium">
                    {t("description.title")}
                  </span>
                  <span className="ml-1 text-gray-600">
                    {t("description.subtitle")}
                  </span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FeatureItem
                icon={<UserIcon size={40} />}
                title={t("description.feature1.text")}
                description={t("description.feature1.subtext")}
              />

              <FeatureItem
                icon={<EyeIcon size={40} />}
                title={t("description.feature2.text")}
                description={t("description.feature2.subtext")}
              />

              <FeatureItem
                icon={<HourGlassIcon size={40} />}
                title={t("description.feature3.text")}
                description={t("description.feature3.subtext")}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeldingDescriptionSection;
