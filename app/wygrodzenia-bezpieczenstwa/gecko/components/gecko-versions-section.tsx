import Image from "next/image";

import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

interface GeckoVersionCardProps {
  name: string;
  version: string;
  description: string;
  imageUrl: string;
}

const GeckoVersionCard = ({
  name,
  version,
  description,
  imageUrl,
}: GeckoVersionCardProps) => {
  return (
    <div className="flex flex-col gap-8 w-full bg-gray-100 px-6 py-16 justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-4xl flex items-center gap-2">
          <span className="text-gray-600 font-medium">{name}</span>
          <span className="text-gray-500 font-normal">{version}</span>
        </h3>
        <p className="text-gray-500 text-center text-sm">{description}</p>
      </div>
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={`${name} ${version}. ${description}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default function GeckoVersionsSection() {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-end relative bg-gray-900 text-gray-100">
      <Container className="relative z-1 flex flex-col justify-center gap-20 py-16 md:py-20 md:pb-0">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-[28px] md:text-4xl font-medium gap-0 flex flex-col md:flex-row">
            <span className="block md:inline">
              <span className="text-gray-500 mr-2">{t("3")}</span>
              <span>{t("versions")}.</span>
            </span>
            <span className="block md:inline">
              <span className="text-gray-500 mr-2">{t("3")}</span>
              <span>{t("levels")}.</span>
            </span>
          </h2>

          <div className="relative w-full aspect-[3/1] hidden md:block">
            <Image
              src="/images/products/rem-met-gecko-versions.webp"
              alt={t("versions.alt")}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] w-full gap-[1px] bg-gray-300 border border-gray-300">
        <GeckoVersionCard
          name={t("name")}
          version={t("vision.name")}
          description={t("vision.description")}
          imageUrl="/images/products/rem-met-gecko-vision-panel.webp"
        />
        <GeckoVersionCard
          name={t("name")}
          version={t("solid.name")}
          description={t("solid.description")}
          imageUrl="/images/products/rem-met-gecko-solid-double-panel.webp"
        />
        <GeckoVersionCard
          name={t("name")}
          version={t("air.name")}
          description={t("air.description")}
          imageUrl="/images/products/rem-met-gecko-air-panel.webp"
        />
      </div>
    </section>
  );
}
