"use client";

import ContactDialog from "@/components/contact-dialog/contact-dialog";
import PlanTimeline from "@/components/plan-timeline";
import { AccentText } from "@/components/ui/accent-text";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import { useEffect, useState } from "react";

const CleaningProcessSection = () => {
  const t = useTranslations("cleaning");

  const steps = [
    {
      title: t("process.feature1.title"),
      description: t("process.feature1.description"),
    },
    {
      title: t("process.feature2.title"),
      description: t("process.feature2.description"),
    },
    {
      title: t("process.feature3.title"),
      description: t("process.feature3.description"),
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
    <section className="flex flex-col justify-center items-center relative min-h-[800px] bg-brand-blue-400">
      <Container className="relative z-1 flex flex-col md:flex-row justify-center gap-20 py-16 md:py-20">
        <div className="flex flex-col gap-8 w-full md:w-2/5">
          <div className="flex flex-col gap-2">
            <AccentText className="text-brand-blue-200">
              {t("process.accent")}
            </AccentText>
            <h2 className="text-3xl md:text-5xl text-gray-200 font-medium">
              {t("process.title")}
            </h2>
          </div>
          <p className="text-gray-500">{t("process.description")}</p>

          <div className="hidden md:block">
            <ContactDialog
              triggerButton={
                <Button className="w-full md:w-fit">{t("process.cta")}</Button>
              }
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 h-full">
          <PlanTimeline activeStep={activeStep} steps={steps} />
        </div>

        <div className="block md:hidden">
          <ContactDialog
            triggerButton={
              <Button className="w-full md:w-fit">{t("process.cta")}</Button>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default CleaningProcessSection;
