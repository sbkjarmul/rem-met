import SpecificationSection from "@/components/specification/specification-section";
import useTranslations from "@/hooks/useTranslations";

const GeckoSpecificationSection = () => {
  const t = useTranslations("gecko");

  return (
    <SpecificationSection
      panelText={t("specification.panel.description")}
      panelImageSrc="/images/products/rem-met-gecko-panel.webp"
      panelImageAlt={t("specification.panel.alt")}
      gateImageSrc="/images/products/rem-met-gecko-gate.webp"
      gateImageAlt={t("specification.gates.alt")}
      postImageSrc="/images/products/rem-met-fence-post.webp"
      postImageAlt={t("specification.posts.alt")}
    />
  );
};

export default GeckoSpecificationSection;
