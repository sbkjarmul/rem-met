import ProductVersionsSection from "@/components/product-versions-section";
import useTranslations from "@/hooks/useTranslations";

const RhinoVersionsSection = () => {
  const t = useTranslations("rhino");

  const productVersions = [
    {
      name: t("name"),
      version: t("solid.name"),
      description: t("solid.description"),
      imageUrl: "/images/products/rem-met-rhino-solid-panel.png",
    },
    {
      name: t("name"),
      version: t("vision.name"),
      description: t("vision.description"),
      imageUrl: "/images/products/rem-met-rhino-vision-panel.png",
    },
  ];

  return (
    <ProductVersionsSection
      header={
        <h2 className="text-[28px] md:text-4xl font-medium flex flex-col md:flex-row">
          <span className="block md:inline">
            <span className="text-gray-500 mr-2">{t("2")}</span>
            <span>{t("versions")}.</span>
          </span>
          <span className="block md:inline">
            <span className="text-gray-500 ml-0 mr-2 md:ml-2 ">{t("two")}</span>
            <span>{t("levels")}.</span>
          </span>
        </h2>
      }
      imageUrl="/images/products/rem-met-rhino-versions.png"
      imageAlt={t("versions.alt")}
      productVersions={productVersions}
    />
  );
};

export default RhinoVersionsSection;
