import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import pl from "@/locales/pl";

const ttOctosquares = localFont({
  src: [
    {
      path: "../public/fonts/TT-Octosquares-Trial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TT-Octosquares-Trial-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TT-Octosquares-Trial-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-octosquares",
});

export const metadata: Metadata = {
  title: pl.title,
  description: pl.description,
  keywords: pl.keywords,
  openGraph: {
    title: pl.title,
    description: pl.description,
    url: "https://rem-met.com",
    images: [
      {
        url: "/images/rem-met-og-image.png",
        width: 1200,
        height: 630,
        alt: pl.ogImageAlt,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${ttOctosquares.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
