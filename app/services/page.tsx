import { SERVICES_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Service Catalog",
  description: "Browse our complete list of home, appliance, IT, and maintenance repair services."
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <p className="mt-2 text-lg text-muted-foreground">
          Select a category to explore specialized repair and maintenance solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((category) => (
          <Link
            key={category.slug}
            href={`/services/${category.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold group-hover:text-primary">{category.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{category.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{category.services.length} services available</span>
                <button className="font-medium border-2 p-2 rounded group-hover:border-primary transition-colors duration-200">
                  Browse
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
