import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

import Image from "next/image";

const WeldingShelvesSection = () => {
  const t = useTranslations("welding");

  return (
    <section className="flex flex-col justify-center items-center relative min-h-[600px] bg-gray-700">
      <Container className="relative z-1 flex flex-col xl:flex-row justify-end gap-10 md:gap-20 pt-16 md:pt-20 ">
        <div className="flex flex-col w-full xl:w-1/3 gap-10 items-start">
          <div className="flex flex-col gap-8 w-full text-center xl:text-left">
            <div className="flex flex-col gap-2 ">
              <AccentText className="text-brand-blue-200">
                {t("shelves.accent")}
              </AccentText>
              <h2 className="text-3xl md:text-5xl text-gray-200 font-medium">
                {t("shelves.title")}
              </h2>
            </div>
            <p className="text-gray-500">{t("shelves.description")}</p>
          </div>
        </div>

        <div className="w-full xl:hidden">
          <Image
            src="/images/services/rem-met-welding-fences.webp"
            alt={t("shelves.alt")}
            width={1920}
            height={1080}
            sizes="100vw"
          />
        </div>
      </Container>

      <Image
        src="/images/services/rem-met-welding-fences.webp"
        alt={t("shelves.alt")}
        fill
        className="object-contain object-left hidden xl:block"
        sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1920px"
        priority={true}
      />
    </section>
  );
};

export default WeldingShelvesSection;
