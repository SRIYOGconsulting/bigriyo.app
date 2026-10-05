import { testimonials } from "@/data/testimonial";
import { blogs, serviceList } from "@/data";
import TestimonialItem from "@/components/testimonial/TestimonialItem";
import ServiceItem from "@/components/repair/ServiceItem";
import BlogItem from "@/components/blog/BlogItem";
import Image from "next/image";
import Link from "next/link";

const PARTNER_COUNT = 14;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[600px] flex flex-col justify-center items-start relative overflow-hidden">
        {/* Desktop Background Image */}
        <div className="hidden sm:block absolute inset-0 -z-10">
          <Image src="/home/hero/1.jpg" alt="BIGRIYO" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Mobile Background Image */}
        <div className="block sm:hidden absolute inset-0 -z-10">
          <Image
            src="/home/hero/2.jpg"
            alt="BIGRIYO"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto w-full min-h-[600px] flex flex-col justify-center items-start px-6 lg:px-8 py-12 z-10">
          <div className="flex flex-col justify-start text-white w-full sm:w-1/2">
            <div className="text-xl md:text-2xl font-semibold mb-2 opacity-90">Welcome to</div>
            <div className="font-bold text-4xl md:text-5xl mb-4">BIGRIYO!</div>
            <h1 className="text-base md:text-lg max-w-[600px] leading-relaxed opacity-95">
              Professional repairing services in Kathmandu, Nepal.
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 font-semibold">
              <Link
                href="/about"
                className="inline-block border-2 text-white border-white py-2 px-6 rounded-md hover:text-secondary-foreground hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                About
              </Link>

              <Link
                href="/book"
                className="inline-block border-2 text-white border-white py-2 px-6 rounded-md hover:text-secondary-foreground hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <section className="mt-8 md:mt-0 py-8 bg-gray-50 overflow-hidden" aria-label="Partner organizations">
        <div className="flex w-max animate-scroll gap-12 items-center">
          {[...partnerLogos, ...partnerLogos].map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="relative h-10 sm:h-12 w-[120px] sm:w-[140px] shrink-0"
              aria-hidden={i >= PARTNER_COUNT}>
              <Image
                src={`/home/partners/${n}.png`}
                alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
                fill
                sizes="140px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 md:pt-24 md:pb-32 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Top Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceList[1].services.slice(0, 3).map((service) => (
            <ServiceItem key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/repair"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View All Repair Services
          </Link>
        </div>
      </section>

      <section className="py-12 md:pt-24 md:pb-32 bg-muted/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Happy Stories</h2>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/testimonials"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View All Testimonials
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 md:pt-24 md:pb-32 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.slice(0, 3).map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View All Blogs
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
