"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HERO_IMAGE_COUNT = 2;

const HeroBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % HERO_IMAGE_COUNT), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {Array.from({ length: HERO_IMAGE_COUNT }).map((_, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Image
            src={`/home/hero/${idx + 1}.jpg`}
            alt="BIGRIYO"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
    </div>
  );
};

export default HeroBackground;
