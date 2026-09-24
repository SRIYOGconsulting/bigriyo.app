import { notFound } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { SERVICES_DATA } from "@/data";
import BookButton from "@/components/service/BookBtn";
import Link from "next/link";

interface ServiceDetailProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { category: categorySlug, slug } = await params;

  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);
  const service = category?.services.find((s) => s.slug === slug);

  if (!category || !service) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-muted-foreground text-sm flex mb-8">
        <Link href="/services" className="hover:text-foreground transition-colors">
          Services
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/services/${category.slug}`} className="hover:text-foreground transition-colors">
          {category.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">{service.name}</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-foreground text-3xl sm:text-4xl font-extrabold mb-4">{service.name}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
          </div>
          <div className="border-t border-border pt-8">
            <h2 className="text-foreground text-xl font-bold mb-4">What's Included?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="bg-card flex items-start gap-3 p-3.5 rounded-xl border border-border">
                  <CheckIcon className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Starting From
              </span>
              <p className="text-3xl font-extrabold text-foreground mt-1">{service.startingPrice}</p>
            </div>
            <BookButton type="info" message="Coming Soon!" />
          </div>
        </div>
      </div>
    </div>
  );
}
