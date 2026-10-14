import GalleryClient from "@/components/gallery/GalleryClient";
import Ribbon from "@/components/ui/Ribbon";

export const metadata = {
  title: "Our Gallery | BIGRIYO",
  description: "Explore our featured, all-time favorite, and latest services."
};

const Gallery = () => {
  return (
    <>
      <Ribbon name="Gallery" showFontSize={false} />
      <GalleryClient />
    </>
  );
};

export default Gallery;
