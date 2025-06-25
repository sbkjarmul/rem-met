import * as React from "react";
import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";

import {
  ProgressIcon,
  RecycleIcon,
  SecurityTimeIcon,
} from "@/components/icons";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  const shadowStyle = {
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))",
  };

  const clipPathStyle = {
    clipPath: "polygon(0% 65%, 25% 100%, 85% 100%, 100% 35%, 75% 0%, 15% 0%)",
  };

  return (
    <div style={shadowStyle}>
      <div
        style={clipPathStyle}
        className="bg-brand-blue-200 text-white flex justify-center items-center gap-2 w-[100px] h-[80px]"
      >
        {children}
      </div>
    </div>
  );
};

interface QualityItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const QualityItem = ({ title, description, icon }: QualityItemProps) => {
  return (
    <div className="flex flex-row gap-10 items-center">
      <IconWrapper>{icon}</IconWrapper>

      <div className="flex flex-col w-[320px] gap-1">
        <h4 className="text-xl font-medium text-gray-400">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const QualitySection = () => {
  const t = useTranslations("quality");

  return (
    <section className="relative bg-gray-900 h-fit min-h-[800px] flex flex-col justify-center items-center py-10">
      <Container className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col max-w-4xl text-start z-10 gap-8 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <AccentText className="text-brand-blue-100">
              {t("accent")}
            </AccentText>
            <h2 className="text-4xl md:text-4xl font-medium text-gray-200">
              {t("title")}
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <QualityItem
              title={t("feature1.title")}
              description={t("feature1.description")}
              icon={<ProgressIcon size={48} />}
            />
            <QualityItem
              title={t("feature2.title")}
              description={t("feature2.description")}
              icon={<SecurityTimeIcon size={48} />}
            />
            <QualityItem
              title={t("feature3.title")}
              description={t("feature3.description")}
              icon={<RecycleIcon size={48} />}
            />
          </div>
        </div>
        <div className="relative w-full aspect-[1/1] lg:absolute lg:inset-y-4 lg:right-12 lg:w-11/24">
          <Image
            src="/images/rem-met-falcon-details.png"
            alt="Quality Section"
            fill
            className="object-contain"
            id="details"
          />
        </div>
      </Container>
    </section>
  );
};

export default QualitySection;
