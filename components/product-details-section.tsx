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

export interface ProductFeature {
  title: string;
  description: string;
}

interface ProductDetailsSectionProps {
  name: string;
  accent: string;
  title: string;
  titleMobile: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: ProductFeature[];
}
export default function ProductDetailsSection({
  name,
  accent,
  title,
  titleMobile,
  description,
  imageSrc,
  imageAlt,
  features,
}: ProductDetailsSectionProps) {
  const t = useTranslations("product");

  return (
    <section className="flex flex-col justify-start relative bg-white min-h-[800px] ">
      <Container className="relative z-1 flex flex-col justify-center gap-10 md:gap-20 py-16 md:py-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("breadcrumb")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                {name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <div className="flex flex-col gap-2">
              <AccentText className="text-brand-blue-200">{accent}</AccentText>
              <h2 className="text-4xl font-medium text-gray-900">
                <span className="hidden md:block">{title}</span>
                <span className="block md:hidden">{titleMobile}</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
          <div className="relative w-full md:w-1/2 aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              quality={85}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature: ProductFeature) => (
            <DetailsCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
