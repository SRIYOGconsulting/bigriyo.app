import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
import ServiceCategoryItem from "@/components/service/ServiceItem";

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
    <div className="container mx-auto px-4 pb-12">
      <div className="relative left-[50%] right-[50%] -mx-[50vw] mb-12 w-screen min-h-[360px] flex items-end overflow-hidden bg-muted">
        <Image src={category.image} alt={category.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="relative z-10 container max-w-7xl mx-auto px-4 pb-10 md:py-14 text-white">
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
          <ServiceCategoryItem key={service.slug} service={service} category={category.slug} />
        ))}
      </div>
    </div>
  );
}
