"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CookieContextType = {
  visible: boolean;
  accept: () => void;
  decline: () => void;
};

const COOKIE_STORAGE_KEY = "cookie-consent-v1";
const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieContextProps {
  children: React.ReactNode;
}

export function CookieProvider({ children }: CookieContextProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (consent !== "accepted" && consent !== "declined") setVisible(true);
    } catch (err) {
      console.error("CookieConsent localStorage error:", err);
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    } catch (err) {
      console.error("Error saving cookie consent:", err);
    } finally {
      setVisible(false);
    }
  };

  const decline = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "declined");
    } catch (err) {
      console.error("Error saving cookie consent:", err);
    } finally {
      setVisible(false);
    }
  };

  return <CookieContext.Provider value={{ visible, accept, decline }}>{children}</CookieContext.Provider>;
}

export default function useCookie() {
  const context = useContext(CookieContext);
  if (!context) throw new Error("Error: CookieContext was used outside CookieProvider!");
  return context;
}
