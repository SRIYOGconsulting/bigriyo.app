import type { Metadata } from "next";
import { StatusProvider } from "@/context/Status";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import StatusToast from "@/components/status/Toast";
import RoadBlock from "@/components/Roadblock";
import BacktoTop from "@/components/BacktoTop";
import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bigriyo",
  description: "Kei Bigriyo? Hamro Yaad Aayo. Na Aaye Pachtayo!"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-250 ease-in-out">
        <StatusProvider>
          <PromoBar />
          <NavBar />
          <main className="flex-1">{children}</main>
          <BacktoTop />
          <Footer />
          <CookieConsent />
          <RoadBlock />
          <StatusToast />
        </StatusProvider>
      </body>
    </html>
  );
}
