import React, { useState } from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";

import useTranslations from "@/hooks/useTranslations";

import {
  Sheet,
  SheetContent,
  SheetDescription,
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
import { ROUTE_PATHS } from "@/app/constants";

const ContactDialog = dynamic(
  () => import("@/components/contact-dialog/contact-dialog")
);

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
  handleViewChange: (view: "main" | "product" | "services") => void;
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
          <MobileMenuLink href={ROUTE_PATHS.HOME} onClick={onClose}>
            {t("home")}
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuButton onClick={() => handleViewChange("product")}>
            {t("machineGuards")}
          </MobileMenuButton>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuButton onClick={() => handleViewChange("services")}>
            {t("services")}
          </MobileMenuButton>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href={ROUTE_PATHS.ABOUT_US} onClick={onClose}>
            {t("about")}
          </MobileMenuLink>
        </MobileMenuItem>
        <MobileMenuItem>
          <MobileMenuLink href={ROUTE_PATHS.STANDARDS} onClick={onClose}>
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
              <BreadcrumbLink onClick={onBack}>
                {" "}
                {tOurProducts("menu")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-300 font-medium">
                {tOurProducts("machineGuards")}
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
          imageSrc="/images/products/rem-met-falcon-product-desktop.webp"
          imageAlt={tOurProducts("falcon.alt")}
          buttonText={tOurProducts("falcon.cta")}
          path={ROUTE_PATHS.FALCON}
          onClick={onClose}
        />
        <MobileMenuProductCard
          title={tOurProducts("rhino.title")}
          name={tOurProducts("rhino.name")}
          imageSrc="/images/products/rem-met-rhino-product-desktop.webp"
          imageAlt={tOurProducts("rhino.alt")}
          buttonText={tOurProducts("rhino.cta")}
          path={ROUTE_PATHS.RHINO}
          onClick={onClose}
        />
        <MobileMenuProductCard
          title={tOurProducts("gecko.title")}
          name={tOurProducts("gecko.name")}
          imageSrc="/images/products/rem-met-gecko-product-desktop.webp"
          imageAlt={tOurProducts("gecko.alt")}
          buttonText={tOurProducts("gecko.cta")}
          path={ROUTE_PATHS.GECKO}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const MobileMenuServicesView = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const tOurProducts = useTranslations("ourProducts");
  const tHeader = useTranslations("header");

  return (
    <div className="flex flex-col h-full justify-center gap-10 overflow-y-auto">
      <div className="py-10">
        <Breadcrumb>
          <BreadcrumbList className="w-full justify-center text-center">
            <BreadcrumbItem className="text-gray-500">
              <BreadcrumbLink onClick={onBack}>
                {tOurProducts("menu")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-300 font-medium">
                {tOurProducts("services")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h2 className="text-xl uppercase text-center text-gray-300">
        {tOurProducts("ourServices")}
      </h2>

      <div className="flex flex-col gap-10 h-full overflow-y-auto text-gray-200">
        <MobileMenuLink href={ROUTE_PATHS.DESIGN_CAD} onClick={onClose}>
          {tHeader("megaMenu.services.designCad.title")}
        </MobileMenuLink>
        <MobileMenuLink href={ROUTE_PATHS.CLEANING} onClick={onClose}>
          {tHeader("megaMenu.services.cleaning.title")}
        </MobileMenuLink>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const t = useTranslations("header");

  const [view, setView] = useState<"main" | "product" | "services">("main");
  const [open, setOpen] = useState(false);

  const handleViewChange = (view: "main" | "product" | "services") => {
    setView(view);
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);

    if (!open) {
      setView("main");
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
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
          <SheetDescription>{t("mobileMenu.description")}</SheetDescription>
        </SheetHeader>

        {view === "main" ? (
          <MobileMenuMainView
            handleViewChange={handleViewChange}
            onClose={() => setOpen(false)}
          />
        ) : view === "services" ? (
          <MobileMenuServicesView
            onBack={() => handleViewChange("main")}
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
