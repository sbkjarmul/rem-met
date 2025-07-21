// app/standardy-bezpieczenstwa/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Normy bezpieczeństwa wygrodzeń przemysłowych | REM-MET",
  description:
    "Kompleksowy przewodnik po normach PN-EN i dyrektywach UE dla systemów wygrodzeń FALCON, RHINO, GECKO. Sprawdź wymagania prawne.",
  keywords: [
    "normy bezpieczeństwa",
    "wygrodzenia przemysłowe przepisy",
    "PN-EN ISO 14120",
    "Dyrektywa Maszynowa",
    "certyfikacja wygrodzeń",
  ],

  alternates: {
    canonical: "https://rem-met.com/standardy-bezpieczenstwa",
  },

  openGraph: {
    title: "Normy bezpieczeństwa wygrodzeń | REM-MET",
    description:
      "Zgodność systemów FALCON, RHINO, GECKO z przepisami UE i normami ISO",
    url: "https://rem-met.com/standardy-bezpieczenstwa",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Certyfikowane wygrodzenia zgodne z normami bezpieczeństwa",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
