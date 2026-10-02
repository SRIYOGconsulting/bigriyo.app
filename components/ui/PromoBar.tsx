"use client";

import { XIcon } from "lucide-react";
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
          <div className="md:hidden flex gap-1 items-center">
            <span>Dashain & Dipawali Offer!</span>
            <span className="inline-block rounded bg-primary p-0.5 text-xs font-bold tracking-wide text-primary-foreground shadow-sm">
              -10%
            </span>
          </div>
          <span className="hidden md:block">BIGRIYO is currently offering 10% disconnt for Dashain & Dipawali!</span>
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
            className="inline-flex rounded border border-white/30 p-1.5 transition-colors hover:bg-white/10 hover:border-white cursor-pointer">
            <XIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
