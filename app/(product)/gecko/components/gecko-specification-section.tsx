import SpecificationSection from "@/components/specification/specification-section";
import useTranslations from "@/hooks/useTranslations";

const GeckoSpecificationSection = () => {
  const t = useTranslations("gecko");

  return (
    <SpecificationSection
      panelText={t("specification.panel.description")}
      panelImageSrc="/images/products/rem-met-gecko-air-panel.png"
      panelImageAlt={t("specification.panel.alt")}
      gateImageSrc="/images/products/rem-met-gecko-air-gate.png"
      gateImageAlt={t("specification.gates.alt")}
      postImageSrc="/images/products/rem-met-fence-post.png"
      postImageAlt={t("specification.posts.alt")}
    />
  );
};

export default GeckoSpecificationSection;
