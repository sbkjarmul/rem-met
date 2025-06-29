import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Quote from "@/components/quote";

const StandardsHeroSection = () => {
  const t = useTranslations("standards");

  return (
    <section className="relative bg-background min-h-[800px] flex flex-col justify-end items-start py-20">
      <Container className="z-1 flex flex-col justify-start h-full gap-20">
        <div className="gap-6 flex flex-col w-full lg:w-1/2">
          <div className="text-left gap-2 flex flex-col">
            <AccentText className="text-brand-blue-200">
              {t("hero.accent")}
            </AccentText>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-200">
              {t("hero.title")}
            </h1>
          </div>

          <p className="text-gray-500 text-lg whitespace-pre-line">
            {t("hero.description")}
          </p>
        </div>

        <Quote
          text={t("hero.quote")}
          author={t("hero.quote.author")}
          authorPosition={t("hero.quote.author.position")}
        />
      </Container>

      <Image
        src="/images/rem-met-standards-hero.png"
        alt={t("hero.image.alt")}
        fill
        className="absolute inset-0 object-cover"
      />
    </section>
  );
};

export default StandardsHeroSection;
