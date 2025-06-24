import * as React from "react";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";

import {
  ClenchedFistIcon,
  ShieldIcon,
  ToolIcon,
  UserIcon,
} from "@/components/icons";

export const AboutUsSection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="relative bg-white h-fit min-h-[800px] flex flex-col justify-center items-start">
      <Container className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="max-w-4xl text-start z-10">
          <AccentText className="text-brand-blue-100">
            {t("aboutUsAccent")}
          </AccentText>
          <h2 className="mt-4 text-4xl md:text-4xl font-medium text-gray-900">
            {t("aboutUsTitle")}
          </h2>
          <p className="mt-6 text-lg text-gray-700">{t("description")}</p>
        </div>
        <div className="grid grid-cols-[260px_260px] grid-rows-[80px_80px] gap-x-0 gap-y-4">
          <FeatureCard
            icon={<ClenchedFistIcon size={40} />}
            text={t("feature1")}
          />
          <FeatureCard
            icon={<ToolIcon size={40} />}
            text={t("feature2")}
            className="translate-y-10"
          />
          <FeatureCard
            icon={<ShieldIcon size={40} />}
            text={t("feature3")}
            className="translate-x-2"
          />
          <FeatureCard
            icon={<UserIcon size={40} />}
            text={t("feature4")}
            className="translate-y-10 translate-x-2"
          />
        </div>
      </Container>
    </section>
  );
};
