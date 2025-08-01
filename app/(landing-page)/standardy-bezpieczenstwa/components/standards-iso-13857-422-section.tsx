import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Image from "next/image";
import StandardsIso13857422Table from "./standards-iso-13857-422-table";

const StandardsIso13857422Section = () => {
  const t = useTranslations("standards");

  return (
    <section className="flex flex-col justify-start relative bg-gray-100 h-fit py-16 md:py-20 gap-16 md:gap-20">
      <Container className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-2">
          <AccentText className="text-brand-blue-200">
            {t("iso13857.422.accent")}
          </AccentText>
          <h2 className="text-2xl md:text-4xl text-gray-800">
            {t("iso13857.422.title")}
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 w-full">
          <div className="flex flex-col gap-2 w-full max-w-xl xl:w-1/2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center md:gap-6 gap-4 text-gray-800">
                <span className="font-medium text-4xl">A</span>
                <span className="text-lg md:text-2xl">
                  {t("iso13857.422.A")}
                </span>
              </div>
              <div className="flex items-center md:gap-6 gap-4 text-gray-800">
                <span className="font-medium text-4xl">B</span>
                <span className="text-lg md:text-2xl">
                  {t("iso13857.422.B")}
                </span>
              </div>
              <div className="flex items-center md:gap-6 gap-4 text-gray-800">
                <span className="font-medium text-4xl text-brand-blue-200">
                  C
                </span>
                <span className="text-lg md:text-2xl">
                  {t("iso13857.422.C")}
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-square">
              <Image
                src="/images/standards/rem-met-iso-13857-422.svg"
                alt={t("iso13857.422.alt")}
                fill
              />
            </div>
          </div>

          <div className="w-full xl:w-1/2 hidden md:block overflow-x-auto">
            <StandardsIso13857422Table />
          </div>
        </div>
      </Container>

      <div className="w-full md:w-1/2 overflow-x-auto pl-2 pr-4 md:hidden">
        <StandardsIso13857422Table />
      </div>
    </section>
  );
};

export default StandardsIso13857422Section;
