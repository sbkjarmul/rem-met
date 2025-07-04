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

const StandardsDescriptionSection = () => {
  const t = useTranslations("standards");

  return (
    <section className="flex flex-col justify-start relative bg-white h-fit">
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
            <div className="flex flex-col gap-6 md:gap-2">
              <AccentText className="text-brand-blue-200 hidden md:block">
                {t("description.accent")}
              </AccentText>
              <h2 className="text-3xl text-brand-blue-200 font-medium md:hidden">
                {t("description.accent")}
              </h2>

              <h2 className="text-4xl hidden md:block">
                <span className="font-normal text-gray-500 mr-1">
                  {t("description.title.regular")}
                </span>
                <span className="font-medium text-gray-600">
                  {t("description.title.bold")}
                </span>
              </h2>

              <p className="md:hidden">
                <span className="font-normal text-gray-500 mr-1">
                  {t("description.title.regular")}
                </span>
                <span className="font-medium text-gray-600">
                  {t("description.title.bold")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StandardsDescriptionSection;
