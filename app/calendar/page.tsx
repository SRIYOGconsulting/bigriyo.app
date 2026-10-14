import { Metadata } from "next";
import CalendarClient from "@/components/calendar/CalendarClient";
import Ribbon from "@/components/ui/Ribbon";

export const metadata: Metadata = {
  title: "Our Calendar | BIGRIYO",
  description: "Get to know important days for the world and BIGRIYO."
};

export default function CalendarPage() {
  return (
    <>
      <Ribbon name="Calendar" showFontSize={false} />
      <div className="max-w-7xl mx-auto my-8 px-4 lg:px-0 transition-colors">
        <CalendarClient />
      </div>
    </>
  );
}
