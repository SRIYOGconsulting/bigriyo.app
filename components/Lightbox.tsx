"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";

type LightboxItem = {
  img: string;
  label?: string | number; // optional, can be count, title, etc.
};

type LightboxProps = {
  data: LightboxItem[];
  lightbox: boolean;
  index: number | null;
  setLightbox: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Lightbox({ data, setLightbox, lightbox, setIndex, index }: LightboxProps) {
  const closeLightbox = useCallback(() => {
    setLightbox(false);
  }, [setLightbox]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    setIndex(index === 0 ? data.length - 1 : index - 1);
  }, [data.length, index, setIndex]);

  const goNext = useCallback(() => {
    if (index === null) return;
    setIndex((index + 1) % data.length);
  }, [data.length, index, setIndex]);

  useEffect(() => {
    if (lightbox) {
      document.body.classList.remove("showScroll");
      document.body.classList.add("hideScroll");
    } else {
      document.body.classList.remove("hideScroll");
      document.body.classList.add("showScroll");
    }

    return () => {
      document.body.classList.remove("hideScroll");
      document.body.classList.add("showScroll");
    };
  }, [lightbox]);

  // If lightbox is closed or index is null, render nothing
  if (!lightbox || index === null) return null;

  return (
    <>
      {/* Backdrop & Container */}
      <div
        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
        onClick={closeLightbox}>
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 text-primary-foreground/80 bg-primary/40 md:bg-transparent p-2 rounded-full hover:bg-primary/40 transition-colors cursor-pointer">
          <ChevronLeftIcon className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        {/* Image Container */}
        <div
          className="relative flex items-center justify-center max-w-full max-h-[75vh]"
          onClick={(e) => e.stopPropagation()}>
          <Image
            width={600}
            height={800}
            src={data[index].img}
            alt={`Image ${index + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 text-primary-foreground/80 bg-primary/40 md:bg-transparent p-2 rounded-full hover:bg-primary/40 transition-colors cursor-pointer">
          <ChevronRightIcon className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        {/* Box Footer: Counter & Close Button */}
        <div className="absolute bottom-24 left-0 right-0 px-6 flex flex-col gap-2 items-center justify-center z-50">
          <span className="text-primary-foreground font-medium">
            {index + 1} / {data.length}
          </span>
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="text-primary-foreground/80 bg-failure/60 md:bg-transparent p-2 transition-colors cursor-pointer rounded-full hover:bg-failure/60">
            <XIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </>
  );
}
