import useTranslations from "@/hooks/useTranslations";

import Container from "./ui/container";
import Link from "next/link";

const Attribution = () => {
  const t = useTranslations("footer");

  return (
    <div className="bg-primary text-sm text-gray-200 py-4 text-center md:text-end">
      <Container>
        <p className="inline">
          &copy; {new Date().getFullYear()} {t("attribution")}
        </p>
        <Link
          href="https://www.entei.design"
          className="text-gray-100"
          target="_blank"
        >
          ENTEI
        </Link>
      </Container>
    </div>
  );
};

export default Attribution;
