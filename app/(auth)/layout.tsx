import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Ribbon name="Getting Started" showFontSize={false} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 my-12 md:my-24 px-4 lg:px-0">
        <div className="hidden md:flex flex-col justify-between gap-6 shadow-xl rounded-bl-2xl rounded-tl-2xl p-8 lg:p-16 border border-border">
          <div className="font-bold">
            <p className="text-xl">Welcome to</p>
            <h3 className="text-3xl tracking-wide">BIGRIYO Repairing Services</h3>
          </div>
          <div className="relative h-80">
            <Image
              fill
              src="/auth/1.jpg"
              alt="BIGRIYO"
              sizes="(max-width: 1024px) 50vw, 480px"
              className="object-cover rounded-xl"
            />
          </div>
          <div className="text-xl font-semibold">
            <p>Based in Kathmandu providing</p>
            <p>Professional repairing services all over Nepal.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 border border-border shadow-xl rounded-2xl md:rounded-bl-none md:rounded-tl-none p-8 lg:p-16">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
