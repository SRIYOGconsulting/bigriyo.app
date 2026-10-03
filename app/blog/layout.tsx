import Ribbon from "@/components/ui/Ribbon";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Ribbon name="Our Blogs" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0">{children}</div>
    </>
  );
};

export default ServiceLayout;
