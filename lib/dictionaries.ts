import "server-only";

const dictionaries = {
  en: () => import("@/locales/en.js").then((module) => module.default),
  pl: () => import("@/locales/pl.js").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "pl") => {
  return dictionaries[locale]();
};
