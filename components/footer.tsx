import * as React from "react";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";
import Image from "next/image";
import { PRODUCTS_PATHS } from "@/app/wygrodzenia-bezpieczenstwa/constants";

const Logo = () => {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col gap-1 w-full">
      <Image
        src="/images/logos/rem-met-logo-wordmark-black.svg"
        alt="REM-MET Logo"
        width={320}
        height={100}
      />
      <p className="text-[11px] uppercase md:text-sm text-gray-700">
        {t("tagline")}
      </p>
    </div>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </a>
  </li>
);

const NewBadge = () => {
  const t = useTranslations("footer");
  return (
    <span className="pt-[1px]inline-block bg-brand-blue-100 text-white text-[10px] font-bold px-1 py-0.5 rounded-[4px]">
      {t("new")}
    </span>
  );
};

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-medium text-gray-700">{children}</h4>
);

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white text-gray-900 pt-16">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="md:col-span-1">
            <Logo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("info")}</FooterHeader>
              <ul className="space-y-2">
                <FooterLink href="/privacy-policy">
                  {t("privacyPolicy")}
                </FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("systems")}</FooterHeader>
              <ul className="space-y-2">
                <FooterLink href={PRODUCTS_PATHS.FALCON}>
                  {t("falcon")} <NewBadge />
                </FooterLink>
                <FooterLink href={PRODUCTS_PATHS.GECKO}>
                  {t("gecko")} <NewBadge />
                </FooterLink>
                <FooterLink href={PRODUCTS_PATHS.RHINO}>
                  {t("rhino")} <NewBadge />
                </FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("contact")}</FooterHeader>
              <div className="text-sm space-y-2 text-gray-700">
                <p className="text-gray-600">{t("contactQuestion")}</p>
                <p className="font-medium">{t("contactEmail")}</p>
                <p className="mt-4 text-gray-600">{t("contactSupport")}</p>
                <p className="font-bold text-lg">{t("contactPhone")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 text-sm text-gray-700 text-center md:text-left">
          <p className="block md:inline">
            &copy; {new Date().getFullYear()} {t("copyrightPrefix")}
          </p>
          <p className="block md:inline">{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
