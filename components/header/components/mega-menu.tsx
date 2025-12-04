import { useCallback, useRef } from "react";
import dynamic from "next/dynamic";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuButton,
} from "@/components/ui/navigation-menu";
import useTranslations from "@/hooks/useTranslations";

import NavigationMenuProductCard from "./mega-menu-product-card";
import { ROUTE_PATHS } from "@/app/constants";
import MegaMenuServiceCard from "./mega-menu-service-card";

const ContactDialog = dynamic(
  () => import("@/components/contact-dialog/contact-dialog")
);

const MegaMenu = () => {
  const t = useTranslations("header");
  const tOurProducts = useTranslations("ourProducts");

  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  }, [triggerRef]);

  return (
    <NavigationMenu className="static">
      <NavigationMenuList className="h-[100px]">
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink
            href={ROUTE_PATHS.STANDARDS}
            className={navigationMenuTriggerStyle()}
          >
            {t("standards")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink
            href={ROUTE_PATHS.ABOUT_US}
            className={navigationMenuTriggerStyle()}
          >
            {t("about")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle()}
            ref={triggerRef}
          >
            {t("machineGuards")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="dark:bg-brand-blue-400 bg-gray-100 absolute top-0 left-0 md:w-screen h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col gap-4 w-full p-10">
              <h3 className="text-xl font-medium text-center text-gray-600 dark:text-gray-100 uppercase">
                {t("megaMenu.machineGuards.title")}
              </h3>
              <ul className="grid gap-2 w-full grid-cols-[1fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("falcon.title")}
                      name={tOurProducts("falcon.name")}
                      imageSrc="/images/products/rem-met-falcon-product-desktop.webp"
                      imageAlt={tOurProducts("falcon.alt")}
                      buttonText={tOurProducts("falcon.cta")}
                      path={ROUTE_PATHS.FALCON}
                      onClick={closeMenu}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("rhino.title")}
                      name={tOurProducts("rhino.name")}
                      imageSrc="/images/products/rem-met-rhino-product-desktop.webp"
                      imageAlt={tOurProducts("rhino.alt")}
                      buttonText={tOurProducts("rhino.cta")}
                      path={ROUTE_PATHS.RHINO}
                      onClick={closeMenu}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavigationMenuProductCard
                      title={tOurProducts("gecko.title")}
                      name={tOurProducts("gecko.name")}
                      imageSrc="/images/products/rem-met-gecko-product-desktop.webp"
                      imageAlt={tOurProducts("gecko.alt")}
                      buttonText={tOurProducts("gecko.cta")}
                      path={ROUTE_PATHS.GECKO}
                      onClick={closeMenu}
                    />
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuTrigger
            className={navigationMenuTriggerStyle()}
            ref={triggerRef}
          >
            {t("services")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="dark:bg-brand-blue-400 bg-gray-100 absolute top-0 left-0 md:w-screen h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col gap-4 w-full p-10">
              <h3 className="text-xl font-medium text-center text-gray-600 dark:text-gray-100 uppercase">
                {t("megaMenu.services.title")}
              </h3>
              <ul className="grid gap-2 w-full grid-cols-1">
                <li className="row-span-3">
                  <NavigationMenuLink href={ROUTE_PATHS.DESIGN_CAD}>
                    <MegaMenuServiceCard
                      title={t("megaMenu.services.designCad.title")}
                      subtitle={t("megaMenu.services.designCad.subtitle")}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href={ROUTE_PATHS.CLEANING}>
                    <MegaMenuServiceCard
                      title={t("megaMenu.services.cleaning.title")}
                      subtitle={t("megaMenu.services.cleaning.subtitle")}
                    />
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink href={ROUTE_PATHS.WELDING}>
                    <MegaMenuServiceCard
                      title={t("megaMenu.services.welding.title")}
                      subtitle={t("megaMenu.services.welding.subtitle")}
                    />
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <ContactDialog
            triggerButton={
              <NavigationMenuButton className={navigationMenuTriggerStyle()}>
                {t("contact")}
              </NavigationMenuButton>
            }
          ></ContactDialog>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
