"use client";

import { navLinks } from "@/constants";
import { XIcon, SunIcon, MoonIcon } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  toggleTheme: () => void;
};

type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-accent transition-colors"
    aria-label={label}>
    <img src={icon} alt={label} className="w-5 h-5 dark:invert" aria-hidden="true" />
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-muted text-foreground">
    <span className="font-medium">{label}</span>
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, setIsOpen, isDark, toggleTheme }) => {
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  const socialLinks = [
    { href: "https://www.facebook.com/", label: "Facebook", path: "/icons/facebook.svg" },
    { href: "https://www.youtube.com/", label: "YouTube", path: "/icons/youtube.svg" },
    { href: "https://www.x.com/", label: "X (Twitter)", path: "/icons/x.svg" },
    { href: "https://www.linkedin.com/company/", label: "LinkedIn", path: "/icons/linkedin.svg" }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 h-screen w-72 max-w-[80vw] bg-background border-r border-border z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-border shrink-0">
            <Link href="/" onClick={closeDrawer} className="text-xl font-bold text-foreground">
              BIGRIYO
            </Link>
            <button
              onClick={closeDrawer}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close menu">
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <NavItem key={item.href} to={item.href} label={item.title} onClick={closeDrawer} />
            ))}

            {/* Theme Toggle Nav Item */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between w-full p-3 rounded-lg transition-colors hover:bg-muted text-foreground cursor-pointer">
              <span className="font-medium">{isDark ? "Light Mode" : "Dark Mode"}</span>
              {isDark ? <SunIcon className="w-5 h-5 text-amber-400" /> : <MoonIcon className="w-5 h-5 text-primary" />}
            </button>

            <div className="pt-4 space-y-2">
              <Link href="/career" onClick={closeDrawer} className="block">
                <button className="w-full border border-border rounded-lg px-4 py-2.5 font-medium text-foreground hover:bg-muted transition-colors cursor-pointer">
                  Career
                </button>
              </Link>

              <Link href="/notice" onClick={closeDrawer} className="block">
                <button className="w-full bg-primary text-primary-foreground font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                  Notice
                </button>
              </Link>
            </div>
          </nav>

          {/* Social Links */}
          <div className="pt-6 mt-auto border-t border-border shrink-0">
            <p className="text-xs font-medium text-muted-foreground mb-3 text-center">Connect With Us</p>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <SocialIcon key={social.label} href={social.href} label={social.label} icon={social.path} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;
