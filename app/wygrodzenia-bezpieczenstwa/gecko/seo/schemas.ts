// app/wygrodzenia-bezpieczenstwa/gecko/schemas.ts
import pl from "@/locales/pl";

export const productSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: pl["gecko.metadata.title"],
  description: pl["gecko.metadata.description"],
  brand: { "@type": "Brand", name: "REM-MET" },
  additionalProperty: {
    "@type": "PropertyValue",
    name: "Materiał",
    value: "Poliwęglan",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "PLN",
    availability: "https://schema.org/InStock",
    description: pl["schema.contactForm"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/gecko",
  },
});

export const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://www.rem-met.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pl["schema.gecko"], // np. "System GECKO"
      item: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/gecko",
    },
  ],
});
