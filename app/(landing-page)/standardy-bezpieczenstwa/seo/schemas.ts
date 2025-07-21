export const standardsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Normy i standardy wygrodzeń bezpieczeństwa",
  description:
    "Kompleksowy przegląd norm PN-EN i dyrektyw UE dotyczących wygrodzeń przemysłowych, systemów wygrodzeń bezpieczeństwa",
  datePublished: "2024-05-20",
  dateModified: "2024-05-25",
  author: {
    "@type": "Organization",
    name: "REM-MET",
    url: "https://www.rem-met.com",
  },
  publisher: {
    "@type": "Organization",
    name: "REM-MET",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rem-met.com/images/logos/rem-met-logo-light-mode.png",
      width: 300,
      height: 60,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.rem-met.com/standardy-bezpieczenstwa",
  },
  keywords: [
    "normy bezpieczeństwa",
    "PN-EN ISO 14120",
    "wymagania prawne wygrodzeń",
    "certyfikaty maszyn",
    "wygrodzenia bezpieczeństwa",
    "standardy bezpieczeństwa",
  ],
  articleBody:
    "Tekst opisujący szczegółowo standardy wygrodzeń bezpieczeństwa, które są przestrzegane w firmie REM-MET",
  mentions: [
    { "@type": "Thing", name: "Dyrektywa Maszynowa 2006/42/WE" },
    { "@type": "Thing", name: "Norma PN-EN ISO 14120" },
  ],
});

export const breadcrumbsSchema = JSON.stringify({
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
      name: "Standardy bezpieczeństwa",
      item: "https://www.rem-met.com/standardy-bezpieczenstwa",
    },
  ],
});
