import Ribbon from "@/components/ui/Ribbon";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <>
      <Ribbon name="Our Services" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0">{children}</div>
    </>
  );
};

export default ServiceLayout;
