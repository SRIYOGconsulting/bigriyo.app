"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AVAILABLE } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_IMAGE = "/roadblock/default/default.jpg";
const SEEN_KEY = "roadblock_seen_v3";

const RoadBlock = () => {
  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc, setImgSrc] = useState(DEFAULT_IMAGE);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(5);
  const [formattedDate, setFormattedDate] = useState("");
  const [isAdDay, setIsAdDay] = useState(false);
  const usedFallback = useRef(false);

  const onClose = useCallback(() => {
    sessionStorage.setItem(SEEN_KEY, "true");
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
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" }).toLowerCase();
    const hasAd = AVAILABLE[month]?.includes(day) ?? false;
    const image = AVAILABLE[month]?.includes(day) ? `/roadblock/${month}/${day}.jpg` : DEFAULT_IMAGE;
    const displayStr = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    setIsAdDay(hasAd);
    setImgSrc(image);
    setFormattedDate(displayStr);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem(SEEN_KEY)) setShowRoadBlock(true);
  }, []);

  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setTimeout(onClose, 20000);
    return () => clearTimeout(timer);
  }, [onClose, showRoadBlock]);

  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setInterval(() => setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1)), 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock]);

  if (!showRoadBlock) return null;

  return (
    <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
      <div className="relative">
        {formattedDate && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 pointer-events-none">
            {formattedDate}
          </div>
        )}

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
