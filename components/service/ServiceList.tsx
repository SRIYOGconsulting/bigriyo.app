"use client";

import { useState } from "react";
import ServiceItem from "@/components/service/ServiceItem";
import type { Service } from "@/types";

interface ServiceListProps {
  services: Service[];
}

const BATCH_SIZE = 6;

const CategoryItem: React.FC<ServiceListProps> = ({ services }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleServices = services.slice(0, visibleCount);

  return (
    <div className="space-y-4">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Available Services ({visibleServices.length}/{services.length})
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceItem key={service.slug} service={service} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {visibleCount < services.length ? (
          <button
            onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            Load More
          </button>
        ) : (
          <div className="flex flex-col md:flex-row gap-x-2 gap-y-1 text-sm font-medium text-muted-foreground italic">
            You've reached the end of this category.
            <button
              className="font-bold text-primary md:text-foreground cursor-pointer hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Try Searching?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
