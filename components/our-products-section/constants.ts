import { ROUTE_PATHS } from "@/app/constants";

export const getProducts = (t: (key: string) => string) => [
  {
    id: "1",
    name: t("falcon.name"),
    image: "/images/products/rem-met-falcon-product-desktop.webp",
    title: t("falcon.title"),
    description: t("falcon.description"),
    cta: t("falcon.cta"),
    path: ROUTE_PATHS.FALCON,
  },
  {
    id: "2",
    name: t("rhino.name"),
    image: "/images/products/rem-met-rhino-product-desktop.webp",
    title: t("rhino.title"),
    description: t("rhino.description"),
    cta: t("rhino.cta"),
    path: ROUTE_PATHS.RHINO,
  },
  {
    id: "3",
    name: t("gecko.name"),
    image: "/images/products/rem-met-gecko-product-desktop.webp",
    title: t("gecko.title"),
    description: t("gecko.description"),
    cta: t("gecko.cta"),
    path: ROUTE_PATHS.GECKO,
  },
];
