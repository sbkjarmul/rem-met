"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import PlanTimeline from "./plan-timeline";

const FullSupportSection = () => {
  const t = useTranslations("fullSupport");

  const steps = [
    {
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative bg-brand-blue-400 h-fit min-h-[800px] py-16 lg:py-0 flex flex-col justify-center items-start">
      <Container className="flex flex-col lg:flex-row items-center z-1 gap-16 lg:gap-0">
        <div className="max-w-4xl text-start z-10 flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <AccentText className="text-brand-blue-100">
              {t("accent")}
            </AccentText>
            <h2 className="text-2xl md:text-4xl font-medium text-gray-100 whitespace-pre-line">
              {t("title")}
            </h2>
          </div>

          <p className="text-lg text-gray-500 hidden md:block">
            {t("description1")}
          </p>
          <p className="text-lg text-gray-500 hidden md:block">
            {t("description2")}
          </p>
          <p className="text-lg text-gray-500 block md:hidden">
            {t("description.mobile")}
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <PlanTimeline activeStep={activeStep} steps={steps} />
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

export default FullSupportSection;
