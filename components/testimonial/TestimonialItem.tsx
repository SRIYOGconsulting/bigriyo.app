import type { Testimonial } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialItem = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card text-card-foreground rounded-2xl p-5 sm:p-6 border hover:shadow-lg transition duration-300 flex flex-col h-full">
      <span className="text-3xl sm:text-4xl text-secondary font-bold mb-3">&quot;</span>
      <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6 flex-grow">{testimonial.testimonial}</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, 56px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-semibold truncate">{testimonial.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
