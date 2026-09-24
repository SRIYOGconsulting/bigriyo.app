"use client";

import { SearchIcon, SunIcon, MoonIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "@/constants";
import MobileDrawer from "@/components/MobileDrawer";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

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

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        {/* using image logo later */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <Link href="/" className="text-foreground hover:opacity-90 transition-opacity">
            BIGRIYO
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative flex items-center">
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-1.5 shadow-sm transition-all duration-300 focus-within:border-primary">
              <SearchIcon className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search services..."
                className="w-36 sm:w-52 md:w-64 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
                  aria-label="Clear text">
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-border bg-card text-foreground hover:border-primary transition-all flex items-center justify-center w-9 h-9 cursor-pointer">
            {isDark ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-primary" />}
          </button>

          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
}
