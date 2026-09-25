import { SearchIcon, WrenchIcon } from "lucide-react";
import { SERVICES_DATA } from "@/data";
import ServiceCategoryItem from "@/components/service/ServiceItem";

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const rawQuery = resolvedParams.query || "";
  const query = rawQuery.trim().toLowerCase();

  const results = SERVICES_DATA.flatMap((category) => {
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
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {!query ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300">
            <SearchIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-slate-800">Try searching for a service</h3>
            <p className="text-slate-500 text-sm mt-1">
              Enter a keyword in the search bar to explore our available services.
            </p>
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
              <ServiceCategoryItem key={service.slug} category={service.categorySlug} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
