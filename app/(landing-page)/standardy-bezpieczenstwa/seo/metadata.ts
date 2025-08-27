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
    canonical: "https://www.rem-met.com/standardy-bezpieczenstwa",
  },

  openGraph: {
    title: "Normy bezpieczeństwa wygrodzeń | REM-MET",
    description:
      "Zgodność systemów FALCON, RHINO, GECKO z przepisami UE i normami ISO",
    url: "https://www.rem-met.com/standardy-bezpieczenstwa",
    siteName: "REM-MET",
    images: [
      {
        url: "https://www.rem-met.com/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Certyfikowane wygrodzenia przemysłowe zgodne z normami bezpieczeństwa",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@rem-met",
    title: "Normy bezpieczeństwa wygrodzeń | REM-MET",
    description:
      "Certyfikowane wygrodzenia przemysłowe zgodne z przepisami UE i normami ISO",
    images: ["https://www.rem-met.com/images/rem-met-og-image.webp"],
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
