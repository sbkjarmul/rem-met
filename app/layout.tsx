import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Attribution from "@/components/attribution";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${ttOctosquares.variable}`}>
      <body className="relative dark bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <Attribution />
      </body>
    </html>
  );
}
