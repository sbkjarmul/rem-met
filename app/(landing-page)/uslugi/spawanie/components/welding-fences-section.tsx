import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

import Image from "next/image";

const WeldingFencesSection = () => {
  const t = useTranslations("welding");

  return (
    <section className="flex flex-col justify-center items-center relative min-h-[600px] bg-gray-200">
      <Container className="relative z-1 flex flex-col xl:flex-row justify-start gap-10 md:gap-20 pt-16 md:pt-20 ">
        <div className="flex flex-col w-full xl:w-1/3 gap-10 items-start">
          <div className="flex flex-col gap-8 w-full text-center xl:text-left">
            <div className="flex flex-col gap-2 ">
              <AccentText className="text-brand-blue-200">
                {t("fences.accent")}
              </AccentText>
              <h2 className="text-3xl md:text-5xl text-gray-700 font-medium">
                {t("fences.title")}
              </h2>
            </div>
            <p className="text-gray-500">{t("fences.description")}</p>
          </div>
        </div>

        <div className="w-full xl:hidden">
          <Image
            src="/images/services/rem-met-welding-fences.webp"
            alt={t("fences.alt")}
            width={1920}
            height={1080}
            sizes="100vw"
          />
        </div>
      </Container>

      {/* <div className="absolute top-0 right-0 h-full w-2/5 z-0"> */}
      <Image
        src="/images/services/rem-met-welding-fences.webp"
        alt={t("fences.alt")}
        fill
        className="object-contain object-right hidden xl:block"
        sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1920px"
        priority={true}
      />
      {/* </div> */}
    </section>
  );
};

export default WeldingFencesSection;
