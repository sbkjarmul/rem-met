"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { ROUTE_PATHS } from "@/app/constants";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

import useTranslations from "@/hooks/useTranslations";
import MegaMenu from "./components/mega-menu";

const MobileMenu = dynamic(() => import("./components/mobile-menu"));
const ContactDialog = dynamic(() => import("../contact-dialog/contact-dialog"));

const Logo = () => {
  return (
    <Link href={ROUTE_PATHS.HOME} className="select-none">
      <Image
        src="/images/logos/rem-met-logo-light-mode.svg"
        alt="REM-MET Logo"
        width={200}
        height={40}
        className="block dark:hidden w-[200px] h-[40px]"
      />
      <Image
        src="/images/logos/rem-met-logo-dark-mode.svg"
        alt="REM-MET Logo"
        width={200}
        height={40}
        className="hidden dark:block w-[200px] h-[40px]"
      />
    </Link>
  );
};

const Header = () => {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b dark:border-gray-700 border-gray-300 transition-colors duration-300 ${
        scrolled ? "dark:bg-brand-blue-400 bg-gray-100" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[100px] items-center justify-between">
          <Logo />
          <div className="hidden lg:flex">
            <MegaMenu />
          </div>

          <ContactDialog
            triggerButton={
              <Button size="lg" className="hidden lg:block">
                {t("headerButton")}
              </Button>
            }
          />

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
