import NextLink from "next/link";
import React from "react";

import useTranslations from "@/hooks/useTranslations";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/button";

const MobileMenuLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink href={href} className="text-3xl font-medium text-center w-full">
      {children}
    </NextLink>
  );
};

const MobileMenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="w-full text-center text-gray-400 font-medium">{children}</li>
  );
};

const MobileMenuList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col gap-10 h-full justify-center">{children}</ul>
  );
};

const MobileMenu = () => {
  const t = useTranslations("header");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          aria-label="Otwórz menu"
          className="flex flex-col justify-center items-center w-10 h-10 p-2 bg-transparent border-none cursor-pointer gap-1"
        >
          <span className="block w-8 h-1 dark:bg-gray-200 bg-gray-900 transition-all" />
          <span className="block w-8 h-1 dark:bg-gray-200 bg-gray-900 transition-all" />
          <span className="block w-8 h-1 dark:bg-gray-200 bg-gray-900 transition-all" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-brand-blue-400 w-screen border-gray-700"
        side="right"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>REM-MET</SheetTitle>
        </SheetHeader>
        <MobileMenuList>
          <MobileMenuItem>
            <MobileMenuLink href="/">{t("home")}</MobileMenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink href="/">{t("offer")}</MobileMenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink href="/">{t("about")}</MobileMenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink href="/">{t("contact")}</MobileMenuLink>
          </MobileMenuItem>
        </MobileMenuList>
        <SheetFooter className="p-0">
          <p className="text-sm text-center text-gray-100">
            {t("mobileMenu.question")}
          </p>
          <Button className="w-full">{t("mobileMenu.cta")}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
