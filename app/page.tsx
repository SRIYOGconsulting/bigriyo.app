import { testimonials } from "@/data/testimonial";
import { blogs, features, partners, serviceList } from "@/data";
import TestimonialItem from "@/components/testimonial/TestimonialItem";
import ServiceItem from "@/components/repair/ServiceItem";
import HeroBackground from "@/components/home/Background";
import BlogItem from "@/components/blog/BlogItem";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[600px] flex flex-col justify-center items-start relative overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto w-full min-h-[600px] flex flex-col justify-center items-start px-4 lg:px-0 py-12 z-10">
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

      <section className="py-8 bg-gray-50 overflow-hidden" aria-label="Partner organizations">
        <div className="flex items-center gap-x-12 w-full animate-scroll">
          {partners.map((partner) => (
            <div key={partner.id} className="relative h-12 w-35 shrink-0">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="140px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/30">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-12">Why Us?</h2>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-4 bg-card text-card-foreground border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="bg-secondary/80 p-3 sm:p-4 rounded-2xl mb-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 md:py-24 px-4 lg:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-12">Top Services</h2>
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

      <section className="py-12 md:py-24 bg-muted/30">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-12">Happy Stories</h2>
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

      <section className="max-w-7xl mx-auto py-12 md:py-24 px-4 lg:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-12">Latest Blogs</h2>
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
