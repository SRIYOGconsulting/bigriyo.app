"use client";

import { AlertCircleIcon, RefreshCwIcon } from "lucide-react";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <div className="rounded-full bg-muted p-4 mb-4">
        <AlertCircleIcon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        We encountered an error loading this section. Please try reloading.
      </p>
      <div className="mt-6">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          <RefreshCwIcon className="h-4 w-4" />
          Try Again
        </button>
      </div>
    </main>
  );
}
