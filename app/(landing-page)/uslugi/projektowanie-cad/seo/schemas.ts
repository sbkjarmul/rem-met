import pl from "@/locales/pl";

export const designCadServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "DesignCadServicePage",
  name: pl["designCad.metadata.title"],
  description: pl["designCad.metadata.description"],
  publisher: {
    "@type": "Organization",
    name: pl["schema.organization"],
    logo: "https://www.rem-met.com/images/logos/rem-met-brandmark.svg",
  },
});
