import { SERVICES_DATA } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ServiceCategoryProps {
  params: Promise<{ category: string }>;
}

export default async function ServiceCategoryPage({ params }: ServiceCategoryProps) {
  const { category: categorySlug } = await params;
  const category = SERVICES_DATA.find((c) => c.slug === categorySlug);

  if (!category) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-muted-foreground text-sm flex mb-6">
        <Link href="/services" className="hover:text-foreground transition-colors">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">{category.name}</span>
      </nav>

      <div className="bg-card rounded-2xl p-8 mb-12 border border-border">
        <h1 className="text-foreground text-3xl sm:text-4xl font-extrabold mb-3">{category.name} Services</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service) => (
          <div
            key={service.slug}
            className="bg-card flex flex-col justify-between border border-border rounded-2xl p-6 transition-all hover:border-primary/50">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-foreground text-xl font-bold">{service.name}</h2>
                <span className="bg-muted text-xs font-semibold px-2.5 py-1 text-foreground rounded-lg border border-border">
                  {service.startingPrice}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{service.shortDesc}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/services/${category.slug}/${service.slug}`}
              className="mt-auto block text-center w-full bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-xl hover:opacity-90 transition-all text-sm shadow-sm">
              Book Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
