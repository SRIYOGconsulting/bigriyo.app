import type { Service } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md">
      <div className="p-4">
        <div className="relative h-80 w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{service.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{service.shortDesc}</p>
        </div>
      </div>
      <div className="p-4 pt-0 mb-2">
        <Link
          href={`/repair/${service.slug}`}
          className="rounded-lg bg-secondary border border-border px-6 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Browse More
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
