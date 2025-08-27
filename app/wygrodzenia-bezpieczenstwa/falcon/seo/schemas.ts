import pl from "@/locales/pl";

export const productSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: pl["falcon.metadata.title"],
  description: pl["falcon.metadata.description"],
  brand: { "@type": "Brand", name: "REM-MET" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    description: pl["schema.contactForm"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/falcon",
    price: "0",
    priceCurrency: "PLN",
  },
  image: "https://www.rem-met.com/images/products/rem-met-falcon-izo.webp",
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
      name: pl["schema.falcon"],
      item: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/falcon",
    },
  ],
});
