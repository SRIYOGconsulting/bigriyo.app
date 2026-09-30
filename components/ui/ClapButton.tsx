"use client";

import { useState } from "react";

const MAX_CLAPS = 50;

export default function ClapButton() {
  const [clapCount, setClapCount] = useState(0);
  const [totalClaps, setTotalClaps] = useState(250); // Initial total from backend (example)
  const [isClicked, setIsClicked] = useState(false);

  const handleClap = () => {
    if (clapCount >= MAX_CLAPS) return;

    setClapCount(clapCount + 1);
    setTotalClaps(totalClaps + 1);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="text-left">
      <div className="flex items-center gap-2">
        <button
          onClick={handleClap}
          disabled={clapCount === MAX_CLAPS}
          className={`text-[32px] p-[11px] rounded-full cursor-pointer transition-transform duration-200 ease bg-white shadow-md disabled:cursor-not-allowed disabled:opacity-50 ${
            isClicked ? "scale-[1.1]" : "scale-100"
          }`}>
          <img src="/icons/HandsClapping.svg" className="scale-[1.15]" alt="clap button" />
        </button>
        <div className="text-[15px] mt-[5px] font-semibold">{totalClaps.toLocaleString()}</div>
      </div>
    </div>
  );
}
