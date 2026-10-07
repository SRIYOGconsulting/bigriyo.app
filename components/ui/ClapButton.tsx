"use client";

import { useState } from "react";
import Image from "next/image";

const MAX_CLAPS = 50;

const ClapButton = () => {
  const [clapCount, setClapCount] = useState(0);
  const [totalClaps, setTotalClaps] = useState(250);
  const [isClicked, setIsClicked] = useState(false);

  const handleClap = () => {
    if (clapCount >= MAX_CLAPS) return;

    setClapCount(clapCount + 1);
    setTotalClaps(totalClaps + 1);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleClap}
        disabled={clapCount === MAX_CLAPS}
        className={`flex items-center justify-center rounded-full cursor-pointer p-2 transition-transform shrink-0 bg-primary-foreground shadow-md disabled:cursor-not-allowed disabled:opacity-50 ${
          isClicked ? "scale-[1.15]" : "scale-100"
        }`}>
        <Image
          width={24}
          height={24}
          src="/icons/clap.svg"
          alt="clap button"
          className="w-8 h-8 object-contain shrink-0"
        />
      </button>
      <div className="text-lg font-semibold">{totalClaps}</div>
    </div>
  );
};

export default ClapButton;
