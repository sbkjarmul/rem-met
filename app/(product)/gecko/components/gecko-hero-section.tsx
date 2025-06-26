import * as React from "react";
import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useTranslations from "@/hooks/useTranslations";
import Container from "@/components/ui/container";

const GeckoHeroSection = () => {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-end relative bg-gradient-to-b from-gray-400 from-[75%] to-[80%] to-white min-h-screen">
      <Container className="relative z-1 flex flex-col justify-end gap-0">
        <div className="mx-auto text-center gap-2 flex flex-col">
          <AccentText className="text-brand-blue-200">{t("accent")}</AccentText>
          <h1 className="text-4xl md:text-5xl font-medium uppercase text-gray-900">
            {t("title")}
          </h1>
        </div>
        <AspectRatio ratio={5 / 3} className="w-full z-3">
          <Image
            src="/images/products/rem-met-gecko-hero-shadow.png"
            alt={t("alt")}
            fill
            className="object-contain"
          />
        </AspectRatio>
        <div className="absolute top-0 left-0 w-full aspect-video z-2">
          <Image
            src="/images/products/rem-met-gecko-name.svg"
            alt={t("nameAlt")}
            fill
            className="object-contain"
          />
        </div>
      </Container>
      <div className="absolute top-0 left-0 w-full aspect-video z-0">
        <Image
          src="/images/rem-met-product-section-light.png"
          alt={t("lightAlt")}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default GeckoHeroSection;
