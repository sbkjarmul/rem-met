import pl from "@/locales/pl";

export const aboutSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: pl["aboutUs.metadata.title"],
  description: pl["aboutUs.metadata.description"],
  publisher: {
    "@type": "Organization",
    name: pl["schema.organization"],
    logo: "https://www.rem-met.com/images/logos/rem-met-logo-light-mode.png",
  },
});
