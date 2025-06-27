import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "./ui/accent-text";
import Container from "./ui/container";
import Image from "next/image";

const ColorsSection = () => {
  const t = useTranslations("colors");

  return (
    <section className="bg-brand-blue-400 text-gray-500 pt-16 md:pt-20 flex flex-col justify-end">
      <Container className="flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 items-center text-center">
            <AccentText className="text-brand-blue-200">
              {t("accent")}
            </AccentText>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-300">
              <span className="hidden md:block">{t("title")}</span>
              <span className="block md:hidden">{t("title.mobile")}</span>
            </h2>
          </div>
          <p className="text-sm text-center whitespace-pre-line hidden md:block">
            {t("description")}
          </p>
          <p className="text-md text-center whitespace-pre-line md:hidden">
            {t("description.mobile")}
          </p>
        </div>
        <div className="relative w-full aspect-13/6 mx-auto aspect-3/1">
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
