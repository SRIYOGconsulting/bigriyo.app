"use client";

import { SunIcon, MoonIcon, MenuIcon, XIcon, ToolCaseIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import MobileDrawer from "@/components/MobileDrawer";
import PromoBar from "@/components/PromoBar";
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
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex lg:flex-col items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:opacity-90 transition-opacity">
          <ToolCaseIcon className="w-8 h-8" />
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
            href="/career"
            className="border-2 border-secondary bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Career
          </Link>
          <Link
            href="/services/book"
            className="border-2 border-foreground rounded-lg px-4 py-2 font-medium text-foreground hover:bg-muted transition-colors">
            Book a Service
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
