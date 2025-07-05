import ProductHeroSection from "@/components/product-hero-section";
import useTranslations from "@/hooks/useTranslations";

const FalconHeroSection = () => {
  const t = useTranslations("falcon");

  return (
    <ProductHeroSection
      accent={t("accent")}
      title={t("title")}
      imageDesktopSrc="/images/products/rem-met-falcon-hero-shadow.webp"
      imageMobileSrc="/images/products/rem-met-falcon-hero-mobile.webp"
      imageAlt={t("alt")}
      nameSrc="/images/products/rem-met-falcon-name.svg"
      nameAlt={t("nameAlt")}
    />
  );
};

export default FalconHeroSection;
