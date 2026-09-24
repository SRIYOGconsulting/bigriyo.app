import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">404 Error</span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground text-sm">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
