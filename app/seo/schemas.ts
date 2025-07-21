import pl from "@/locales/pl";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: pl["schema.website"],
  url: "https://rem-met.com",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: pl["schema.organization"],
  url: "https://rem-met.com",
  logo: "https://rem-met.com/images/logos/rem-met-brandmark.svg",
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
