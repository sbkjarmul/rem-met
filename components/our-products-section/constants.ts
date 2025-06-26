export const getProducts = (t: (key: string) => string) => [
  {
    id: "1",
    name: t("falcon.name"),
    image: "/images/products/rem-met-falcon-hero.png",
    title: t("falcon.title"),
    description: t("falcon.description"),
    cta: t("falcon.cta"),
    path: "/falcon",
  },
  {
    id: "2",
    name: t("rhino.name"),
    image: "/images/products/rem-met-rhino-hero.png",
    title: t("rhino.title"),
    description: t("rhino.description"),
    cta: t("rhino.cta"),
    path: "/rhino",
  },
  {
    id: "3",
    name: t("gecko.name"),
    image: "/images/products/rem-met-gecko-hero.png",
    title: t("gecko.title"),
    description: t("gecko.description"),
    cta: t("gecko.cta"),
    path: "/gecko",
  },
];
