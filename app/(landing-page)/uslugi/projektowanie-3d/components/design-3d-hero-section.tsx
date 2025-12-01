import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

const Design3dHeroSection = () => {
  const t = useTranslations("design3d");

  return (
    <section className="relative mih-h-[600px] md:min-h-[800px] flex justify-center items-end pt-32 md:pt-40 gap-4 bg-black">
      <Container className="z-1 flex flex-col justify-end items-center h-full gap-20">
        <div className="gap-6 flex flex-col w-full max-w-md md:max-w-4xl items-center">
          <div className="text-left gap-2 flex flex-col ">
            <AccentText className="text-brand-blue-200 text-center">
              {t("hero.accent")}
            </AccentText>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-200 ">
              <span className="hidden md:block text-center">
                {t("hero.title")}
              </span>
              <span className="block md:hidden text-center">
                {t("hero.title.mobile")}
              </span>
            </h1>
          </div>

          <p className="text-gray-500  whitespace-pre-line text-center">
            <span className="hidden md:block text-lg">
              {t("hero.description")}
            </span>
            <span className="block md:hidden text-center text-md">
              {t("hero.description.mobile")}
            </span>
          </p>
        </div>

        <Image
          src="/images/services/rem-met-design-3d-hero.png"
          alt={t("hero.image.alt")}
          width={1920}
          height={1080}
          sizes="100vw"
          className="object-cover"
        />
      </Container>
    </section>
  );
};

export default Design3dHeroSection;
