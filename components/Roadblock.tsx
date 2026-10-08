"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AVAILABLE } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_IMAGE = "/roadblock/default/default.jpg";
const SEEN_KEY = "roadblock_seen_v3";

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
};

const setCookie = (name: string, value: string, maxAgeSeconds: number) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
};

const RoadBlock = () => {
  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc, setImgSrc] = useState(DEFAULT_IMAGE);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(5);
  const [isAdDay, setIsAdDay] = useState(false);
  const usedFallback = useRef(false);

  const onClose = useCallback(() => {
    setCookie(SEEN_KEY, "true", 86400);
    setShowRoadBlock(false);
  }, []);

  const handleError = () => {
    if (!usedFallback.current && imgSrc !== DEFAULT_IMAGE) {
      usedFallback.current = true;
      setImgSrc(DEFAULT_IMAGE);
      setIsAdDay(false);
    } else {
      setShowRoadBlock(false);
    }
  };

  useEffect(() => {
    if (!getCookie(SEEN_KEY)) setShowRoadBlock(true);

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" }).toLowerCase();
    const hasAd = AVAILABLE[month]?.includes(day) ?? false;
    const image = hasAd ? `/roadblock/${month}/${day}.jpg` : DEFAULT_IMAGE;

    setIsAdDay(hasAd);
    setImgSrc(image);
  }, []);

  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setTimeout(onClose, 15000);
    return () => clearTimeout(timer);
  }, [onClose, showRoadBlock]);

  useEffect(() => {
    if (!showRoadBlock) return;
    document.body.style.overflow = showRoadBlock ? "hidden" : "";
    const timer = setInterval(() => setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1)), 1000);
    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  if (!showRoadBlock) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-[9999] bg-background flex items-center justify-center overflow-hidden">
      <div className="relative aspect-square w-[90vw] h-auto lg:w-auto lg:h-[80vh]">
        <button
          type="button"
          onClick={displayTimeLeft <= 0 ? onClose : undefined}
          className={`absolute top-2 right-2 flex items-center justify-center bg-secondary rounded-full w-6 h-6 lg:w-8 lg:h-8 text-sm text-secondary-foreground font-bold z-20 ${
            displayTimeLeft <= 0 ? "cursor-pointer" : "cursor-not-allowed"
          }`}>
          {displayTimeLeft <= 0 ? (
            <Image width={48} height={48} src="/icons/cross.svg" alt="cross" className="w-4 h-4 lg:w-6 lg:h-6" />
          ) : (
            displayTimeLeft
          )}
        </button>

        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full h-full overflow-hidden rounded-2xl shrink-0">
          <Image
            src={imgSrc}
            alt="Advertisement"
            width={1000}
            height={1000}
            priority
            onError={handleError}
            className="object-cover w-full h-full"
          />
        </Link>

        {!isAdDay && (
          <div className="absolute bottom-0 inset-x-0 backdrop-blur-sm rounded-2xl text-primary-foreground text-center py-3 px-4 font-bold text-lg tracking-wide z-10">
            Welcome to BIGRIYO!
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadBlock;
