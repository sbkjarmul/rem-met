import * as React from "react";

import useTranslations from "@/hooks/useTranslations";
import ProductHeroSection from "@/components/product-hero-section";

const GeckoHeroSection = () => {
  const t = useTranslations("gecko");

  return (
    <ProductHeroSection
      accent={t("accent")}
      title={t("title")}
      imageDesktopSrc="/images/products/rem-met-gecko-hero-shadow.png"
      imageMobileSrc="/images/products/rem-met-gecko-hero-mobile.png"
      imageAlt={t("imageAlt")}
      nameSrc="/images/products/rem-met-gecko-name.svg"
      nameAlt={t("nameAlt")}
    />
  );
};

export default GeckoHeroSection;
