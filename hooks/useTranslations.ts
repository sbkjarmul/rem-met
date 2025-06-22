import pl from "@/locales/pl";

const useTranslations = (section?: string) => {
  if (section) {
    const t = (key: string) => pl[section][key];
    return t;
  }

  return (key: string) => pl[key];
};

export default useTranslations;
