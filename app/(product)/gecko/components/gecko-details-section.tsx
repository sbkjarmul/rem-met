import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

interface DetailsCardProps {
  title: string;
  description: string;
}

const DetailsCard = ({ title, description }: DetailsCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-medium text-brand-blue-200">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function GeckoDetailsSection() {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-start relative bg-white min-h-[800px] ">
      <Container className="relative z-1 flex flex-col justify-center gap-20 py-20">
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

        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <div className="flex flex-col gap-2">
              <AccentText className="text-brand-blue-200">
                {t("details.accent")}
              </AccentText>
              <h2 className="text-4xl font-medium text-gray-900">
                <span className="hidden md:block">{t("details.title")}</span>
                <span className="block md:hidden">
                  {t("details.title.mobile")}
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg">{t("details.description")}</p>
          </div>
          <div className="relative w-full md:w-1/2 aspect-square">
            <Image
              src="/images/products/rem-met-gecko-izo.png"
              alt={t("details.alt")}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DetailsCard
            title={t("feature1.title")}
            description={t("feature1.description")}
          />
          <DetailsCard
            title={t("feature2.title")}
            description={t("feature2.description")}
          />
          <DetailsCard
            title={t("feature3.title")}
            description={t("feature3.description")}
          />
        </div>
      </Container>
    </section>
  );
}
