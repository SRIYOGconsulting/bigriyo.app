"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

const BacktoTop = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTopBtn(window.scrollY > 0);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showBackToTopBtn) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className="group cursor-pointer bg-secondary p-3 rounded-full">
      <ArrowUpIcon className="h-7 w-7 text-secondary-foreground transition-transform group-hover:scale-110" />
    </button>
  );
};

export default BacktoTop;
