import type { Metadata } from "next";
import { serviceList } from "@/data";
import ServiceSearchBar from "@/components/repair/SerachBar";
import ServiceItem from "@/components/repair/ServiceItem";
import Image from "next/image";
import { WrenchIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Service Catalog",
  description: "Browse our complete list of home, appliance, IT, and maintenance repair services."
};

interface ServicesPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Services({ searchParams }: ServicesPageProps) {
  const resolvedParams = await searchParams;
  const rawQuery = resolvedParams.query || "";
  const query = rawQuery.trim().toLowerCase();

  const results = serviceList.flatMap((category) => {
    const matchedServices = category.services.filter((service) => {
      return (
        service.name.toLowerCase().includes(query) ||
        service.shortDesc.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query) ||
        service.features.some((feature) => feature.toLowerCase().includes(query))
      );
    });

    return matchedServices.map((service) => ({
      ...service,
      categorySlug: category.slug
    }));
  });

  return (
    <div className="py-10">
      <ServiceSearchBar initialQuery={query} />
      <div className="max-w-7xl mx-auto space-y-8 mt-12">
        {!query ? (
          <div className="container mx-auto px-4 py-12">
            <div className="hidden md:block mb-10 mt-12 font-semibold text-center">
              <p className="text-xl text-muted-foreground">Browse Our Curated Service Catalog</p>
              <p className="text-3xl">Specialized Repair and Maintenance Solutions</p>
            </div>
            <div className="space-y-16 mt-8 md:mt-0">
              {serviceList.map((category) => (
                <section key={category.slug} className="flex flex-col gap-6">
                  <div className="group relative flex min-h-[280px] items-end overflow-hidden rounded-xl border border-border transition-all hover:shadow-lg md:min-h-[320px]">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/30" />

                    <div className="relative z-10 w-full p-6 text-white md:p-8">
                      <h2 className="text-2xl font-bold transition-colors group-hover:text-primary-foreground md:text-4xl">
                        {category.name}
                      </h2>
                      <p className="mt-2 mb-6 max-w-2xl text-sm text-gray-200 line-clamp-2 md:line-clamp-none md:text-base">
                        {category.description}
                      </p>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                        {category.services.length} service{category.services.length === 1 ? "" : "s"} available
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Available Services
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <ServiceItem key={service.slug} service={service} />
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300">
            <WrenchIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-slate-800">No services found</h3>
            <p className="text-slate-500 text-sm mt-1">
              We couldn't find anything matching "{rawQuery}" Try checking for spelling errors or searching a broader
              term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((service) => (
              <ServiceItem key={service.slug} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
