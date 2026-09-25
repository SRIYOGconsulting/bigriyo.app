"use client";

import { useState } from "react";
import { faqs } from "@/data";
import Ribbon from "@/components/Ribbon";

export default function Faq() {
  const faq1 = faqs.slice(0, faqs.length / 2);
  const faq2 = faqs.slice(faqs.length / 2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="footer">
      {/* Ribbon/Header */}
      <Ribbon name="Frequently Asked Questions" showFontSize={true} />

      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* FAQ List */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-4">
          <div className="w-full lg:w-1/2 space-y-3">
            {faq1.map((faq) => (
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
          <div className="w-full lg:w-1/2 space-y-3">
            {faq2.map((faq) => (
              <div key={faq.id} className="rounded-md overflow-hidden group border-none">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full card text2 flex justify-between faqsQuestions items-center py-5 px-6 transition">
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
                  className={`card2 transition-all duration-300 ease-in-out ${
                    openIndex === faq.id ? "max-h-96 opacity-100 translate-y-0 p-6" : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
