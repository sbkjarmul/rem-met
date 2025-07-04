import * as React from "react";
import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Button from "@/components/ui/button";
import useTranslations from "@/hooks/useTranslations";
import { ContactDialog } from "./contact-dialog/contact-dialog";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-30 sm:pt-40 bg-black h-fit md:min-h-[800px] md:min-h-screen flex flex-col justify-end">
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center z-10 px-4">
        <div className="flex flex-col gap-2">
          <AccentText>
            <span className="hidden md:block">{t("accent.desktop")}</span>
            <span className="block md:hidden">{t("accent.mobile")}</span>
          </AccentText>

          <h1 className="text-3xl md:text-5xl font-medium uppercase hidden md:block">
            {t("title.desktop")}
          </h1>
          <h1 className="text-3xl md:text-5xl font-medium uppercase block md:hidden max-w-md">
            {t("title.mobile")}
          </h1>
        </div>

        <p className="text-lg text-gray-500 hidden md:block">
          {t("description.desktop")}
        </p>
        <p className="text-lg text-gray-500 block md:hidden max-w-sm sm:max-w-lg mx-auto">
          {t("description.mobile")}
        </p>

        <div className="mt-10 flex justify-center gap-4 w-full">
          <Button variant="outline" className="hidden md:block" asChild>
            <Link href="/#produkty">{t("secondaryButton.desktop")}</Link>
          </Button>

          <ContactDialog
            triggerButton={
              <Button className="w-full h-full md:w-auto">
                {t("primaryButton.desktop")}
              </Button>
            }
          />
        </div>
      </div>

      <div className="relative w-full mt-10 md:mt-20 aspect-5/2 md:aspect-7/2">
        <Image
          src="/images/rem-met-hero-section-background.png"
          alt="Hero section background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-1/2  z-0">
        <Image
          src="/images/rem-met-hero-section-light.svg"
          alt="Hero section background"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
