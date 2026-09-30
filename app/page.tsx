import { certificates } from "@/constants";
import { SERVICES_DATA } from "@/data";
import ServiceItem from "@/components/service/ServiceItem";
import Image from "next/image";
import Link from "next/link";

const PARTNER_COUNT = 14;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

export default function HomePage() {
  return (
    <>
      <div className="w-full min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
        {/* Desktop background */}
        <div className="hidden sm:block absolute inset-0 -z-10">
          <Image
            src="/home/hero/desktop.jpg"
            alt="BIGRIYO"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Mobile image */}
          <div className="relative block sm:hidden w-full h-[350px]">
            <Image
              src="/home/hero/mobile.jpg"
              alt="BIGRIYO"
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 639px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-start text-foreground md:text-secondary-foreground z-10 w-full sm:w-1/2 mt-4 sm:mt-0 px-4 md:px-8">
            <div className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90">Welcome to</div>
            <div className="font-bold text-3xl md:text-5xl mb-6">Bigriyo!</div>
            <h1 className="text-[18px] max-w-[600px] leading-relaxed opacity-95">
              Professional repair center in Kathmandu, Nepal.
            </h1>

            <div className="mt-8 flex gap-4 font-semibold">
              <Link
                href="/about"
                className="inline-block border-2 text-foreground md:text-secondary-foreground border-current py-2 px-6 rounded-md hover:text-secondary-foreground hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                About
              </Link>

              <Link
                href="/repair/book"
                className="inline-block border-2 text-foreground md:text-secondary-foreground border-current py-2 px-6 rounded-md hover:text-secondary-foreground hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS — homepage only */}
      <section className="mt-8 md:mt-0 py-8 sm:py-10 bg-gray-50 overflow-hidden" aria-label="Partner organizations">
        <div className="flex w-max animate-scroll gap-10 sm:gap-14 items-center">
          {[...partnerLogos, ...partnerLogos].map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="relative h-10 sm:h-12 w-[120px] sm:w-[140px] shrink-0"
              aria-hidden={i >= PARTNER_COUNT}>
              <Image
                src={`/partners/${n}.png`}
                alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
                fill
                sizes="140px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-center py-12 md:pt-24 md:pb-32 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Top Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {SERVICES_DATA[1].services.slice(0, 3).map((service) => (
            <ServiceItem key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/repair"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View More
          </Link>
        </div>
      </section>

      <section className="text-center py-12 md:pt-24 md:pb-32 px-4 md:px-8 bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Happy Stories</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {certificates.slice(0, 3).map((cert, index) => (
            <div
              key={index}
              className="card rounded-lg bg-card shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300">
              <Image
                height={600}
                width={800}
                src={cert.img}
                alt={cert.title}
                className="h-56 object-cover cursor-pointer"
              />
              <div className="px-4 py-5">
                <h2 className="text-lg font-medium ">{cert.title}</h2>
                <p className="text-sm mt-2">Short description about the certificate.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/certificates"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View More
          </Link>
        </div>
      </section>

      <section className="text-center py-12 md:pt-24 md:pb-32 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Blogs</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {certificates.slice(0, 3).map((cert, index) => (
            <div
              key={index}
              className="card rounded-lg bg-card shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300">
              <Image
                height={600}
                width={800}
                src={cert.img}
                alt={cert.title}
                className="h-56 object-cover cursor-pointer"
              />
              <div className="px-4 py-5">
                <h2 className="text-lg font-medium ">{cert.title}</h2>
                <p className="text-sm mt-2">Short description about the certificate.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/about/blogs"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
