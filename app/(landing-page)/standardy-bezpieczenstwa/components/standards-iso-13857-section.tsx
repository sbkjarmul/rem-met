import { AccentText } from "@/components/ui/accent-text";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import StandardsIso138574241Table from "./standards-iso-13857-4241-table";

const StandardsIso13857Section = () => {
  const t = useTranslations("standards");

  return (
    <section className="flex flex-col justify-start relative bg-gray-600 h-fit py-16 md:py-20 gap-16 md:gap-20">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <AccentText className="text-gray-400">
            {t("iso13857.accent")}
          </AccentText>
          <h2 className="text-xl md:text-4xl text-gray-100">
            {t("iso13857.title")}
          </h2>
        </div>
        <p className="text-gray-300">{t("iso13857.description")}</p>
      </Container>

      <div className="flex flex-col gap-10">
        <Container>
          <AccentText className="text-gray-500">
            {t("iso13857.4.2.4.1.accent")}
          </AccentText>
          <h3 className="text-2xl text-gray-300">
            {t("iso13857.4.2.4.1.title")}
          </h3>
        </Container>

        <Container className="px-0 pl-4">
          <StandardsIso138574241Table />
        </Container>
      </div>

      <Container className="flex flex-col gap-4">
        <p className="text-gray-300">{t("table1.description")}</p>
        <p className="text-gray-300">{t("table1.description2")}</p>
      </Container>
    </section>
  );
};

export default StandardsIso13857Section;
