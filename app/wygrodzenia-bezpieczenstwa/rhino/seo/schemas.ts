// app/wygrodzenia-bezpieczenstwa/rhino/schemas.ts
import pl from "@/locales/pl";

export const productSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: pl["rhino.metadata.title"],
  description: pl["rhino.metadata.description"],
  brand: { "@type": "Brand", name: "REM-MET" },
  additionalProperty: {
    "@type": "PropertyValue",
    name: "Wytrzymałość",
    value: "Odporność na uderzenia",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "PLN",
    availability: "https://schema.org/InStock",
    description: pl["schema.contactForm"],
    url: "https://rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
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
      item: "https://rem-met.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pl["schema.rhino"], // np. "System RHINO"
      item: "https://rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
    },
  ],
});
