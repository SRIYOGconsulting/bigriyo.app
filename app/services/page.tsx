import type { Metadata } from "next";
import { SERVICES_DATA } from "@/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Repair Services",
  description: "Browse our complete range of repair services."
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-foreground text-4xl font-extrabold sm:text-5xl">Our Repair Services</h1>
        <p className="text-muted-foreground mt-4 text-xl max-w-2xl mx-auto">
          Professional repair solutions for all your needs across Nepal.
        </p>
      </div>
      <div className="space-y-16">
        {SERVICES_DATA.map((category) => (
          <section key={category.slug} className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <h2 className="text-foreground text-2xl font-bold">
                  <Link href={`/services/${category.slug}`} className="hover:opacity-80 transition-opacity">
                    {category.name}
                  </Link>
                </h2>
                <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
              </div>
              <Link
                href={`/services/${category.slug}`}
                className="flex items-center gap-1 border border-border px-3 py-2 rounded-xl text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors mt-4 sm:mt-0">
                View all ({category.services.length})
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${category.slug}/${service.slug}`}
                  className="bg-background group block p-4 rounded-xl border border-border hover:border-primary transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <span className="bg-muted text-xs font-semibold px-2 py-1 rounded-md text-foreground border border-border">
                      {service.startingPrice}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs line-clamp-2">{service.shortDesc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
