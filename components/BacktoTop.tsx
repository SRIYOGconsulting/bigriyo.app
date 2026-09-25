"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

const BacktoTop = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTopBtn(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showBackToTopBtn) return null;

  return (
    <div className="fixed bottom-[10%] right-4 z-50 rounded-full bg-secondary md:bottom-[20%]">
      <button onClick={scrollToTop} aria-label="Scroll to Top" className="p-2 cursor-pointer">
        <ArrowUpIcon className="h-8 w-8 text-white transition-transform duration-200 hover:scale-110" />
      </button>
    </div>
  );
};

export default BacktoTop;
