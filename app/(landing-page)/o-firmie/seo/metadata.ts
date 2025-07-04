// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie REM-MET | Producent wygrodzeń bezpieczeństwa",
  description:
    "Poznaj historię REM-MET - polskiego producenta systemów wygrodzeń FALCON, RHINO i GECKO. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "o firmie rem-met",
    "producent wygrodzeń bezpieczeństwa",
    "historia firmy rem-met",
    "wygrodzenia przemysłowe polska",
    "systemy ochronne made in poland",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/o-firmie",
  },

  openGraph: {
    title: "O firmie REM-MET | Lider w produkcji wygrodzeń",
    description: "Ponad 20 lat doświadczenia produkcji przemysłowej",
    url: "https://www.rem-met.com/o-firmie",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.png",
        width: 1200,
        height: 630,
        alt: "Producent wygrodzeń bezpieczeństwa REM-MET",
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
