import Ribbon from "@/components/ui/Ribbon";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function ServiceLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <Ribbon name="Our Blogs" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 md:px-8">{children}</div>
    </>
  );
}
