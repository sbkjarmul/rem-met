import * as React from "react";
import Image from "next/image";

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
import { VerticalTimeline } from "./ui/vertical-timeline";

export const FullSupportSection = () => {
  const t = useTranslations("fullSupport");

  return (
    <section className="relative bg-brand-blue-400 h-fit min-h-[800px] flex flex-col justify-center items-start">
      <Container className="flex flex-col lg:flex-row items-center">
        <div className="max-w-4xl text-start z-10 flex flex-col gap-8 w-1/2">
          <div className="flex flex-col gap-2">
            <AccentText className="text-brand-blue-100">
              {t("accent")}
            </AccentText>
            <h2 className="text-4xl md:text-4xl font-medium text-gray-100 whitespace-pre-line">
              {t("title")}
            </h2>
          </div>
          <p className="text-lg text-gray-500">{t("description1")}</p>
          <p className="text-lg text-gray-500">{t("description2")}</p>
        </div>
        <div className="grid grid-cols-[80px_fr] gap-x-0 gap-y-4">
          <VerticalTimeline steps={4} />
        </div>
      </Container>
      <div className="absolute inset-0 z-0 left-0">
        <Image
          src="/images/rem-met-star-outlined-thin.svg"
          alt="Hero section background"
          fill
          className="object-contain object-left"
        />
      </div>
    </section>
  );
};
