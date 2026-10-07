"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="rounded-full bg-muted p-8 mb-4">
        <Image width={64} height={64} src="/icons/error.svg" alt="error" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        We encountered an error loading this section. Please try reloading.
      </p>
      <div className="mt-6">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          <Image width={24} height={24} src="/icons/sync.svg" alt="error" className="w-4 h-4" />
          Refresh Try Again
        </button>
      </div>
    </main>
  );
}
