import ServiceCategoryItem from "@/components/service/ServiceItem";
import { ArrowRightIcon } from "lucide-react";
import { SERVICES_DATA } from "@/data";
import ServiceSearchBar from "@/components/service/SerachBar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Service Catalog",
  description: "Browse our complete list of home, appliance, IT, and maintenance repair services."
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ServiceSearchBar initialQuery="" />
      <div className="mb-10 mt-12 font-semibold text-center">
        <p className="text-xl">Select a category to explore</p>
        <p className="text-3xl">Specialized Repair and Maintenance Solutions</p>
      </div>

      <div className="space-y-16">
        {SERVICES_DATA.map((category) => (
          <section key={category.slug} className="flex flex-col gap-6">
            <Link
              href={`/services/${category.slug}`}
              className="group relative flex min-h-[280px] items-end overflow-hidden rounded-xl border border-border transition-all hover:shadow-lg md:min-h-[320px]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/15 to-black/10" />

              <div className="relative z-10 w-full p-6 text-white md:p-8">
                <h2 className="text-2xl font-bold transition-colors group-hover:text-primary-foreground md:text-4xl">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-200 line-clamp-2 md:line-clamp-none md:text-base">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {category.services.length} service{category.services.length === 1 ? "" : "s"} available
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-sm transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-md">
                    <span>View all</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured Services
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.slice(0, 6).map((service) => (
                  <ServiceCategoryItem key={service.slug} service={service} category={category.slug} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
