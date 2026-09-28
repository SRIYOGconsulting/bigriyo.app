"use client";

import { useState } from "react";
import useStatus from "@/context/Status";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const { showStatus } = useStatus();

  if (!visible) return null;

  return (
    <div className="w-full bg-secondary text-secondary-foreground text-sm font-semibold">
      <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto py-2 px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          Dashain Offer!{" "}
          <span className="hidden md:block">Bigreko Saamaan le Dashain Nabigros! Grab the Offer Now!</span>
          <span className="inline-block rounded bg-primary px-2 py-0.5 text-xs font-bold tracking-wide text-primary-foreground shadow-sm">
            -25%
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => showStatus("info", "Coming Soon!")}
            className="rounded border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold italic text-secondary-foreground transition-colors hover:border-white hover:bg-white/20 active:scale-95 cursor-pointer">
            Check It Out
          </button>
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss banner"
            className="inline-flex rounded border border-white/30 px-2 py-1 text-xs font-medium transition-colors hover:bg-white/10 hover:border-white cursor-pointer">
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
