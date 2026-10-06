import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
      <Image width={48} height={48} src="/icons/loading.svg" alt="load" className="animate-spin" />
      <p className="mt-4 text-xs font-medium text-muted-foreground tracking-wide uppercase">Loading...</p>
    </div>
  );
}
