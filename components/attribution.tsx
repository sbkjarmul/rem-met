import useTranslations from "@/hooks/useTranslations";

import { Container } from "./ui/container";

const Attribution = () => {
  const t = useTranslations();

  return (
    <div className="bg-primary text-sm text-white py-4 text-end">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} {t("attribution")}
        </p>
      </Container>
    </div>
  );
};

export default Attribution;
