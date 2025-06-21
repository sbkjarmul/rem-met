import * as React from "react";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { AccentText } from "@/components/ui/accent-text";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import useTranslation from "@/hooks/useTranslation";

const HeroSection = () => {
  const t = useTranslation();

  return (
    <section className="relative pt-20 md:pt-40 bg-black min-h-screen flex flex-col justify-end">
      <div className="max-w-4xl mx-auto text-center z-1">
        <AccentText>{t.heroSection.accent}</AccentText>
        <h1 className="mt-4 text-4xl md:text-5xl font-medium uppercase">
          {t.heroSection.title}
        </h1>
        <p className="mt-6 text-lg text-gray-500">
          {t.heroSection.description}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button variant="outline">{t.heroSection.primaryButton}</Button>
          <Button>{t.heroSection.secondaryButton}</Button>
        </div>
      </div>
      <AspectRatio ratio={7 / 2} className="w-full">
        <Image
          src="/images/rem-met-hero-section-background.png"
          alt="Hero section background"
          fill
          className="object-cover"
        />
      </AspectRatio>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-blue-300 z-0">
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

export { HeroSection };
