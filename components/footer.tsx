import * as React from "react";
import { Container } from "@/components/ui/container";
import useTranslation from "@/hooks/useTranslation";

const Logo = () => {
  const t = useTranslation();
  return (
    <div>
      <h3 className="text-4xl font-bold tracking-widest text-gray-700">
        REM-MET
      </h3>
      <p className="text-sm text-gray-700">{t.footer.tagline}</p>
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
  const t = useTranslation();
  return (
    <span className="ml-2 inline-block bg-brand-blue-100 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
      {t.footer.new}
    </span>
  );
};

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-bold mb-4 text-gray-700">{children}</h4>
);

const Footer = () => {
  const t = useTranslation();
  return (
    <footer className="bg-white ">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
          </div>
          <div className="grid grid-cols-3 gap-8 md:col-span-3">
            <div>
              <FooterHeader>{t.footer.info}</FooterHeader>
              <ul className="space-y-3">
                <FooterLink href="#">{t.footer.privacyPolicy}</FooterLink>
                <FooterLink href="#">{t.footer.cookiesPolicy}</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeader>{t.footer.systems}</FooterHeader>
              <ul className="space-y-3">
                <FooterLink href="#">{t.footer.falcon}</FooterLink>
                <FooterLink href="#">{t.footer.gecko}</FooterLink>
                <FooterLink href="#">{t.footer.rhino}</FooterLink>
                <FooterLink href="#">
                  {t.footer.tiger} <NewBadge />
                </FooterLink>
                <FooterLink href="#">
                  {t.footer.viper} <NewBadge />
                </FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeader>{t.footer.contact}</FooterHeader>
              <div className="text-sm space-y-3 text-gray-700">
                <p>{t.footer.contactQuestion}</p>
                <p className="font-bold">{t.footer.contactEmail}</p>
                <p className="mt-4">{t.footer.contactSupport}</p>
                <p className="font-bold text-lg">{t.footer.contactPhone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6 flex items-center justify-between text-sm text-gray-700">
          <p>
            {t.footer.copyright.replace(
              "{year}",
              new Date().getFullYear().toString()
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
