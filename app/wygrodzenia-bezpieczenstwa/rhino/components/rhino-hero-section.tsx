import ProductHeroSection from "@/components/product-hero-section";
import useTranslations from "@/hooks/useTranslations";

const RhinoHeroSection = () => {
  const t = useTranslations("rhino");

  return (
    <ProductHeroSection
      accent={t("accent")}
      title={t("title")}
      imageDesktopSrc="/images/products/rem-met-rhino-hero-shadow.webp"
      imageMobileSrc="/images/products/rem-met-rhino-hero-mobile.webp"
      imageAlt={t("alt")}
      nameSrc="/images/products/rem-met-rhino-name.svg"
      nameAlt={t("nameAlt")}
    />
  );
};

export default RhinoHeroSection;
