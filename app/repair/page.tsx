import { SERVICES_DATA } from "@/data";
import ServiceSearchBar from "@/components/service/SerachBar";
import ServiceItem from "@/components/service/ServiceItem";
import Image from "next/image";

export const metadata = {
  title: "Our Services | Service Catalog",
  description: "Browse our complete list of home, appliance, IT, and maintenance repair services."
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ServiceSearchBar initialQuery="" />
      <div className="mb-10 mt-12 font-semibold text-center">
        <p className="text-xl">Browse Our Curated Service Catalog</p>
        <p className="text-3xl">Specialized Repair and Maintenance Solutions</p>
      </div>

      <div className="space-y-16">
        {SERVICES_DATA.map((category) => (
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

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
  );
}
