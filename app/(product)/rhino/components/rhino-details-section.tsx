import ProductDetailsSection, {
  ProductFeature,
} from "@/components/product-details-section";
import useTranslations from "@/hooks/useTranslations";

const RhinoDetailsSection = () => {
  const t = useTranslations("rhino");

  const features: ProductFeature[] = [
    {
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
  ];

  return (
    <ProductDetailsSection
      name={t("name")}
      accent={t("details.accent")}
      title={t("details.title")}
      titleMobile={t("details.title.mobile")}
      description={t("details.description")}
      imageSrc="/images/products/rem-met-rhino-izo.png"
      imageAlt={t("details.alt")}
      features={features}
    />
  );
};

export default RhinoDetailsSection;
