"use client";

import { XIcon, SunIcon, MoonIcon } from "lucide-react";
import { navLinks, socialLinks } from "@/constants";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type MobileDrawerProps = {
  isOpen: boolean;
  isDark: boolean;
  toggleTheme: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, setIsOpen, isDark, toggleTheme }) => {
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-50 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Container */}
      <aside
        className={`absolute top-0 left-0 bottom-0 h-dvh w-72 max-w-[85vw] bg-background border-r border-border z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col h-full p-6 min-h-0">
          {/* Header - Fixed Top */}
          <div className="flex justify-between items-center pb-4 mb-8 border-b border-border shrink-0">
            <Link href="/" onClick={closeDrawer} className="flex gap-4 items-center">
              <Image src="/icons/logo/1.svg" alt="logo" width={36} height={36} />
              <div className="text-xl font-bold text-foreground">BIGRIYO</div>
            </Link>
            <button onClick={closeDrawer} className="p-1 rounded-full text-muted-foreground" aria-label="Close menu">
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Nav Items */}
          <nav className="flex-1 min-h-0 overflow-y-auto">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className="group flex items-center justify-between p-3 border-b border-border transition-colors hover:bg-muted text-foreground">
                  <div className="flex items-center gap-x-4">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                </Link>
              );
            })}

            {/* Theme Toggle Nav Item */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between w-full p-3 my-8 rounded-lg transition-colors hover:bg-muted text-foreground cursor-pointer">
              <span className="font-medium">{isDark ? "Light Mode" : "Dark Mode"}</span>
              {isDark ? <SunIcon className="w-5 h-5 text-amber-400" /> : <MoonIcon className="w-5 h-5 text-primary" />}
            </button>

            <div className="space-y-2">
              <Link
                href="/career"
                onClick={closeDrawer}
                className="flex items-center justify-center w-full bg-secondary text-secondary-foreground font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                Career
              </Link>
              <Link
                href="/notice"
                onClick={closeDrawer}
                className="flex items-center justify-center border-2 text-secondary border-secondary py-2.5 w-full px-4 rounded-lg hover:text-white dark:text-foreground hover:bg-secondary transition-all">
                Notice
              </Link>
            </div>
          </nav>

          {/* Social Links - Fixed Bottom */}
          <div className="pt-4 mt-4 border-t border-border shrink-0">
            <p className="text-xs font-medium text-muted-foreground mb-3 text-center">Connect With Us</p>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-9 h-9 p-2 rounded-full bg-muted hover:bg-accent transition-colors shrink-0"
                  aria-label={social.label}>
                  <Image
                    fill
                    sizes="36px"
                    src={social.path}
                    alt={social.label}
                    className="object-contain p-2 dark:invert"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;
