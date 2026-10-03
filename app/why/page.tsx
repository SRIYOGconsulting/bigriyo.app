import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div>
      {/* Header */}
      <Ribbon name="Why Us" showFontSize={false} />

      <div className="max-w-7xl mx-auto py-8 mb-6 flex flex-col gap-20 items-center justify-center px-4 lg:px-0">
        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              We Make Finding Reliable Repair Professionals Simple
            </h1>
            <p className="">
              At BIGRIYO, we’ve built a modern repair aggregator platform that connects customers in Kamalpokhari,
              Kathmandu, and beyond with skilled, verified service professionals. No more searching through unverified
              listings—get the right expert for home, office, or commercial repair needs seamlessly.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/why/1.jpg"
            alt="Skilled Repair Professionals"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
          <div className="space-y-6 max-w-xl text-left">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">Vetted, Insured & Genuine Experts</h1>
            <p className="">
              Your safety and service quality are our top priorities. Every professional on BIGRIYO is thoroughly
              vetted, insured, and evaluated for their specific expertise. Whether it's plumbing, electrical work,
              appliance repair, or specialized maintenance, you receive trustworthy and high-quality service every time.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/why/2.jpg"
            alt="Vetted Repair Experts"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">Smart AI Matching — Effortless Hiring</h1>
            <p className="">
              Our technology-driven platform utilizes Artificial Intelligence (AI) to intelligently match your specific
              repair requirements with service providers based on location, availability, and domain expertise. Finding
              and booking the right help has never been quicker or more transparent.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/why/3.jpg"
            alt="Smart Matching Platform"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
          <div className="space-y-6 max-w-xl text-left">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Empowering Professionals, Serving Communities
            </h1>
            <p className="">
              BIGRIYO isn't just about fixing things—it's about creating sustainable opportunities for skilled
              technicians by connecting them directly with genuine customer demand. We continue to innovate and expand
              across Kathmandu to deliver trusted, efficient, and professional repair experiences.
            </p>
          </div>

          <Image
            height={600}
            width={800}
            src="/why/4.jpg"
            alt="Empowering Service Professionals"
            className="w-full max-w-sm md:max-w-[450px] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
