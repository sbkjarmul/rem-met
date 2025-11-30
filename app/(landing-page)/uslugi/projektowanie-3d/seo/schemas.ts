import pl from "@/locales/pl";

export const design3dServiceSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Design3dServicePage",
  name: pl["design3d.metadata.title"],
  description: pl["design3d.metadata.description"],
  publisher: {
    "@type": "Organization",
    name: pl["schema.organization"],
    logo: "https://www.rem-met.com/images/logos/rem-met-brandmark.svg",
  },
});
