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
    canonical: "https://rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
  },

  openGraph: {
    title: pl["rhino.metadata.title"],
    description: pl["rhino.metadata.description"],
    url: "https://rem-met.com/wygrodzenia-bezpieczenstwa/rhino",
    siteName: "REM-MET",
    images: [
      {
        url: "/images/rem-met-og-image.webp",
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
