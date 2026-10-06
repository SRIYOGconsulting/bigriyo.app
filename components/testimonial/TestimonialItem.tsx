import type { Testimonial } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialItem = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card text-card-foreground rounded-2xl text-center p-4 flex flex-col items-center h-full">
      <span className="absolute top-4 left-4 text-3xl text-secondary font-bold">"</span>
      <div className="relative w-48 h-48 rounded-full overflow-hidden shrink-0 mb-2 mt-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 144px, 144px"
        />
      </div>
      <h3 className="font-semibold truncate">{testimonial.name}</h3>
      <p className="text-sm truncate">{testimonial.location}</p>
      <p className="text-foreground leading-relaxed mt-4">{testimonial.testimonial}</p>
    </div>
  );
};

export default TestimonialItem;
