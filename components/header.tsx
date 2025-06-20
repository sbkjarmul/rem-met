import * as React from "react";
import Image from "next/image";
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

const Logo = () => {
  return (
    <>
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
    </>
  );
};

const AppNavigationMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            O nas
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Oferta
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Opinie
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Kontakt
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40">
      <Container>
        <div className="flex h-[100px] items-center justify-between">
          <Logo />
          <AppNavigationMenu />
          <Button size="lg">Darmowa wycena</Button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
