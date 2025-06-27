"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import useTranslations from "@/hooks/useTranslations";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import { VerticalTimeline } from "@/components/ui/vertical-timeline";

import { cn } from "@/lib/utils";

interface PlanStepProps {
  title: string;
  description: string;
  index: number;
  isActive: boolean;
}

const PlanStep: React.FC<PlanStepProps> = ({
  title,
  description,
  index,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-0 md:gap-6 items-start md:items-center`}
      style={{
        animationDelay: `${index * 2000}ms`,
      }}
    >
      <span
        className={cn(
          `text-[60px] leading-none md:text-[80px] font-medium w-[124px] transition-all duration-300`,
          {
            "text-brand-blue-50": isActive,
            "text-gray-800": !isActive,
          }
        )}
      >
        0{index}
      </span>
      <div className="flex flex-col gap- flex-1">
        <h3
          className={cn(`text-2xl font-medium  transition-all duration-300`, {
            "text-gray-100": isActive,
            "text-gray-500": !isActive,
          })}
        >
          {title}
        </h3>
        <p
          className={cn(`text-sm md:text-md transition-all duration-300`, {
            "text-gray-400": isActive,
            "text-gray-600": !isActive,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface PlanTimelineProps {
  activeStep: number;
}

const PlanTimeline = ({ activeStep }: PlanTimelineProps) => {
  const t = useTranslations("fullSupport");

  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-[1fr] gap-x-0 gap-y-4 w-full h-full">
      <VerticalTimeline steps={4} activeStep={activeStep} />
      <div className="flex flex-col justify-between h-full gap-10 md:gap-4">
        <PlanStep
          index={1}
          title={t("feature1.title")}
          description={t("feature1.description")}
          isActive={activeStep === 0}
        />
        <PlanStep
          index={2}
          title={t("feature2.title")}
          description={t("feature2.description")}
          isActive={activeStep === 1}
        />
        <PlanStep
          index={3}
          title={t("feature3.title")}
          description={t("feature3.description")}
          isActive={activeStep === 2}
        />
        <PlanStep
          index={4}
          title={t("feature4.title")}
          description={t("feature4.description")}
          isActive={activeStep === 3}
        />
      </div>
    </div>
  );
};

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
  }, []);

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
          <PlanTimeline activeStep={activeStep} />
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
