"use client";

import { useEffect, useState } from "react";
import { certificates } from "@/constants";
import Lightbox from "@/components/ui/Lightbox";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

export default function Testimonials() {
  const [lightbox, setLightbox] = useState(false);
  const [index, setIndex] = useState<number | null>(0);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = lightbox ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lightbox]);

  return (
    <>
      <Ribbon name="Certificates" showFontSize={false} />
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300">
              <Image
                height={600}
                width={800}
                src={cert.img}
                alt={cert.title}
                onClick={() => {
                  setLightbox(true);
                  setIndex(index);
                }}
                className="w-full h-56 object-cover cursor-pointer"
              />
              <div className="px-4 py-5 bg-card">
                <h2 className="text-lg font-medium group-hover:text-primary">{cert.title}</h2>
                <p className="text-sm mt-2">Short description about the certificate.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <Lightbox index={index} setLightbox={setLightbox} lightbox={lightbox} data={certificates} setIndex={setIndex} />
      )}
    </>
  );
}
