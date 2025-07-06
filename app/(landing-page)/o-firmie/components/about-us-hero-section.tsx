import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Quote from "@/components/quote";

const AboutUsHeroSection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="relative bg-black mih-h-[600px] md:min-h-[800px] flex flex-col justify-center items-start pt-32 md:py-20 gap-4">
      <Container className="z-1 flex flex-col justify-start h-full gap-20">
        <div className="gap-6 flex flex-col w-full lg:w-1/2">
          <div className="text-left gap-2 flex flex-col">
            <AccentText className="text-brand-blue-200 text-center md:text-left">
              {t("hero.accent")}
            </AccentText>
            <h1 className="text-2xl md:text-5xl font-medium text-gray-200">
              <span className="hidden md:block">{t("hero.title")}</span>
              <span className="block md:hidden text-center">
                {t("hero.title.mobile")}
              </span>
            </h1>
          </div>

          <p className="text-gray-500  whitespace-pre-line">
            <span className="hidden md:block text-lg">
              {t("hero.description")}
            </span>
            <span className="block md:hidden text-center text-md">
              {t("hero.description.mobile")}
            </span>
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

      <Image
        src="/images/rem-met-about-us-hero.webp"
        alt={t("hero.image.alt")}
        fill
        className="absolute inset-0 object-cover hidden md:block"
      />

      <div className="relative block md:hidden aspect-4/3 w-full">
        <Image
          src="/images/rem-met-about-us-hero-mobile.webp"
          alt={t("hero.image.alt")}
          fill
          className="absolute inset-0 object-contain object-center"
        />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
