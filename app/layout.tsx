import type { Metadata } from "next";
import { StatusProvider } from "@/context/Status";
import { CookieProvider } from "@/context/Cookie";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import StatusToast from "@/components/status/Toast";
import RoadBlock from "@/components/Roadblock";
import ExitPopup from "@/components/ExitPopup";
import Sidekick from "@/components/Sidekick";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "BIGRIYO! - Professional Repair Service at your Home",
  description: "Professional Repairing services, here, in Kathmandu, Nepal."
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative font-sans bg-background text-foreground transition-colors duration-250 ease-in-out">
        <StatusProvider>
          <CookieProvider>
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
            <RoadBlock />
            <Sidekick />
            <ExitPopup />
            <StatusToast />
          </CookieProvider>
        </StatusProvider>
      </body>
    </html>
  );
};

export default RootLayout;
