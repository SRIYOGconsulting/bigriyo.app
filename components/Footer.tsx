"use client";

import { footerColumns } from "@/constants/footer";
import NewsLetter from "@/components/NewsLetter";
import Link from "next/link";

interface FootLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FootItemProps {
  heading: string;
  links: FootLink[];
}

function FootItem({ heading, links }: FootItemProps) {
  return (
    <div>
      <h3 className="font-semibold mb-3 text-[16px]">{heading}</h3>
      <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
        {links.map((link, index) => (
          <li key={index} className="py-1 cursor-pointer">
            {link.isExternal ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="hover:text-green-700">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <NewsLetter />
      <footer className="relative footer pt-16 pb-10 z-10">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[45%]">
            <div className="mb-6 text-2xl">
              <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                BIGRIYO
              </Link>
            </div>

            <p className="text-[15px] leading-relaxed mb-4">
              Established on June 14, 2018, Bigriyo, based in Kamalpokhari, Kathmandu, Nepal, is a leading provider of
              professional hygiene and deep cleaning solutions dedicated to delivering healthy, spotless environments
              across the residential, commercial, and hospitality sectors.
            </p>

            <p className="text-[15px] leading-relaxed">
              Our mission is to empower homes and businesses throughout the Valley with reliable, eco-friendly, and
              standardized cleaning services that elevate indoor hygiene, protect property value, and foster safe,
              healthy spaces.
            </p>
          </div>

          {/* RIGHT COLUMNS - Cleanly mapped via FootItem */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">
            {footerColumns.map((col, idx) => (
              <FootItem key={idx} heading={col.heading} links={col.links} />
            ))}
          </div>
        </div>

        {/* SOCIAL + CONTACT SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src="/icons/x.svg" alt="X" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src="/icons/youtube.svg" alt="YouTube" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src="/icons/trello.svg" alt="Trello" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img
                src="/icons/signal.svg"
                alt="Signal"
                className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] cursor-pointer"
              />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src="/icons/discord.svg" alt="Discord" className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img
                src="/icons/viber.svg"
                alt="Viber"
                className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] cursor-pointer"
              />
            </a>
          </div>

          {/* CONTACT BOXES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@sriyog.com"
              className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
              <img src="/icons/email.svg" alt="email" className="h-6 w-6" />
              <span className="text-sm">info@sriyog.com</span>
            </a>

            <a
              href="tel:+977014548068"
              className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
              <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
              <span className="text-sm">+977-01-4548068</span>
            </a>

            <a
              href="https://wa.me/9779852024365"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 rounded-lg px-6 py-3 w-full sm:w-auto">
              <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-6 w-6" />
              <span className="text-sm">+977 98520-24-365</span>
            </a>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="w-full border-t mt-14 mb-6"></div>

        {/* FOOTER BOTTOM */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-12 flex flex-col lg:flex-row justify-center items-center lg:justify-between text-[13px] gap-3 text-center md:text-left font-semibold">
          <p className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
            <span>All Rights Reserved. &copy; 2018-{currentYear}</span>
            <span>BIGRIYO Pvt. Ltd.</span>
          </p>

          <div className="flex gap-4 justify-center md:justify-end font-semibold mt-2 lg:mt-0">
            <Link href="/policy/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/policy/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link href="policy/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
