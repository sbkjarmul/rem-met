import * as React from "react";
import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";

import { ShieldCheckIcon } from "lucide-react";

export const AboutUsSection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="relative bg-white h-fit min-h-[800px] flex flex-col justify-center items-start">
      <Container className="flex flex-col gap-10">
        <div className="max-w-4xl text-start z-10">
          <AccentText className="text-brand-blue-100">
            {t("aboutUsAccent")}
          </AccentText>
          <h2 className="mt-4 text-4xl md:text-4xl font-medium text-gray-900">
            {t("aboutUsTitle")}
          </h2>
          <p className="mt-6 text-lg text-gray-700">{t("description")}</p>
        </div>
        <div className="grid grid-cols-[260px_260px] grid-rows-2 gap-x-0 gap-y-4">
          <FeatureCard
            icon={<ShieldCheckIcon size={40} />}
            text={t("feature1")}
          />
          <FeatureCard
            icon={<ShieldCheckIcon size={40} />}
            text={t("feature2")}
            className="translate-y-10"
          />
          <FeatureCard
            icon={<ShieldCheckIcon size={40} />}
            text={t("feature3")}
            className="translate-x-2"
          />
          <FeatureCard
            icon={<ShieldCheckIcon size={40} />}
            text={t("feature4")}
            className="translate-y-10 translate-x-2"
          />
        </div>
      </Container>
    </section>
  );
};
