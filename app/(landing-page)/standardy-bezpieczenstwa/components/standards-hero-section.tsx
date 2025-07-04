import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Quote from "@/components/quote";

const StandardsHeroSection = () => {
  const t = useTranslations("standards");

  return (
    <section className="relative bg-background min-h-[600px] md:min-h-[800px] flex flex-col justify-center md:justify-center items-start pt-32 md:py-20">
      <Container className="z-2 flex flex-col justify-start h-full gap-20">
        <div className="gap-6 flex flex-col w-full lg:w-1/2">
          <div className="text-left gap-2 flex flex-col">
            <AccentText className="text-brand-blue-200 text-center md:text-left">
              {t("hero.accent")}
            </AccentText>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-200 text-center md:text-left">
              {t("hero.title")}
            </h1>
          </div>

          <p className="text-gray-500 text-lg whitespace-pre-line hidden md:block">
            {t("hero.description")}
          </p>

          <p className="text-gray-500 text-lg whitespace-pre-line md:hidden text-center">
            {t("hero.description.mobile")}
          </p>
        </div>

        <div className="hidden md:block">
          <Quote
            text={t("hero.quote")}
            author={t("hero.quote.author")}
            authorPosition={t("hero.quote.author.position")}
          />
        </div>
      </Container>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-black z-1" />

      <Image
        src="/images/rem-met-standards-hero.webp"
        alt={t("hero.image.alt")}
        fill
        className="absolute inset-0 object-cover z-0"
      />
    </section>
  );
};

export default StandardsHeroSection;
