import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import pl from "@/locales/pl";
import Script from "next/script";

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
    url: pl.url,
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

        {/* <!-- Hotjar Tracking Code for REM-MET --> */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6453375,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </head>

      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
