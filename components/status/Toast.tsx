"use client";

import type { StatusType } from "@/types";
import useStatus from "@/context/Status";

const StatusToast = () => {
  const { status, clearStatus } = useStatus();

  if (!status) return null;

  const styles: Record<StatusType, string> = {
    info: "bg-primary/80 border-primary/30 text-primary-foreground shadow-primary/10",
    error: "bg-failure/80 border-failure/30 text-failure-foreground shadow-failure/10",
    success: "bg-success/80 border-success/30 text-success-foreground shadow-success/10",
    warning: "bg-secondary/80 border-secondary/30 text-secondary-foreground shadow-secondary/10"
  };

  return (
    <div
      onClick={clearStatus}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out cursor-pointer hover:opacity-90">
      <div
        className={`${styles[status.type]} flex items-center gap-2 px-4 py-3 rounded-lg shadow-md backdrop-blur-md border text-xs font-medium tracking-wide max-w-md`}>
        <span className="truncate">{status.message}</span>
      </div>
    </div>
  );
};

export default StatusToast;
