// app/wygrodzenia-bezpieczenstwa/gecko/metadata.ts
import pl from "@/locales/pl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pl["rhino.metadata.title"],
  description: pl["rhino.metadata.description"],
  keywords: [
    "wygrodzenia bezpieczeństwa metalowe",
    "wygrodzenai metalowe",
    "stalowe wygrodzenia bezpieczeństwa",
    "system wygrodzeń z metalu",
    "systemy ochronne z metalu",
    "wygrodzenia przemysłowe",
    "systemy wygrodzeń bezpieczeństwa",
    "ochrona maszyn",
    "bariery bezpieczeństwa",
    "normy wygrodzeń",
    "metalowe wygrodzenia",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
  },

  openGraph: {
    title: pl["rhino.metadata.title"],
    description: pl["rhino.metadata.description"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
    siteName: "REM-MET",
    images: [
      {
        url: "https://www.rem-met.com/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Wygrodzenia bezpieczeństwa REM-MET | Producent Stalowa Wola",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@rem-met",
    title: pl["rhino.metadata.title"],
    description: pl["rhino.metadata.description"],
    images: ["https://www.rem-met.com/images/rem-met-og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
