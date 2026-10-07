"use client";

import { useEffect, useState } from "react";
import useCookie from "@/context/Cookie";
import Image from "next/image";
import Link from "next/link";

const Sidekick = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);
  const { visible } = useCookie();

  useEffect(() => {
    const handleScroll = () => setShowBackToTopBtn(window.scrollY > 0);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`fixed right-2 z-20 flex flex-col items-center ${visible ? "bottom-48" : "bottom-12"}`}>
      {/* Phone Icon */}
      <Link href="tel:+9779852024365" className="relative group cursor-pointer bg-secondary p-3 rounded-full">
        <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-75 transition pointer-events-none" />
        <Image
          width={32}
          height={32}
          src="/icons/phone.svg"
          alt="phone"
          className="w-6 h-6 md:w-8 md:h-8 animate-phone-ring"
        />
      </Link>

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/9779852024365"
        className="cursor-pointer bg-secondary p-3 rounded-full animate-bounce mt-6 mb-2">
        <Image width={32} height={32} src="/icons/whatsapp-side.svg" alt="whatsapp" className="w-6 h-6 md:w-8 md:h-8" />
      </Link>

      {showBackToTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="cursor-pointer bg-muted/80 shadow-xl border border-secondary/80 p-3 rounded-full">
          <Image width={32} height={32} src="/icons/up.svg" alt="back-to-top" className="w-6 h-6 md:w-8 md:h-8 " />
        </button>
      )}
    </div>
  );
};

export default Sidekick;
