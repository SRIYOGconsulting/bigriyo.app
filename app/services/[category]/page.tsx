import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface ServiceCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((item) => ({
    category: item.slug
  }));
}

export async function generateMetadata({ params }: ServiceCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Services`,
    description: category.description
  };
}

export default async function ServiceCategoryPage({ params }: ServiceCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="relative left-[50%] right-[50%] -mx-[50vw] mb-12 w-screen min-h-[360px] flex items-end overflow-hidden bg-muted">
        <Image src={category.image} alt={category.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 py-10 md:py-14 text-white">
          <nav className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="font-medium text-white">{category.name}</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl drop-shadow-sm">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-gray-200 drop-shadow-sm">{category.description}</p>
        </div>
      </div>
      <h2 className="mb-6 text-2xl font-bold">Available Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${category.slug}/${service.slug}`}
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
            <div className="p-5 pt-0">
              <span className="font-medium border-2 p-2 rounded group-hover:border-primary transition-colors duration-200">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
