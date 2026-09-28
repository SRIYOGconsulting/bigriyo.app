import Ribbon from "@/components/Ribbon";

export default function Notices() {
  return (
    <>
      <Ribbon name="Notices" showFontSize={false} />
      <div className="flex items-center justify-center min-h-[25vw]">
        <p>Coming Soon!</p>
      </div>
    </>
  );
}
