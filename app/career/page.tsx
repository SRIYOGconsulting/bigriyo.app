import Ribbon from "@/components/ui/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Career | BIGRIYO",
  description: "Join BIGRIYO for a chance of an excellent career."
};

const Career = () => {
  return (
    <>
      <Ribbon name="Career" showFontSize={false} />
      <div className="max-w-7xl mx-auto my-12 px-4 lg:px-0">
        <section className="my-4">
          <h2 className="text-3xl font-bold mt-8 mb-4">BIGRIYO is hiring!</h2>
          <p className="leading-relaxed">
            Join Nepal's leading repair service aggregator and help us transform how home and business maintenance
            services are delivered. At BIGRIYO, we leverage technology and AI to connect skilled professionals with
            customers across Kathmandu and beyond. If you are passionate about building smart, transparent, and
            impact-driven solutions, we would love to have you on our team.
          </p>

          <div className="relative h-80 md:h-196 mt-6 rounded-lg overflow-hidden shadow-md">
            <Image
              fill
              src="/career/head.jpg"
              alt="BIGRIYO Beginning"
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>
        <section className="my-8 space-y-4">
          <p className="leading-relaxed">
            We are constantly looking for creative, energetic, and goal-oriented individuals who want to make a real
            impact in Nepal's service ecosystem. Whether your background is in technology, operations, customer support,
            or marketing, BIGRIYO offers an inclusive environment where your ideas can drive positive change and
            redefine service reliability.
          </p>
        </section>
        <div className="flex flex-col gap-8 items-center justify-between">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p>Are you looking for job opportunities? You may contact:</p>
            <Link
              href="mailto:jobs@sriyog.com"
              className="text-xl font-bold text-primary md:text-foreground hover:text-primary">
              jobs@sriyog.com
            </Link>
          </div>
          <p>OR</p>
          <div className="flex flex-col items-center justify-center gap-2">
            <p>Are you a skilled technician or service provider?</p>
            <Link
              href="/register/professional"
              className="bg-secondary text-primary font-bold text-sm md:text-base tracking-wide text-secondary-foreground p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              Join BIGRIYO as a professional -&gt;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
