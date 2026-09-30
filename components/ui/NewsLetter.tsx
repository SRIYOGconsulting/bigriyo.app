"use client";

import { useEffect, useRef } from "react";

const NewsLetter = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = formRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";
    script.async = true;
    script.setAttribute("data-button-color", "#235f5a");
    script.setAttribute("data-button-text-color", "#f5f7f9");
    script.setAttribute("data-site", "https://biratinfo.com/");
    script.setAttribute("data-locale", "en");
    container.appendChild(script);
  }, []);

  return (
    <section className="bg-secondary text-secondary-foreground py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        <h2 className="font-semibold italic text-3xl sm:text-4xl text-left">Join our Newsletter</h2>
        <div ref={formRef} className="w-full max-w-[440px] min-h-[58px]" />
      </div>
    </section>
  );
};

export default NewsLetter;
