"use client";

import { useState, useEffect } from "react";

const COOKIE_STORAGE_KEY = "cookie-consent-v1"; // new key so old data is ignored

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_STORAGE_KEY);

      // Show banner ONLY if no valid value is stored yet
      if (consent !== "accepted" && consent !== "declined") {
        setVisible(true);
      }
    } catch (err) {
      // If localStorage is blocked, at least still show the banner
      console.error("CookieConsent localStorage error:", err);
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    } catch (err) {
      console.error("Error saving cookie consent:", err);
    } finally {
      setVisible(false);
    }
  };

  const declineCookies = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "declined");
    } catch (err) {
      console.error("Error saving cookie consent:", err);
    } finally {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 w-72 bg-secondary rounded-xl p-5 text-white shadow-xl fade-in">
      <p className="text-sm leading-relaxed text-center">
        We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
      </p>
      <div className="mt-4 flex w-full items-center justify-center gap-4">
        <button
          className="rounded-lg bg-white px-4 py-2 text-sm transition hover:bg-gray-100 text-black"
          onClick={declineCookies}>
          Decline
        </button>
        <button
          className="rounded-lg bg-white text-black px-4 py-2 text-sm transition hover:bg-gray-200"
          onClick={acceptCookies}>
          Accept
        </button>
      </div>
    </div>
  );
}
