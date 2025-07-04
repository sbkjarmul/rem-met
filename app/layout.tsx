import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Script from "next/script";
import { organizationSchema, websiteSchema } from "./seo/schemas";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${ttOctosquares.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/TT-Octosquares-Trial-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TT-Octosquares-Trial-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TT-Octosquares-Trial-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* <!-- Hotjar Tracking Code for REM-MET --> */}
        <Script
          id="hotjar"
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

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
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
