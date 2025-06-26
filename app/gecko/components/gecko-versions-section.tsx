import Image from "next/image";

import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

export default function GeckoDetailsSection() {
  const t = useTranslations("gecko");

  return (
    <section className="flex flex-col justify-end relative bg-gray-900 text-gray-100">
      <Container className="relative z-1 flex flex-col justify-center gap-20 pt-20">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-4xl font-medium gap-2 flex items-center">
            <span className="text-gray-500">{t("3")}</span>
            <span>{t("versions")}.</span>
            <span className="text-gray-500">{t("3")}</span>
            <span>{t("levels")}.</span>
          </h2>

          <div className="relative w-full aspect-[3/1] ">
            <Image
              src="/images/products/rem-met-gecko-versions.png"
              alt={t("versions.alt")}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
