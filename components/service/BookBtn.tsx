"use client";

import type { StatusType } from "@/types";
import useStatus from "@/context/Status";

interface BookButtonProps {
  type: StatusType;
  message: string;
}

export default function BookButton({ type, message }: BookButtonProps) {
  const { showStatus } = useStatus();

  return (
    <button
      type="button"
      onClick={() => showStatus(type, message)}
      className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-all text-sm shadow-md cursor-pointer">
      Book This Repair
    </button>
  );
}
