"use client";

import { qrCardData } from "@/constants";
import Ribbon from "@/components/Ribbon";

function Qr() {
  return (
    <div>
      {/* Page Header */}
      <Ribbon name="QR Codes" showFontSize={false} />

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-8">
          {qrCardData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-lg border border-gray-200 overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className=" flex flex-col ">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain mb-4 border border-gray-200 rounded-t-md "
                  />
                )}
                <h3 className="text-2xl font-semibold px-4 mb-2">{card.title}</h3>
                <p className=" text-sm px-4 pb-4 pt-3">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Qr;
