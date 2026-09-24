"use client";

import { useEffect, useState } from "react";

// Font size scale in percentage
const FONT_SIZES = {
  SM: 85, // 85%
  MD: 100, // 100% (Default)
  LG: 115 // 115%
};

const FontSizeChanger = () => {
  const [currentSize, setCurrentSize] = useState<number>(FONT_SIZES.MD);

  // Load saved font size on mount
  useEffect(() => {
    const savedSize = localStorage.getItem("app-font-size");
    if (savedSize) {
      const parsedSize = Number(savedSize);
      setCurrentSize(parsedSize);
      document.documentElement.style.fontSize = `${parsedSize}%`;
    }
  }, []);

  const updateFontSize = (sizePercentage: number) => {
    setCurrentSize(sizePercentage);
    document.documentElement.style.fontSize = `${sizePercentage}%`;
    localStorage.setItem("app-font-size", sizePercentage.toString());
  };

  return (
    <div className="flex items-center space-x-1 bg-teal-900/60 p-1 rounded-md border border-teal-700/50">
      <button
        type="button"
        onClick={() => updateFontSize(FONT_SIZES.SM)}
        aria-label="Smaller font size"
        className={`px-2 py-1 text-xs rounded transition-colors ${
          currentSize === FONT_SIZES.SM
            ? "bg-teal-600 font-bold text-white"
            : "text-teal-200 hover:bg-teal-700/50 hover:text-white"
        }`}>
        A-
      </button>

      <button
        type="button"
        onClick={() => updateFontSize(FONT_SIZES.MD)}
        aria-label="Reset font size"
        className={`px-2 py-1 text-sm rounded transition-colors ${
          currentSize === FONT_SIZES.MD
            ? "bg-teal-600 font-bold text-white"
            : "text-teal-200 hover:bg-teal-700/50 hover:text-white"
        }`}>
        A
      </button>

      <button
        type="button"
        onClick={() => updateFontSize(FONT_SIZES.LG)}
        aria-label="Larger font size"
        className={`px-2 py-1 text-base rounded transition-colors ${
          currentSize === FONT_SIZES.LG
            ? "bg-teal-600 font-bold text-white"
            : "text-teal-200 hover:bg-teal-700/50 hover:text-white"
        }`}>
        A+
      </button>
    </div>
  );
};

export default FontSizeChanger;
