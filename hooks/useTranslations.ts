import pl from "@/locales/pl";

const useTranslations = () => {
  const t = (key: string) => pl[key];

  return t;
};

export default useTranslations;
