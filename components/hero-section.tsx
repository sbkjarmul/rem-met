import * as React from "react";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { AccentText } from "@/components/ui/accent-text";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-40 bg-brand-blue-300 min-h-screen flex flex-col justify-end">
      <div className="max-w-4xl mx-auto text-center">
        <AccentText>Polski produkt</AccentText>
        <h1 className="mt-4 text-4xl md:text-5xl font-medium uppercase">
          Bezpieczne i wytrzymałe wygrodzenia przemysłowe
        </h1>
        <p className="mt-6 text-lg text-gray-500">
          Zabezpiecz swoje miejsce pracy z profesjonalnymi systemami wygrodzeń
          REM-MET dopasowanymi pod Ciebie.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button variant="outline">Zobacz ofertę</Button>
          <Button>Zamów projekt</Button>
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
    </section>
  );
};

export { HeroSection };
