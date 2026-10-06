"use client";

import { useState, useCallback, useEffect } from "react";
import { galleryItems } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";
import { GalleryItem } from "@/types";

interface GallerySectionProps {
  heading: string;
  className?: string;
  items: GalleryItem[];
  onSelectItem: (item: GalleryItem) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ heading, items, className = "", onSelectItem }) => {
  return (
    <>
      <h2 className={`${className} mb-4 font-bold text-2xl text-center`}>{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            role="button"
            tabIndex={0}
            onClick={() => onSelectItem(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectItem(item);
              }
            }}
            className="group relative w-full h-72 rounded-xl overflow-hidden shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm drop-shadow-md">{item.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setLightbox(false);
    setSelectedIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1);
  }, [selectedIndex]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  }, [selectedIndex]);

  const handleSelectItem = useCallback((item: GalleryItem) => {
    const globalIdx = galleryItems.findIndex((gItem) => (gItem.id ? gItem.id === item.id : gItem.src === item.src));
    if (globalIdx !== -1) {
      setSelectedIndex(globalIdx);
      setLightbox(true);
    }
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, closeLightbox, goPrev, goNext]);

  return (
    <>
      <Ribbon name="Gallery" showFontSize={false} />

      {/* Grid Section */}
      <section className="py-12 px-4 lg:px-0 max-w-7xl mx-auto">
        <GallerySection heading="Featured Services" items={galleryItems.slice(0, 6)} onSelectItem={handleSelectItem} />
        <GallerySection
          heading="All-time Favorite Services"
          items={galleryItems.slice(6, 12)}
          className="mt-12"
          onSelectItem={handleSelectItem}
        />
        <GallerySection
          heading="Latest Services"
          items={galleryItems.slice(12, 18)}
          className="mt-12"
          onSelectItem={handleSelectItem}
        />
      </section>

      {/* Lightbox Overlay */}
      {lightbox && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 select-none"
          onClick={closeLightbox}>
          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-secondary p-2 rounded-full cursor-pointer">
            <Image width={24} height={24} src="/icons/prev-arrow.svg" alt="Previous" />
          </button>

          {/* Main Image View */}
          <div
            className="relative flex flex-col items-center justify-center max-w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}>
            <Image
              width={1200}
              height={800}
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].alt}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              priority
            />
            {galleryItems[selectedIndex].alt && (
              <p className="mt-2 text-sm text-gray-300 text-center font-medium">{galleryItems[selectedIndex].alt}</p>
            )}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-secondary p-2 rounded-full cursor-pointer">
            <Image width={24} height={24} src="/icons/next-arrow.svg" alt="Next" />
          </button>

          {/* Footer Controls */}
          <div className="fixed bottom-6 left-0 right-0 px-6 flex flex-col gap-2 items-center justify-center z-50">
            <span className="text-white font-medium text-sm">
              {selectedIndex + 1} / {galleryItems.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="text-white/80 bg-red-600/80 md:bg-transparent p-2 transition-colors cursor-pointer rounded-full hover:bg-red-600">
              <Image width={24} height={24} src="/icons/cross.svg" alt="cross" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
