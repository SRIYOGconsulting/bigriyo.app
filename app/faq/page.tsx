"use client";

import { useState } from "react";
import { faqs } from "@/data";
import Ribbon from "@/components/ui/Ribbon";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      {/* Ribbon/Header */}
      <Ribbon name="FAQ" showFontSize={true} />

      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="rounded-md overflow-hidden group border-none">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between card text2 items-center py-5 px-6 transition">
              <h2 className="text-md font-semibold text-left">{faq.question}</h2>
              <span className="text-2xl font-bold flex-shrink-0 ml-4">
                {openIndex === faq.id ? (
                  <div className="w-[15px] cursor-pointer h-0.5 rounded-full bg-black"></div>
                ) : (
                  <img src="/icons/plus.svg" className="w-[19px] cursor-pointer h-[19px]" alt="Expand" />
                )}
              </span>
            </button>

            <div
              className={`transition-all card2 duration-300 cursor-pointer ease-in-out ${
                openIndex === faq.id ? "max-h-96 opacity-100 translate-y-0 p-6" : "max-h-0 opacity-0"
              } overflow-hidden`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
