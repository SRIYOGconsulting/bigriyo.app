"use client";

import { useEffect, useState } from "react";

type FontSize = "85" | "100" | "115"; // Font size scale in percentage

interface FontSizeBtnProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function FontSizeBtn({ label, isSelected, onClick }: FontSizeBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2 py-1 text-xs rounded transition-colors ${
        isSelected
          ? "bg-primary font-bold text-primary-foreground"
          : "text-muted-foreground hover:text-primary-foreground"
      }`}>
      {label}
    </button>
  );
}

const FontSizeChanger = () => {
  const [currentSize, setCurrentSize] = useState<FontSize>("100");

  // Load saved font size on mount
  useEffect(() => {
    const savedSize = localStorage.getItem("app-font-size") as FontSize;
    if (savedSize) {
      setCurrentSize(savedSize);
      document.documentElement.style.fontSize = `${savedSize}%`;
    }
  }, []);

  const updateFontSize = (size: FontSize) => {
    setCurrentSize(size);
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem("app-font-size", size);
  };

  return (
    <div className="flex items-center space-x-1 bg-muted/80 p-1 rounded-md border border-border">
      <FontSizeBtn label="A-" isSelected={currentSize === "85"} onClick={() => updateFontSize("85")} />
      <FontSizeBtn label="A" isSelected={currentSize === "100"} onClick={() => updateFontSize("100")} />
      <FontSizeBtn label="A+" isSelected={currentSize === "115"} onClick={() => updateFontSize("115")} />
    </div>
  );
};

export default FontSizeChanger;
