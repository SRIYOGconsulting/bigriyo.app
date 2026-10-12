import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Ribbon name="Getting Started" showFontSize={false} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 my-12 md:my-24 px-4 md:px-24 lg:px-0">
        {/* Brand & Informational Content */}
        <div className="hidden lg:flex flex-col justify-between gap-6 shadow-xl rounded-bl-2xl rounded-tl-2xl p-12 lg:p-16 border border-border">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/logo/logo.png"
              alt="BIGRIYO Logo"
              width={196}
              height={196}
              className="w-16 object-contain"
            />
            <div className="font-bold">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Welcome to</p>
              <h3 className="text-2xl lg:text-3xl tracking-wide">BIGRIYO Repairing Services</h3>
            </div>
          </div>

          <p className="font-semibold leading-relaxed">
            Connecting you with reliable, vetted, and skilled repair professionals across Nepal.
          </p>

          <div className="relative h-72 w-full">
            <Image
              fill
              src="/auth/1.jpg"
              alt="BIGRIYO Repair Services"
              sizes="(max-width: 1024px) 50vw, 480px"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <p className="font-medium">
              Based in Kamalpokhari, Kathmandu, BIGRIYO is a smart, tech-driven platform designed to make hiring repair
              services transparent, efficient, and hassle-free.
            </p>

            <ul className="space-y-2 text-muted-foreground list-disc list-inside text-xs">
              <li>Comprehensive home, office, and commercial solutions.</li>
              <li>Intelligent AI-driven matching for your repair needs.</li>
              <li>Verified and insured service professionals.</li>
            </ul>
          </div>
        </div>

        {/* Auth Form Container */}
        <div className="flex flex-col items-center justify-center gap-8 border border-border shadow-xl rounded-2xl lg:rounded-bl-none lg:rounded-tl-none p-8 md:p-16">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
