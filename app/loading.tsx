import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center bg-background">
      <LoaderIcon className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-4 text-xs font-medium text-muted-foreground tracking-wide uppercase">Loading...</p>
    </div>
  );
}
