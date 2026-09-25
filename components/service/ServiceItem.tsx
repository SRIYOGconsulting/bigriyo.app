import type { ServiceItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ServiceCategoryItemProps {
  category: string;
  service: ServiceItem;
}

export default function ServiceCategoryItem({ category, service }: ServiceCategoryItemProps) {
  return (
    <Link
      key={service.slug}
      href={`/services/${category}/${service.slug}`}
      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md">
      <div>
        <div className="relative h-44 w-full bg-muted">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold group-hover:text-primary">{service.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{service.shortDesc}</p>
        </div>
      </div>
    </Link>
  );
}
