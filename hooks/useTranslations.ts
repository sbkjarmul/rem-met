import pl from "@/locales/pl";

const useTranslations = (section?: string) => {
  if (section) {
    const t = (key: string) => (pl as Record<string, any>)[section]?.[key];
    return t;
  }

  return (key: string) => (pl as Record<string, any>)[key];
};

export default useTranslations;
