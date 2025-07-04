import NextLink from "next/link";
import React, { useState } from "react";

import useTranslations from "@/hooks/useTranslations";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MobileMenuProductCard from "./mobile-menu-product-card";
import { ContactDialog } from "@/components/contact-dialog/contact-dialog";
import { PRODUCTS_PATHS } from "@/app/wygrodzenia-bezpieczenstwa/constants";

const MobileMenuLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <NextLink
      href={href}
      className="text-3xl font-medium text-center w-full"
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
};

const MobileMenuButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button
      onClick={onClick}
      className="text-3xl py-0 font-medium text-center w-full hover:bg-transparent hover:text-gray-400 capitalize"
      variant="ghost"
    >
      {children}
    </Button>
  );
};

const MobileMenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="w-full text-center text-gray-400 font-medium">{children}</li>
  );
};

const MobileMenuList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col gap-6 h-full justify-center">{children}</ul>
  );
};

const MobileMenuMainView = ({
  handleViewChange,
  onClose,
}: {
  handleViewChange: (view: "main" | "product") => void;
  onClose: () => void;
}) => {
  const t = useTranslations("header");

  return (
    <div className="flex flex-col h-full justify-center gap-10">
      <div className="py-10">
        <Breadcrumb>
          <BreadcrumbList className="w-full justify-center text-center">
            <BreadcrumbItem className="text-gray-500">Menu</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <MobileMenuList>
        <MobileMenuItem>
          <MobileMenuLink href="/" onClick={onClose}>
            {t("home")}
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuButton onClick={() => handleViewChange("product")}>
            {t("offer")}
          </MobileMenuButton>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="/o-firmie" onClick={onClose}>
            {t("about")}
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href="/standardy-bezpieczenstwa" onClick={onClose}>
            {t("standards")}
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <ContactDialog
            triggerButton={
              <MobileMenuButton onClick={() => {}}>
                {t("contact")}
              </MobileMenuButton>
            }
          />
        </MobileMenuItem>
      </MobileMenuList>

      <SheetFooter className="p-0 flex flex-col gap-4">
        <p className="text-sm text-center text-gray-100">
          {t("mobileMenu.question")}
        </p>
        <ContactDialog
          triggerButton={
            <Button className="w-full">{t("mobileMenu.cta")}</Button>
          }
        />
      </SheetFooter>
    </div>
  );
};

const MobileMenuProductView = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const tOurProducts = useTranslations("ourProducts");

  return (
    <div className="flex flex-col h-full justify-center gap-10 overflow-y-auto">
      <div className="py-10">
        <Breadcrumb>
          <BreadcrumbList className="w-full justify-center text-center">
            <BreadcrumbItem className="text-gray-500">
              <BreadcrumbLink onClick={onBack}>Menu</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-300 font-medium">
                Oferta
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h2 className="text-xl uppercase text-center text-gray-300">
        {tOurProducts("systems")}
      </h2>

      <div className="grid grid-rows-[1fr_1fr_1fr] gap-4 h-full overflow-y-auto">
        <MobileMenuProductCard
          title={tOurProducts("falcon.title")}
          name={tOurProducts("falcon.name")}
          imageSrc="/images/products/rem-met-falcon-hero.png"
          imageAlt={tOurProducts("falcon.alt")}
          buttonText={tOurProducts("falcon.cta")}
          path={PRODUCTS_PATHS.FALCON}
          onClick={onClose}
        />
        <MobileMenuProductCard
          title={tOurProducts("rhino.title")}
          name={tOurProducts("rhino.name")}
          imageSrc="/images/products/rem-met-rhino-hero.png"
          imageAlt={tOurProducts("rhino.alt")}
          buttonText={tOurProducts("rhino.cta")}
          path={PRODUCTS_PATHS.RHINO}
          onClick={onClose}
        />
        <MobileMenuProductCard
          title={tOurProducts("gecko.title")}
          name={tOurProducts("gecko.name")}
          imageSrc="/images/products/rem-met-gecko-hero.png"
          imageAlt={tOurProducts("gecko.alt")}
          buttonText={tOurProducts("gecko.cta")}
          path={PRODUCTS_PATHS.GECKO}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [view, setView] = useState<"main" | "product">("main");
  const [open, setOpen] = useState(false);

  const handleViewChange = (view: "main" | "product") => {
    setView(view);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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

        {view === "main" ? (
          <MobileMenuMainView
            handleViewChange={handleViewChange}
            onClose={() => setOpen(false)}
          />
        ) : (
          <MobileMenuProductView
            onBack={() => handleViewChange("main")}
            onClose={() => setOpen(false)}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
