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
      onClick={() => showStatus(type, message)}
      className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90">
      Book Appointment
    </button>
  );
}
