import pl from "@/locales/pl";

const useTranslation = () => {
  // In a real-world multi-language app, you'd have logic here
  // to select the correct locale based on user preference or URL.
  // For now, we'll just return the Polish translations.
  return pl;
};

export default useTranslation;
