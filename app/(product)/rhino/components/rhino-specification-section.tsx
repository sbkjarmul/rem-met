import SpecificationSection from "@/components/specification/specification-section";
import useTranslations from "@/hooks/useTranslations";

const RhinoSpecificationSection = () => {
  const t = useTranslations("rhino");

  return (
    <SpecificationSection
      panelText={t("specification.panel.description")}
      panelImageSrc="/images/products/rem-met-rhino-solid-panel.png"
      panelImageAlt={t("specification.panel.alt")}
      gateImageSrc="/images/products/rem-met-rhino-gate.png"
      gateImageAlt={t("specification.gates.alt")}
      postImageSrc="/images/products/rem-met-fence-post.png"
      postImageAlt={t("specification.posts.alt")}
    />
  );
};

export default RhinoSpecificationSection;
