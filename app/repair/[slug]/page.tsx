import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceList } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

interface PricingCardProps {
  price: number;
  discount: number;
  banner: string;
  description: string;
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

const PricingCard: React.FC<PricingCardProps> = ({ price, discount, banner, description }) => {
  const discountedPrice = Math.round(price - (price * discount) / 100);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
        <div>
          <span className="text-sm text-muted-foreground">Starting From</span>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-3xl font-bold text-foreground">Rs {discountedPrice}</span>
            <span className="text-lg text-muted-foreground line-through">Rs {price}</span>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-3 py-1 text-xs font-semibold">
          {banner}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const ServiceDetails = async ({ params }: ServiceDetailProps) => {
  const { slug: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) notFound();

  return (
    <div className="pb-16 container mx-auto max-w-7xl px-4 lg:px-0">
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
                href={`/book?repair=${service.slug}`}
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
        <div className="flex items-center justify-between gap-2 mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Rating & Reviews</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xl">
              <span>★</span>
              <span>{service.rating}</span>
            </div>
            <span>({service.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.reviews.map((review, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-card-foreground">{review.userName}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
                  {"★".repeat(Math.floor(review.rating))}
                  <span className="text-muted-foreground ml-1">({review.rating}/5)</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PricingCard
            price={service.startingPrice}
            discount={10}
            banner="10% Dashain Tihar Discount"
            description="Celebrate the festive season with us! Enjoy an instant 10% discount on standard service charges for all Dashain and Tihar holiday bookings."
          />
          <PricingCard
            price={service.startingPrice}
            discount={25}
            banner="25% First Booking Discount"
            description="Thank you for choosing BIGRIYO! Enjoy an instant 25% discount on standard service charges for the first booking on any of our repair services."
          />
        </div>
      </section>

      <hr className="my-8 border-border" />

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Key Features Included</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-8 py-4 text-sm font-medium shadow-sm">
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServiceDetails;
