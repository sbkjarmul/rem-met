// app/o-firmie/metadata.ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektowanie 3d w SolidWorks | REM-MET  Stalowa Wola",
  description:
    "Firma REM-MET - produkujemy wygrodzenia przemysłowe. Doświadczenie od ponad 20 lat branży przemysłowej.",
  keywords: [
    "projektowanie 3d",
    "projekty 3d",
    "cad",
    "solid works",
    "projektowanie 3d podkarpacie",
    "projektowanie 3d maszyn",
    "projektowanie konstrukcji stalowych",
    "modelowanie 3d",
    "projektowanie ogrodzeń",
    "modelowanie",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/uslugi/projektowanie-3d",
  },

  openGraph: {
    title:
      "Projektowanie i modelowanie 3d REM-MET | Projektowanie 3d Podkarpacie",
    description:
      "Firma REM-MET - projektowanie 3d, modelowanie 3d. Doświadczenie od ponad 20 lat branży przemysłowej.",
    url: "https://www.rem-met.com/uslugi/projektowanie-3d",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Projektowanie 3d REM-MET Stalowa Wola",
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
