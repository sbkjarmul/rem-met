import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Attribution from "@/components/attribution";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative light bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <Attribution />
    </div>
  );
}
