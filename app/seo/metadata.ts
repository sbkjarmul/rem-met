import { Metadata } from "next";
import pl from "@/locales/pl";

export const metadata: Metadata = {
  title: pl.title,
  description: pl.description,
  keywords: pl.keywords,
  openGraph: {
    title: pl.title,
    description: pl.description,
    url: pl.url,
    images: [
      {
        url: "/images/rem-met-og-image.webp",
        width: 1200,
        height: 630,
        alt: pl.ogImageAlt,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.rem-met.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};
