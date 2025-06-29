import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useTranslations from "@/hooks/useTranslations";

import NavigationMenuProductCard from "./mega-menu-product-card";

const MegaMenu = () => {
  const t = useTranslations("header");
  const tOurProducts = useTranslations("ourProductsSection");

  return (
    <NavigationMenu className="static">
      <NavigationMenuList className="h-[100px]">
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink
            href="/standards"
            className={navigationMenuTriggerStyle()}
          >
            {t("standards")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuLink
            href="/about-us"
            className={navigationMenuTriggerStyle()}
          >
            {t("about")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="h-full flex flex-col justify-center">
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            {t("offer")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="dark:bg-brand-blue-400 bg-gray-100 absolute top-0 left-0 md:w-screen h-[calc(100vh-100px)] overflow-y-auto">
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
                      path="/falcon"
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
                      path="/rhino"
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
                      path="/gecko"
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

export default MegaMenu;
