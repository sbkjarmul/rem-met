import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/button";
import useTranslations from "@/hooks/useTranslations";
import Container from "@/components/ui/container";

const NotFound = () => {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <Container className="flex flex-col items-center justify-center z-1 gap-16 md:gap-20">
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-[140px] md:text-[200px] font-medium text-brand-blue-200">
            {t("code")}
          </span>
          <h1 className="text-[28px] md:text-[40px] font-medium text-brand-blue-200">
            {t("title")}
          </h1>
        </div>
        <Button asChild>
          <Link href="/">{t("cta")}</Link>
        </Button>
      </Container>
      <Image
        src="/images/rem-met-star-background.svg"
        alt="REM-MET404 page background"
        fill
        sizes="100vw"
        className="object-cover z-0"
      />
    </div>
  );
};

export default NotFound;
