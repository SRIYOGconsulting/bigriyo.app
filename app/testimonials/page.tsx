import TestimonialItem from "@/components/testimonial/TestimonialItem";
import Ribbon from "@/components/ui/Ribbon";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <>
      <Ribbon name="Testimonials" showFontSize={true} />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <TestimonialItem key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
