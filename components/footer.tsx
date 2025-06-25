import * as React from "react";
import Container from "@/components/ui/container";
import useTranslations from "@/hooks/useTranslations";

const Logo = () => {
  const t = useTranslations("footer");

  return (
    <div>
      <h3 className="text-4xl font-bold tracking-widest text-gray-700">
        REM-MET
      </h3>
      <p className="text-sm text-gray-700">{t("tagline")}</p>
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
    <span className="ml-2 inline-block bg-brand-blue-100 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
      {t("new")}
    </span>
  );
};

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-bold text-gray-700">{children}</h4>
);

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white text-gray-900 py-12 px-4 md:px-6">
      <Container>
        <div className="py-8 flex flex-col gap-8">
          <div className="md:col-span-1">
            <Logo />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("info")}</FooterHeader>
              <ul className="space-y-2">
                <FooterLink href="#">{t("privacyPolicy")}</FooterLink>
                <FooterLink href="#">{t("cookiesPolicy")}</FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("systems")}</FooterHeader>
              <ul className="space-y-2">
                <FooterLink href="#">{t("falcon")}</FooterLink>
                <FooterLink href="#">{t("gecko")}</FooterLink>
                <FooterLink href="#">{t("rhino")}</FooterLink>
                <FooterLink href="#">
                  {t("tiger")} <NewBadge />
                </FooterLink>
                <FooterLink href="#">
                  {t("viper")} <NewBadge />
                </FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <FooterHeader>{t("contact")}</FooterHeader>
              <div className="text-sm space-y-2 text-gray-700">
                <p>{t("contactQuestion")}</p>
                <p className="font-bold">{t("contactEmail")}</p>
                <p className="mt-4">{t("contactSupport")}</p>
                <p className="font-bold text-lg">{t("contactPhone")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6 flex items-center justify-between text-sm text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
