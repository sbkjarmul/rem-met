// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spawanie stali i metali kolorowych | REM-MET Stalowa Wola",
  description:
    "Oferujemy kompleksowe czyszczenie i polerowanie spoin w konstrukcjach stalowych z wykorzystaniem zaawansowanego urządzenia REUTER Cleanox 3.0. Technologia ta pozwala skutecznie usuwać zabrudzenia, tlenki i przebarwienia po procesie spawania, a także przygotować powierzchnię pod malowanie, ocynk, pasywację lub inne obróbki. Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "spawanie stalowa wola",
    "spawanie konstrukcji stalowych",
    "ogrodzenia",
    "ogrodzenia stalowa wola",
    "ogrodzenia podkarpacie",
    "spawanie stali",
    "spawanie mig/mag",
    "spawanie regałów",
    "spawanie metali",
    "spawanie na zamówienie",
    "konstrukcje stalowe",
    "bramy do domu",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/uslugi/spawanie",
  },

  openGraph: {
    title:
      "Profesjonalne spawanie stali i metali kolorowych REM-MET | Spawanie konstrukcji stalowych Stalowa Wola",
    description:
      "Oferujemy kompleksowe spawanie stali i metali kolorowych. Spawanie konstrukcji stalowych. Projektujemy ogrodzenia i balustrady, bramy wjazdowe oraz regały i poręcze. Doświadczenie od ponad 20 lat branży spawalniczej.",
    url: "https://www.rem-met.com/uslugi/spawanie",
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
