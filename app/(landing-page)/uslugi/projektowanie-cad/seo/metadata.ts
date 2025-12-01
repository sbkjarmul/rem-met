// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Projektowanie CAD w SolidWorks | Zakład Ślusarski REM-MET Stalowa Wola",
  description:
    "Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "projektowanie CAD",
    "projekty CAD",
    "cad",
    "solid works",
    "projektowanie CAD podkarpacie",
    "projektowanie CAD maszyn",
    "projektowanie konstrukcji stalowych",
    "modelowanie CAD",
    "projektowanie ogrodzeń",
    "modelowanie",
    "rysunek techniczny",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/uslugi/projektowanie-cad",
  },

  openGraph: {
    title:
      "Projektowanie i modelowanie CAD REM-MET | Projektowanie CAD Podkarpacie",
    description:
      "Firma REM-MET - projektowanie CAD, modelowanie CAD. Doświadczenie od ponad 20 lat branży przemysłowej.",
    url: "https://www.rem-met.com/uslugi/projektowanie-cad",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Projektowanie CAD REM-MET Stalowa Wola",
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
