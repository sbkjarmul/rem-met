import pl from "@/locales/pl";

export const cleaningServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CleaningServicePage",
  name: pl["cleaning.metadata.title"],
  description: pl["cleaning.metadata.description"],
  publisher: {
    "@type": "Organization",
    name: pl["schema.organization"],
    logo: "https://www.rem-met.com/images/logos/rem-met-brandmark.svg",
  },
});
