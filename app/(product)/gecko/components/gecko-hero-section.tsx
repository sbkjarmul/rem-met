import * as React from "react";
import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import useTranslations from "@/hooks/useTranslations";
import Container from "@/components/ui/container";

const GeckoHeroSection = () => {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-end relative bg-gray-400 md:bg-gradient-to-b from-gray-400 from-[75%] to-[80%] to-white min-h-[500px] md:min-h-screen gap-10">
      <Container className="relative z-1 flex flex-col justify-end gap-10">
        <div className="mx-auto text-center gap-2 flex flex-col">
          <AccentText className="text-brand-blue-200">{t("accent")}</AccentText>
          <h1 className="text-3xl md:text-5xl font-medium uppercase text-gray-900">
            {t("title")}
          </h1>
        </div>
        <div className="relative w-full z-3 hidden md:block aspect-5/3">
          <Image
            src="/images/products/rem-met-gecko-hero-shadow.png"
            alt={t("alt")}
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-30 md:top-0 left-0 w-full aspect-video z-2">
          <Image
            src="/images/products/rem-met-gecko-name.svg"
            alt={t("nameAlt")}
            fill
            className="object-contain"
          />
        </div>
      </Container>
      <div className="relative w-full z-3 md:hidden aspect-6/3">
        <Image
          src="/images/products/rem-met-gecko-hero-mobile.png"
          alt={t("alt")}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full aspect-video z-0 hidden md:block">
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
