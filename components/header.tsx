"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import useTranslations from "@/hooks/useTranslations";
import NextLink from "next/link";

type NavigationMenuProductCardProps = {
  title: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
};

const NavigationMenuProductCard = ({
  title,
  name,
  imageSrc,
  imageAlt,
  buttonText,
}: NavigationMenuProductCardProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-center items-center hover:bg-muted/50 p-6 min-w-full">
      <div className="flex flex-col items-center">
        <p className="text-muted-foreground text-sm leading-tight">{title}</p>
        <div className="text-2xl font-medium">{name}</div>
      </div>
      <div className="relative aspect-video w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>
      <Button className="w-full">
        <NextLink href="/" className="w-full">
          {buttonText}
        </NextLink>
      </Button>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/rem-met-logo-light-mode.png"
        alt="REM-MET Logo"
        width={160}
        height={40}
        className="block dark:hidden"
      />
      <Image
        src="/images/rem-met-logo-dark-mode.png"
        alt="REM-MET Logo"
        width={160}
        height={40}
        className="hidden dark:block"
      />
    </Link>
  );
};

const AppNavigationMenu = () => {
  const t = useTranslations("header");
  const tOurProducts = useTranslations("ourProductsSection");

  return (
    <NavigationMenu className="static">
      <NavigationMenuList className="h-[100px]">
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t("home")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t("about")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            {t("offer")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-brand-blue-400 absolute top-0 left-0 md:w-screen h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col gap-4 w-full p-10">
              <h3 className="text-xl font-medium text-center text-gray-100 uppercase">
                {t("megaMenu.title")}
              </h3>
              <div></div>
              <ul className="grid gap-2 w-full grid-cols-[1fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("falcon.title")}
                      name={tOurProducts("falcon.name")}
                      imageSrc="/images/products/rem-met-falcon-hero.png"
                      imageAlt={tOurProducts("falcon.alt")}
                      buttonText={tOurProducts("falcon.cta")}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("rhino.title")}
                      name={tOurProducts("rhino.name")}
                      imageSrc="/images/products/rem-met-rhino-hero.png"
                      imageAlt={tOurProducts("rhino.alt")}
                      buttonText={tOurProducts("rhino.cta")}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("gecko.title")}
                      name={tOurProducts("gecko.name")}
                      imageSrc="/images/products/rem-met-gecko-hero.png"
                      imageAlt={tOurProducts("gecko.alt")}
                      buttonText={tOurProducts("gecko.cta")}
                    />
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink
            href="/contact"
            className={navigationMenuTriggerStyle()}
          >
            {t("contact")}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
      className={`fixed top-0 z-50 w-full border-b border-border/40 transition-colors duration-300 ${
        scrolled ? "bg-brand-blue-400 backdrop-blur" : ""
      }`}
    >
      <Container>
        <div className="flex h-[100px] items-center justify-between">
          <Logo />
          <AppNavigationMenu />
          <Button size="lg">{t("headerButton")}</Button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
