"use client";

import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import MobileDrawer from "@/components/ui/MobileDrawer";
import PromoBar from "@/components/ui/PromoBar";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      <PromoBar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 text-lg md:text-xl font-bold text-foreground hover:opacity-90 transition-opacity">
          <Image src="/favicon/favicon.svg" alt="logo" width={48} height={48} className="h-8 w-8 md:h-12 md:w-12" />
          BIGRIYO
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground hover:text-primary transition-colors">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden lg:flex p-2 rounded-full border border-border bg-card text-foreground hover:border-primary transition-all items-center justify-center w-9 h-9 cursor-pointer shrink-0">
            {isDark ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-primary" />}
          </button>

          <Link
            href="/book"
            className="border-2 border-secondary bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-lg hover:bg-transparent dark:hover:text-foreground hover:text-secondary transition-all">
            Book a Service
          </Link>
          <Link
            href="/login"
            className="border-2 text-secondary border-secondary px-4 py-2 rounded-md hover:text-secondary-foreground dark:text-foreground hover:bg-secondary transition-all duration-300 cursor-pointer">
            Vendor Login
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-lg border border-border bg-card text-foreground hover:border-primary transition-colors flex lg:hidden items-center justify-center w-9 h-9 shrink-0 cursor-pointer">
          {isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} toggleTheme={toggleTheme} />
    </header>
  );
}
