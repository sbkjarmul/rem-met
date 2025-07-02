import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import pl from "@/locales/pl";
import PasswordProtect from "@/components/ui/password-protect";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${ttOctosquares.variable}`}>
      <body>
        <PasswordProtect>{children}</PasswordProtect>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
