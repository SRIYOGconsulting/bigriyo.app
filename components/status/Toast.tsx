"use client";

import type { StatusType } from "@/types";
import { AlertCircleIcon, CheckCircleIcon, AlertTriangleIcon, InfoIcon } from "lucide-react";
import useStatus from "@/context/Status";

interface StatusStyle {
  style: string;
  icon: React.ReactNode;
}

export default function StatusToast() {
  const { status, clearStatus } = useStatus();

  if (!status) return null;

  const styles: Record<StatusType, StatusStyle> = {
    error: {
      style: "bg-failure/80 border-failure/30 text-failure-foreground shadow-failure/10",
      icon: <AlertCircleIcon className="w-4 h-4 shrink-0" />
    },
    success: {
      style: "bg-success/80 border-success/30 text-success-foreground shadow-success/10",
      icon: <CheckCircleIcon className="w-4 h-4 shrink-0" />
    },
    warning: {
      style: "bg-secondary/80 border-secondary/30 text-secondary-foreground shadow-secondary/10",
      icon: <AlertTriangleIcon className="w-4 h-4 shrink-0" />
    },
    info: {
      style: "bg-primary/80 border-primary/30 text-primary-foreground shadow-primary/10",
      icon: <InfoIcon className="w-4 h-4 shrink-0" />
    }
  };

  return (
    <div
      onClick={clearStatus}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out cursor-pointer hover:opacity-90">
      <div
        className={`${styles[status.type].style} flex items-center gap-2 px-4 py-3 rounded-lg shadow-md backdrop-blur-md border text-xs font-medium tracking-wide max-w-md`}>
        {styles[status.type].icon}
        <span className="truncate">{status.message}</span>
      </div>
    </div>
  );
}
