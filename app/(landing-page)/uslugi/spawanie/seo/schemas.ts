import pl from "@/locales/pl";

export const weldingServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WeldingServicePage",
  name: pl["welding.metadata.title"],
  description: pl["welding.metadata.description"],
  publisher: {
    "@type": "Organization",
    name: pl["schema.organization"],
    logo: "https://www.rem-met.com/images/logos/rem-met-brandmark.svg",
  },
});
