"use client";

import FontSizeChanger from "@/components/ui/FontSizeChanger";

type RibbonProps = {
  name: string;
  showFontSize: boolean;
};

const Ribbon: React.FC<RibbonProps> = ({ name, showFontSize }) => {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8 md:py-12 px-4 lg:px-0 w-full">
        <h1 className="text-3xl sm:text-4xl">{name}</h1>
        {showFontSize && <FontSizeChanger />}
      </div>
    </div>
  );
};

export default Ribbon;
