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
    // Set cookie to expire in 24 hours (86,400 seconds)
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
    // 1. Check cookie status first
    const hasSeen = getCookie(SEEN_KEY);
    if (!hasSeen) {
      setShowRoadBlock(true);
    }

    // 2. Set up ad status and image source
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
    const timer = setInterval(() => setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1)), 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock]);

  if (!showRoadBlock) return null;

  return (
    <div className="fixed inset-0 bg-primary-foreground z-50 flex items-center justify-center">
      <div className="relative">
        <button
          type="button"
          onClick={displayTimeLeft <= 0 ? onClose : undefined}
          className={`absolute -top-2.5 -right-2.5 bg-secondary rounded-full border-0 w-10 h-10 text-center text-secondary-foreground text-xl font-bold z-20 ${
            displayTimeLeft <= 0 ? "cursor-pointer" : "cursor-not-allowed"
          }`}>
          {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
        </button>

        <Link href="#" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-2xl">
          <Image
            src={imgSrc}
            alt="Advertisement"
            width={550}
            height={550}
            priority
            onError={handleError}
            className="object-cover h-[550px] w-[550px] max-w-[90vw] max-h-[80vh]"
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
