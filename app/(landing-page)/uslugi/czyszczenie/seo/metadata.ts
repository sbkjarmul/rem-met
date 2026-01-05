// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Czyszczenie i polerowawnie spoin kostrukcji stalowych | REM-MET Stalowa Wola",
  description:
    "Oferujemy kompleksowe czyszczenie i polerowanie spoin w konstrukcjach stalowych z wykorzystaniem zaawansowanego urządzenia REUTER Cleanox 3.0. Technologia ta pozwala skutecznie usuwać zabrudzenia, tlenki i przebarwienia po procesie spawania, a także przygotować powierzchnię pod malowanie, ocynk, pasywację lub inne obróbki. Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "czyszczenie spoin",
    "czyszczenie konstrukcji stalowych",
    "spoiny",
    "polerowanie spoin",
    "polerowanie metali",
    "polerowanie konstrukcji stalowych",
    "projektowanie konstrukcji stalowych",
    "czyszczenie metali",
    "czyszczenie stali",
    "polerowanie stali",
    "przygotowanie pod malowanie",
    "przygotowanie powierzchni",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/uslugi/czyszczenie",
  },

  openGraph: {
    title:
      "Czyszczenie i polerowanie spoin konstrukcji stalowych REM-MET | Przygotowanie powierzchni metalowych, usuwanie zabrudzeń podkarpacie.",
    description:
      "Oferujemy kompleksowe czyszczenie i polerowanie spoin w konstrukcjach stalowych z wykorzystaniem zaawansowanego urządzenia REUTER Cleanox 3.0. Doświadczenie od ponad 20 lat branży przemysłowej. ",
    url: "https://www.rem-met.com/uslugi/czyszczenie",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Czyszczenie i polerowanie spoin konstrukcji stalowych REM-MET Stalowa Wola",
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
