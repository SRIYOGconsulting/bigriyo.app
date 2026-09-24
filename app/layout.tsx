import type { Metadata } from "next";
import { StatusProvider } from "@/context/Status";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import StatusToast from "@/components/status/Toast";
import RoadBlock from "@/components/Roadblock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-200 ease-in-out">
        <StatusProvider>
          <Navbar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <RoadBlock />
          <StatusToast />
        </StatusProvider>
      </body>
    </html>
  );
}
