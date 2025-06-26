import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Attribution from "@/components/attribution";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative dark bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <Attribution />
    </div>
  );
}
