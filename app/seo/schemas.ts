import pl from "@/locales/pl";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: pl["schema.website"],
  url: "https://www.rem-met.com",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: pl["schema.organization"],
  url: "https://www.rem-met.com",
  logo: "https://www.rem-met.com/logo.png",
  description: pl["schema.organizationDescription"],
  address: {
    "@type": "PostalAddress",
    streetAddress: pl["schema.streetAddress"],
    addressLocality: pl["schema.addressLocality"],
    postalCode: pl["schema.postalCode"],
    addressCountry: "PL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: pl["schema.telephone"],
    contactType: "customer service",
  },
};
