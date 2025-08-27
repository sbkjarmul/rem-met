// app/wygrodzenia-bezpieczenstwa/rhino/schemas.ts
import pl from "@/locales/pl";

export const productSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: pl["rhino.metadata.title"],
  description: pl["rhino.metadata.description"],
  brand: { "@type": "Brand", name: "REM-MET" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    description: pl["schema.contactForm"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
    price: "0",
    priceCurrency: "PLN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "5",
  },
  image: "https://www.rem-met.com/images/products/rem-met-rhino-izo.webp",
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
      name: pl["schema.rhino"], // np. "System RHINO"
      item: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
    },
  ],
});
