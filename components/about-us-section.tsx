import * as React from "react";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";

import {
  ClenchedFistIcon,
  ShieldIcon,
  ToolIcon,
  UserIcon,
} from "@/components/icons";

const AboutUsSection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="relative bg-white h-fit md:min-h-[800px] flex flex-col justify-center items-start py-16 md:py-0">
      <Container className="flex flex-col gap-10 md:gap-16 items-center">
        <div className="flex flex-col max-w-4xl text-left md:text-center z-10 gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <AccentText className="text-brand-blue-100">
              {t("accent")}
            </AccentText>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
              <span className="hidden md:block">{t("title.desktop")}</span>
              <span className="block md:hidden">{t("title.mobile")}</span>
            </h2>
          </div>
          <p className="text-md md:text-lg text-gray-500">{t("description")}</p>
        </div>
        <div className="grid grid-cols-[170px_170px] sm:grid-cols-[260px_260px] grid-rows-[56px_56px] sm:grid-rows-[80px_80px] gap-x-0 gap-y-3 sm:gap-y-4">
          <FeatureCard
            icon={<ClenchedFistIcon size={40} />}
            text={t("feature1")}
          />
          <FeatureCard
            icon={<ToolIcon size={40} />}
            text={t("feature2")}
            className="translate-y-6 sm:translate-y-10"
          />
          <FeatureCard
            icon={<ShieldIcon size={40} />}
            text={t("feature3")}
            className="translate-x-2"
          />
          <FeatureCard
            icon={<UserIcon size={40} />}
            text={t("feature4")}
            className="translate-y-6 sm:translate-y-10 translate-x-2"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
