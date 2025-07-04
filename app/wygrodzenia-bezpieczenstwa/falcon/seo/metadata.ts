// app/wygrodzenia-bezpieczenstwa/falcon/metadata.ts
import pl from "@/locales/pl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pl["falcon.metadata.title"],
  description: pl["falcon.metadata.description"],
  keywords: [
    "system wygrodzeń siatkowych",
    "wygrodzenia przemysłowe siatkowe",
    "ochrona maszyn",
    "bariery bezpieczeństwa",
    "normy wygrodzeń siatkowych",
    "systemy wygrodzeń siatkowych",
    "wygrodzenia siatkowe",
    "systemy wygrodzeń",
    "wygrodzenia przemysłowe",
    "ochrona maszyn",
    "bariery bezpieczeństwa",
    "normy wygrodzeń",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/falcon",
  },

  openGraph: {
    title: pl["falcon.metadata.title"],
    description: pl["falcon.metadata.description"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/falcon",
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
