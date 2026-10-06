"use client";

import { useEffect, useState } from "react";
import useCookie from "@/context/Cookie";
import Image from "next/image";
import Link from "next/link";

const Sidekick = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);
  const { visible } = useCookie();

  useEffect(() => {
    const handleScroll = () => setShowBackToTopBtn(window.scrollY > 0);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`fixed right-2 z-20 flex flex-col items-center ${visible ? "bottom-48" : "bottom-12"}`}>
      {/* Phone Icon */}
      <Link
        href="tel:+9779852024365"
        className="relative group cursor-pointer bg-secondary p-3 rounded-full animate-phone-ring">
        <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-75 animate-ping transition pointer-events-none" />
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="relative z-10 transition-transform duration-200"
          fill="#ebebeb"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
            fill="#ebebeb"
          />
        </svg>
      </Link>

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/9779852024365"
        className="cursor-pointer bg-secondary p-3 rounded-full animate-bounce mt-6 mb-2">
        <svg width="28" height="28" viewBox="0 0 277 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.147 135.004C32.147 74.647 81.0757 25.7183 141.432 25.7183C201.789 25.7183 250.718 74.647 250.718 135.004C250.718 195.36 201.789 244.289 141.432 244.289C119.933 244.289 99.92 238.095 83.0349 227.396C79.8925 225.406 76.0419 224.874 72.4774 225.937L35.4599 236.985L49.3975 204.372C51.0449 200.517 50.7097 196.102 48.4993 192.541C38.1343 175.838 32.147 156.14 32.147 135.004ZM141.432 0.00402832C66.8742 0.00402832 6.43274 60.4455 6.43274 135.004C6.43274 158.636 12.516 180.882 23.2065 200.224L1.03854 252.093C-0.92117 256.68 -0.0525181 261.984 3.26732 265.705C6.58715 269.427 11.7594 270.893 16.538 269.466L74.3876 252.203C94.1495 263.53 117.051 270.003 141.432 270.003C215.991 270.003 276.432 209.562 276.432 135.004C276.432 60.4455 215.991 0.00402832 141.432 0.00402832ZM170.907 163.063L154.01 174.965C146.097 170.457 137.347 164.165 128.571 155.389C119.448 146.265 112.684 136.846 107.697 128.206L118.435 119.092C123.043 115.181 124.304 108.587 121.465 103.25L107.783 77.536C105.941 74.0735 102.619 71.6413 98.7614 70.9308C94.904 70.2205 90.9334 71.3096 87.9783 73.8886L83.9218 77.4289C74.1667 85.9428 68.3973 99.9334 73.179 114.099C78.1363 128.785 88.7158 151.898 110.389 173.571C133.706 196.889 157.392 206.071 171.243 209.638C182.403 212.51 192.963 208.66 200.405 202.596L208.01 196.399C211.263 193.749 213.018 189.677 212.712 185.492C212.405 181.307 210.075 177.535 206.47 175.387L184.892 162.53C180.533 159.934 175.056 160.142 170.907 163.063Z"
            fill="#ebebeb"
            stroke="#666666"
            strokeWidth="0.008"
          />
        </svg>
      </Link>

      {showBackToTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="cursor-pointer bg-secondary/80 p-3 rounded-full">
          <Image width={24} height={24} src="/icons/next-arrow.svg" alt="back-to-top" className="-rotate-90" />
        </button>
      )}
    </div>
  );
};

export default Sidekick;
