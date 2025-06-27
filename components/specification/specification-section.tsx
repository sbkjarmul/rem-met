import Image from "next/image";
import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import SpecificationBox from "./specification-box";

interface SpecificationSectionProps {
  panelText: string;
  panelImageSrc: string;
  panelImageAlt: string;
  gateImageSrc: string;
  gateImageAlt: string;
  postImageSrc: string;
  postImageAlt: string;
}

const SpecificationSection = ({
  panelText,
  panelImageSrc,
  panelImageAlt,
  gateImageSrc,
  gateImageAlt,
  postImageSrc,
  postImageAlt,
}: SpecificationSectionProps) => {
  const t = useTranslations("specification");

  return (
    <section className="flex flex-col justify-end relative bg-gray-300 text-gray-800 py-20">
      <Container className="relative z-1 flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2 items-center text-center">
            <AccentText className="text-brand-blue-200">
              {t("accent")}
            </AccentText>

            <h2 className="text-4xl font-medium gap-2 flex items-center uppercase text-gray-600">
              <span className="hidden md:block">{t("title")}</span>
              <span className="block md:hidden">{t("title.mobile")}</span>
            </h2>
          </div>

          <SpecificationBox
            title={t("panel.title")}
            description={panelText}
            data={[
              {
                name: t("panel.table.height"),
                value: t("panel.table.height.value"),
              },
              {
                name: t("panel.table.width"),
                value: t("panel.table.width.value"),
              },
              {
                name: t("panel.table.colors"),
                value: (
                  <div className="flex gap-1 items-center h-full">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                    <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                  </div>
                ),
              },
            ]}
            imageSrc={panelImageSrc}
            imageAlt={panelImageAlt}
          />

          <SpecificationBox
            title={t("gates.title")}
            description={t("gates.description")}
            data={[
              {
                name: t("gates.table.height"),
                value: t("gates.table.height.value"),
              },
              {
                name: t("gates.table.width"),
                value: t("gates.table.width.value"),
              },
              {
                name: t("gates.table.colors"),
                value: (
                  <div className="flex gap-1 items-center h-full">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                    <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                  </div>
                ),
              },
            ]}
            imageSrc={gateImageSrc}
            imageAlt={gateImageAlt}
            isReversed
          />

          <SpecificationBox
            title={t("posts.title")}
            description={t("posts.description")}
            data={[
              {
                name: t("posts.table.height"),
                value: t("posts.table.height.value"),
              },
              {
                name: t("posts.table.dimension"),
                value: t("posts.table.dimension.value"),
              },
              {
                name: t("posts.table.colors"),
                value: (
                  <div className="flex gap-1 items-center h-full">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full border-1 border-gray-300" />
                    <div className="w-5 h-5 bg-black rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-brand-blue-200 rounded-full border-1 border-gray-400" />
                    <div className="w-5 h-5 bg-green-600 rounded-full border-1 border-gray-400" />
                  </div>
                ),
              },
            ]}
            imageSrc={postImageSrc}
            imageAlt={postImageAlt}
          />
        </div>
      </Container>
    </section>
  );
};

export default SpecificationSection;
