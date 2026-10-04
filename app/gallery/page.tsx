import { galleryItems } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <Ribbon name="Gallery" showFontSize={false} />
      <section className="py-12 px-4 lg:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative w-full h-72 rounded-xl overflow-hidden shadow-md cursor-pointer">
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
      </section>
    </>
  );
};

export default Gallery;
