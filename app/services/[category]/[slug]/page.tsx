import { notFound } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { SERVICES_DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
import BookButton from "@/components/service/BookBtn";

interface ServicePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const paths: { category: string; slug: string }[] = [];

  SERVICES_DATA.forEach((categoryItem) => {
    categoryItem.services.forEach((serviceItem) => {
      paths.push({
        category: categoryItem.slug,
        slug: serviceItem.slug
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { category: categorySlug, slug: serviceSlug } = await params;
  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Service Details`,
    description: service.shortDesc
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category: categorySlug, slug: serviceSlug } = await params;
  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);

  if (!category || !service) {
    notFound();
  }

  return (
    <main className="pb-16">
      <div className="relative min-h-[420px] w-full flex items-end overflow-hidden bg-muted">
        <Image src={service.image} alt={service.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 py-12 text-white">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href={`/services/${category.slug}`} className="hover:text-white transition-colors">
              {category.name}
            </Link>
            <span>/</span>
            <span className="font-medium text-white">{service.name}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl drop-shadow-sm">{service.name}</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200 drop-shadow-sm">{service.shortDesc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <BookButton type="info" message="Coming Soon!" />
              <Link
                href={`/services/${category.slug}`}
                className="rounded-lg border border-white/30 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                Explore More in {category.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-10">
        <div className="max-w-4xl">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Service Description</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.description}</p>
          </section>
          <hr className="my-8 border-border" />
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Key Features Included</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 rounded-full border bg-primary/10 border-border bg-card p-4 text-sm font-medium shadow-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
