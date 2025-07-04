export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "REM-MET - Profesjonalne wygrodzenia bezpieczeństwa",
  url: "https://www.rem-met.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.rem-met.com/wyszukaj?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "REM-MET",
  url: "https://www.rem-met.com",
  logo: "https://www.rem-met.com/logo.png",
  description:
    "Producent systemów wygrodzeń bezpieczeństwa: FALCON, RHINO, GECKO",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Przemysłowa 10",
    addressLocality: "Warszawa",
    postalCode: "00-001",
    addressCountry: "PL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48 123 456 789",
    contactType: "customer service",
  },
};
