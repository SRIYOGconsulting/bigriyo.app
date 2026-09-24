"use client";

import { events } from "@/constants";
import Ribbon from "@/components/Ribbon";

export default function Timeline() {
  return (
    <div>
      {/* Header */}
      <Ribbon name="Timeline" showFontSize={false} />

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-18 bottom-18 transform -translate-x-1/2  w-1 bg-teal-600 rounded-full"></div>

        <div className="space-y-16 mt-24">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0; // alternate

            return (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5  border-2 header rounded-full shadow-md"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 px-6 md:px-0
                                    ${isLeft ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"}`}>
                  <div className=" rounded-xl shadow-lg p-6 border card  hover:shadow-xl transition-all">
                    <span className="text-sm font-semibold ">{event.year}</span>
                    <h3 className="text-xl font-bold mt-1 ">{event.title}</h3>
                    <p className="mt-2  leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-24"></div>
    </div>
  );
}
