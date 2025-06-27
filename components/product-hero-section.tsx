import * as React from "react";
import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import useTranslations from "@/hooks/useTranslations";
import Container from "@/components/ui/container";

interface ProductHeroSectionProps {
  accent: string;
  title: string;
  imageDesktopSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
  nameSrc: string;
  nameAlt: string;
}

const ProductHeroSection = ({
  accent,
  title,
  imageDesktopSrc,
  imageMobileSrc,
  imageAlt,
  nameSrc,
  nameAlt,
}: ProductHeroSectionProps) => {
  const t = useTranslations("product");

  return (
    <section className="flex flex-col justify-end relative bg-gray-400 md:bg-gradient-to-b from-gray-400 from-[75%] to-[80%] to-white min-h-[500px] md:min-h-screen gap-10">
      <Container className="relative z-1 flex flex-col justify-end gap-10">
        <div className="mx-auto text-center gap-2 flex flex-col">
          <AccentText className="text-brand-blue-200">{accent}</AccentText>
          <h1 className="text-3xl md:text-5xl font-medium uppercase text-gray-900">
            {title}
          </h1>
        </div>
        <div className="relative w-full z-3 hidden md:block aspect-5/3">
          <Image
            src={imageDesktopSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-15 md:top-0 left-0 w-full aspect-video z-2">
          <Image src={nameSrc} alt={nameAlt} fill className="object-contain" />
        </div>
      </Container>
      <div className="relative w-full z-3 md:hidden aspect-6/3">
        <Image
          src={imageMobileSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full aspect-video z-0 hidden md:block">
        <Image
          src="/images/rem-met-product-section-light.png"
          alt={t("lightAlt")}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ProductHeroSection;
