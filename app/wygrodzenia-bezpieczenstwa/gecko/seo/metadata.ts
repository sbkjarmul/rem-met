// app/wygrodzenia-bezpieczenstwa/gecko/metadata.ts
import pl from "@/locales/pl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pl["gecko.metadata.title"],
  description: pl["gecko.metadata.description"],
  keywords: [
    "wygrodzenia bezpieczeństwa z poliwęglanu",
    "bariery poliwęglanowe",
    "przejrzyste wygrodzenia bezpieczeństwa",
    "system wygrodzeń z poliwęglanu",
    "systemy ochronne z poliwęglanu",
    "wygrodzenia przemysłowe",
    "systemy wygrodzeń bezpieczeństwa",
    "ochrona maszyn",
    "bariery bezpieczeństwa",
    "normy wygrodzeń",
    "poliwęglanowe wygrodzenia",
  ],

  alternates: {
    canonical: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/gecko",
  },

  openGraph: {
    title: pl["gecko.metadata.title"],
    description: pl["gecko.metadata.description"],
    url: "https://www.rem-met.com/wygrodzenia-bezpieczenstwa/gecko",
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
    title: pl["gecko.metadata.title"],
    description: pl["gecko.metadata.description"],
    images: ["https://www.rem-met.com/images/rem-met-og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
