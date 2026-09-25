import Ribbon from "@/components/Ribbon";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <>
      <Ribbon name="Our Services" showFontSize={false} />
      <div className="max-w-7xl mx-auto">{children}</div>
    </>
  );
}
