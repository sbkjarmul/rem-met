import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Image from "next/image";

const AboutUsEcologySection = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="flex flex-col justify-start  min-h-[800px] py-16 md:py-20 bg-brand-blue-400">
      <Container className="flex flex-col justify-center relative flex-1">
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col gap-10 w-full md:w-1/2 z-1">
            <h2 className="text-4xl text-gray-200">
              <span className="hidden md:block">{t("ecology.title")}</span>
              <span className="block md:hidden">
                {t("ecology.title.mobile")}
              </span>
            </h2>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full z-1">
            <article className="flex flex-col gap-3 bg-brand-blue-200 p-6 text-gray-100 min-h-[200px]">
              <h3 className="text-2xl">{t("ecology.article1.title")}</h3>
              <p className="text-gray-200 text-sm">
                {t("ecology.article1.description")}
              </p>
            </article>

            <article className="relative flex flex-col gap-2 justify-end p-6 bg-gray-900 text-gray-100 min-h-[200px]">
              <p className="p-4 bg-brand-blue-200 w-fit z-1 text-sm">
                {t("ecology.article2.title")}
              </p>
              <Image
                src="/images/rem-met-steel-photo.webp"
                alt={t("ecology.image.alt")}
                fill
                className="top-0 right-0 object-right z-0 object-cover"
              />
            </article>

            <article className="flex flex-col gap-3 bg-gray-100 p-6 text-gray-800 min-h-[200px]">
              <h3 className="text-2xl">{t("ecology.article3.title")}</h3>
              <p className="text-gray-700 text-sm">
                {t("ecology.article3.description")}
              </p>
            </article>
          </section>
        </div>

        <Image
          src="/icons/rem-met-ecology-icon-outlined.svg"
          alt={t("ecology.icon.alt")}
          fill
          sizes="640px"
          className="top-0 right-0 object-right z-0 object-contain hidden md:block"
        />
      </Container>
    </section>
  );
};

export default AboutUsEcologySection;
