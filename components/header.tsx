import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useTranslations from "@/hooks/useTranslations";

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

  return (
    <NavigationMenu>
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
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t("services")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t("contact")}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Header = () => {
  const t = useTranslations("header");
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40">
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
