import ClapButton from "@/components/ui/ClapButton";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Ribbon name="About Us" showFontSize={true} />

      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
          {/* Image on mobile */}
          <div className="md:hidden overflow-hidden">
            <Image
              src="/about/1.png"
              alt="Repair Center Workshop"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Left side - Text content */}
          <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed">
            <p className="content-text">
              BIGRIYO is a professional repairing service aggregator based in Kamalpokhari, Kathmandu, Nepal, connecting
              customers with reliable, skilled, and verified service professionals for a wide range of repair and
              maintenance needs. Whether you need a repair service at your home, office, business, or any other
              location, BIGRIYO helps you find the right professional for the job.
            </p>

            <p className="content-text">
              Our platform is dedicated to providing professional, reliable, genuine, insured, and vetted repair
              services through a smart and technology-driven approach. We connect customers with service professionals
              based on their expertise, service area, availability, and the specific nature of the repair or maintenance
              requirement.
            </p>

            <p className="content-text">
              At BIGRIYO, our mission is to make finding and hiring the right repair professional simple, convenient,
              transparent, and efficient. By leveraging technology and Artificial Intelligence (AI), we aim to
              intelligently match customers with suitable service providers who have the right skills and experience to
              solve their specific problems.
            </p>

            <p className="content-text">
              We are also committed to creating better opportunities for skilled service professionals by connecting
              them with customers who need their expertise. BIGRIYO bridges the gap between customers looking for
              dependable repair solutions and professionals looking for genuine opportunities to serve customers
              efficiently and professionally.
            </p>

            <p className="content-text">
              From home repairs and office maintenance to specialized repair services, BIGRIYO is building a trusted
              digital platform for finding professional repair services in Kathmandu and beyond.
            </p>
          </div>

          {/* Right side - Images (Desktop only) */}
          <div className="hidden md:block md:w-1/3 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <img src="/about/1.png" alt="Kathmandu Repair Center Workshop" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        <ClapButton />
      </div>
    </>
  );
};

export default About;
