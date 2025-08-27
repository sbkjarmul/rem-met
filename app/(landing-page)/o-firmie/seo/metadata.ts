// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie REM-MET | Wygrodzenia bezpieczeństwa Stalowa Wola",
  description:
    "Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "o firmie rem-met",
    "producent wygrodzeń bezpieczeństwa",
    "historia firmy rem-met",
    "wygrodzenia przemysłowe polska",
    "systemy ochronne Stalowa Wola",
    "ogrodzenia Stalowa Wola",
    "producent ogrodzeń Stalowa Wola",
    "wygrodzenia przemysłowe Stalowa Wola",
    "wygrodzenia bezpieczeństwa Stalowa Wola",
    "sprawanie Stalowa Wola",
    "konstrukcje stalowe Stalowa Wola",
    "konstrukcja Stalowa Wola",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/o-firmie",
  },

  openGraph: {
    title: "O firmie REM-MET | Wygrodzenia bezpieczeństwa Stalowa Wola",
    description:
      "Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
    url: "https://www.rem-met.com/o-firmie",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Wygrodzenia bezpieczeństwa REM-MET Stalowa Wola",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
