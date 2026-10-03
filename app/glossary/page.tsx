"use client";

import { glossaryList } from "@/data";
import { useState } from "react";
import Ribbon from "@/components/ui/Ribbon";

const ALPHABET_LIST = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Glossary = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");

  const filteredTerms = glossaryList[selectedLetter] || [];

  return (
    <>
      <Ribbon name="Glossary" showFontSize={true} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {ALPHABET_LIST.map((letter) => {
            const isActive = selectedLetter === letter;
            const hasTerms = Boolean(glossaryList[letter]?.length);

            return (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                disabled={!hasTerms}
                className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded transition-all ${
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : hasTerms
                      ? "bg-transparent hover:bg-secondary/50"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}>
                {letter}
              </button>
            );
          })}
        </div>

        <hr className="my-6 border-border" />

        {/* Content Section */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map((item) => (
              <div
                key={item.title}
                className="footer border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted">No terms available for letter "{selectedLetter}".</div>
        )}
      </div>
    </>
  );
};

export default Glossary;
