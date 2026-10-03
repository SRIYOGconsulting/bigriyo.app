import Ribbon from "@/components/ui/Ribbon";
import Link from "next/link";

const Career = () => {
  return (
    <>
      <Ribbon name="Career" showFontSize={false} />
      <div className="flex flex-col gap-1 items-center justify-center min-h-[25vw]">
        For now, You may contact:
        <Link href="mailto:jobs@sriyog.com" className="text-3xl text-primary md:text-foreground hover:text-primary">
          jobs@sriyog.com
        </Link>
      </div>
    </>
  );
};

export default Career;
