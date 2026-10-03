import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { serviceList } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

function getServiceBySlug(slug: string) {
  for (const category of serviceList) {
    const service = category.services.find((s) => s.slug === slug);
    if (service) return service;
  }
  return null;
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  serviceList.forEach((categoryItem) => {
    categoryItem.services.forEach((serviceItem) => {
      paths.push({
        slug: serviceItem.slug
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Service Details`,
    description: service.shortDesc
  };
}

const ServiceDetails = async ({ params }: ServiceDetailProps) => {
  const { slug: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) notFound();

  return (
    <div className="pb-16">
      <div className="relative left-[50%] right-[50%] -mx-[50vw] mb-12 flex min-h-[360px] w-screen items-end overflow-hidden bg-muted">
        <Image src={service.image} alt={service.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-12 lg:px-0">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/repair" className="transition-colors hover:text-primary-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="font-medium text-primary-foreground">{service.name}</span>
          </nav>

          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl md:text-5xl">{service.name}</h1>
            <p className="mt-3 text-base drop-shadow-sm sm:text-lg">{service.shortDesc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/repair/book"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

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
              className="flex items-center gap-3 rounded-full border border-border bg-card p-4 text-sm font-medium shadow-sm">
              <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServiceDetails;
