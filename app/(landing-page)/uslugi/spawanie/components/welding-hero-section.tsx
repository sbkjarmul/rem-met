import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

const WeldingHeroSection = () => {
  const t = useTranslations("welding");

  return (
    <section className="relative mih-h-[600px] md:min-h-[600px] flex justify-center items-center py-32 md:py-40 gap-4 bg-black">
      <Container className="z-1 flex flex-col justify-end items-center md:items-start h-full gap-20">
        <div className="gap-6 flex flex-col w-full md:w-2/3 max-w-md md:max-w-4xl items-center md:items-start">
          <div className="text-left gap-2 flex flex-col ">
            <AccentText className="text-brand-blue-200 text-center md:text-start">
              {t("hero.accent")}
            </AccentText>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-200 ">
              <span className="hidden md:block text-start">
                {t("hero.title")}
              </span>
              <span className="block md:hidden text-center">
                {t("hero.title.mobile")}
              </span>
            </h1>
          </div>

          <p className="text-gray-500 whitespace-pre-line">
            <span className="hidden md:block text-lg text-left">
              {t("hero.description")}
            </span>
            <span className="block md:hidden text-center text-md max-w-sm">
              {t("hero.description.mobile")}
            </span>
          </p>
        </div>
      </Container>

      <div className="absolute top-0 left-0 w-full h-[100%] z-0">
        <Image
          src="/images/services/rem-met-welding-hero.webp"
          alt={t("hero.image.alt")}
          fill
          className="object-cover object-start"
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1920px"
          priority={true}
        />
      </div>
    </section>
  );
};

export default WeldingHeroSection;
