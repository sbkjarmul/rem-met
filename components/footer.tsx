import * as React from "react";

import { Container } from "@/components/ui/container";

const Logo = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold tracking-widest text-gray-700">
        REM-MET
      </h3>
      <p className="text-sm text-gray-700">
        Polski producent wygrodzeń przemysłowych
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

const NewBadge = () => (
  <span className="ml-2 inline-block bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
    Nowość
  </span>
);

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-bold text-gray-600">{children}</h4>
);

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <Container className="flex flex-col gap-10">
        <Logo />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:col-span-3">
          <div className="flex flex-col gap-2">
            <FooterHeader>Informacje</FooterHeader>
            <ul className="space-y-2">
              <FooterLink href="#">Polityka prywatności</FooterLink>
              <FooterLink href="#">Polityka cookies</FooterLink>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <FooterHeader>Systemy</FooterHeader>
            <ul className="space-y-2">
              <FooterLink href="#">Falcon</FooterLink>
              <FooterLink href="#">Gecko</FooterLink>
              <FooterLink href="#">Rhino</FooterLink>
              <FooterLink href="#">
                Tiger <NewBadge />
              </FooterLink>
              <FooterLink href="#">
                Viper <NewBadge />
              </FooterLink>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <FooterHeader>Kontakt</FooterHeader>
            <div className="text-sm space-y-2 text-gray-700">
              <p>Masz jakieś pytania?</p>
              <p className="font-bold">biuro@rem-met.pl</p>
              <p className="mt-4">Potrzebujesz wsparcia? Zadzwoń do nas.</p>
              <p className="font-bold text-lg">+48 666 999 888</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 flex items-center justify-between text-sm text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} REM-MET. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
