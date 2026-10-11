"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroImages } from "@/data";

const HeroBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {heroImages.map((heroImage, idx) => (
        <div
          key={heroImage.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Image
            src={heroImage.image}
            alt="BIGRIYO"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
    </div>
  );
};

export default HeroBackground;
