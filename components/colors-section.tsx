import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "./ui/accent-text";
import Container from "./ui/container";
import Image from "next/image";

const ColorsSection = () => {
  const t = useTranslations("colors");

  return (
    <section className="bg-brand-blue-400 text-gray-500 pt-20 flex flex-col justify-end">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 items-center text-center">
            <AccentText className="text-brand-blue-200">
              {t("accent")}
            </AccentText>
            <h2 className="text-5xl font-medium text-gray-300">{t("title")}</h2>
          </div>
          <p className="text-sm text-center whitespace-pre-line">
            {t("description")}
          </p>
        </div>
        <div className="relative w-full aspect-3/1">
          <Image
            src="/images/products/rem-met-color-buckets.png"
            alt={t("alt")}
            fill
            className="object-contain select-none"
          />
        </div>
      </Container>
    </section>
  );
};

export default ColorsSection;
