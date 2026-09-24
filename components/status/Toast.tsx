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
      style: "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400 shadow-red-500/10",
      icon: <AlertCircleIcon className="w-4 h-4 text-red-500 shrink-0" />
    },
    success: {
      style: "bg-success/10 border-success/30 text-success shadow-success/10",
      icon: <CheckCircleIcon className="w-4 h-4 text-success shrink-0" />
    },
    warning: {
      style: "bg-secondary/10 border-secondary/30 text-secondary shadow-secondary/10",
      icon: <AlertTriangleIcon className="w-4 h-4 text-secondary shrink-0" />
    },
    info: {
      style: "bg-primary/10 border-primary/30 text-primary shadow-primary/10",
      icon: <InfoIcon className="w-4 h-4 text-primary shrink-0" />
    }
  };

  return (
    <div
      onClick={clearStatus}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4 cursor-pointer group">
      <div
        className={`${styles[status.type].style} flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md border text-xs font-medium tracking-wide max-w-md hover:opacity-90 transition-opacity`}>
        {styles[status.type].icon}
        <span className="truncate">{status.message}</span>
      </div>
    </div>
  );
}
