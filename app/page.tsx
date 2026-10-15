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
      <div className="w-full min-h-125 md:min-h-150 lg:min-h-200 flex flex-col justify-center items-start relative overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto w-full h-full flex-1 flex flex-col justify-center items-start px-4 lg:px-0 py-20 z-10">
          <div className="flex flex-col justify-start text-white w-full lg:w-4/5 leading-relaxed opacity-95">
            <div className="lg:hidden">
              <p className="text-xl font-semibold mb-2 opacity-90">Welcome to</p>
              <h1 className="font-bold text-4xl mb-4">BIGRIYO!</h1>
              <h3 className="text-xl">Professional repairing services in Kathmandu, Nepal.</h3>
            </div>
            <div className="hidden lg:block">
              <h1 className="font-bold text-4xl mb-4 tracking-widest">BIGRIYO Repairing Services</h1>
              <h3 className="tracking-wider opacity-90">
                Our platform is dedicated to providing professional, reliable, genuine, insured, and vetted repair
                services through a smart and technology-driven approach. We connect customers with service professionals
                based on their expertise, service area, availability, and the specific nature of the repair or
                maintenance requirement.
              </h3>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 font-semibold">
              <Link
                href="/about"
                className="cursor-pointer border-2 py-2 px-6 rounded-md text-secondary-foreground bg-secondary border-secondary hover:bg-transparent hover:border-secondary-foreground transition-all duration-250">
                About Us
              </Link>
              <Link
                href="/book"
                className="cursor-pointer border-2 py-2 px-6 rounded-md text-secondary-foreground bg-secondary border-secondary hover:bg-transparent hover:border-secondary-foreground transition-all duration-250">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </div>

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
            href="/blogs"
            className="rounded-lg bg-secondary border-2 border-border px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90">
            View All Blogs
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/30">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-12">Our Partners</h2>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative group bg-card text-card-foreground border rounded-2xl p-6 overflow-hidden cursor-pointer aspect-square flex items-center justify-center">
              <div className="flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                <Image
                  width={144}
                  height={144}
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  className="object-contain aspect-square mx-auto"
                />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6">
                <span className="text-secondary text-3xl font-bold leading-none mb-1">"</span>
                <p className="text-sm leading-relaxed break-words hyphens-auto max-w-full overflow-y-auto">
                  {partner.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
