"use client";

import type { StatusItem, StatusType } from "@/types/status";
import { createContext, useContext, useState, useRef, type ReactNode } from "react";

interface StatusContextType {
  status: StatusItem | null;
  showStatus: (type: StatusType, message: string) => void;
  clearStatus: () => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

interface StatusProviderProps {
  children: ReactNode;
}

export function StatusProvider({ children }: StatusProviderProps) {
  const [status, setStatus] = useState<StatusItem | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearStatus = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setStatus(null);
  };

  const showStatus = (type: StatusType, message: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const id = crypto.randomUUID();
    setStatus({ id, type, message });

    timerRef.current = setTimeout(() => {
      setStatus((prev) => (prev?.id === id ? null : prev));
      timerRef.current = null;
    }, 2500);
  };

  return <StatusContext.Provider value={{ status, showStatus, clearStatus }}>{children}</StatusContext.Provider>;
}

export default function useStatus() {
  const context = useContext(StatusContext);
  if (!context) throw new Error("Error: StatusContext was used outside StatusProvider!");
  return context;
}
