"use client";

import { contactBoxLinks, footerColumns, footSocialLinks } from "@/constants";
import NewsLetter from "@/components/ui/NewsLetter";
import Image from "next/image";
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
              <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {link.label}
              </Link>
            ) : (
              <Link href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

function SocialIcon({ alt, src, href }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-6 h-6 transition hover:opacity-60 hover:scale-110 block">
      <Image fill src={src} alt={alt} sizes="(max-width:640px) 20px, 24px" className="object-contain" />
    </Link>
  );
}

interface ContactBoxProps {
  src: string;
  alt: string;
  href: string;
  label: string;
  isExternal?: boolean;
}

function ContactBox({ alt, src, href, label, isExternal }: ContactBoxProps) {
  return isExternal ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
      <Image src={src} alt={alt} width={24} height={24} className="h-6 w-6" />
      <span className="text-sm">{label}</span>
    </Link>
  ) : (
    <Link href={href} className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
      <Image src={src} alt={alt} width={24} height={24} className="h-6 w-6" />
      <span className="text-sm">{label}</span>
    </Link>
  );
}

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <footer className="relative footer pt-16 pb-10 z-10">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="w-full lg:w-[45%]">
            <div className="mb-6 text-2xl">
              <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                BIGRIYO
              </Link>
            </div>
            <p className="text-[15px] leading-relaxed mb-4">
              BIGRIYO is a repairing service aggregator digital platform based in Kamalpokhari, Kathmandu, Nepal,
              connecting customers with professional, reliable, genuine, insured, and vetted repair service providers
              for their homes, offices, businesses, or wherever repair solutions are needed.
            </p>
            <p className="text-[15px] leading-relaxed">
              Our mission is to connect customers with the right service professionals based on their expertise, service
              area, availability, and specific repair requirements. By leveraging technology and AI, BIGRIYO aims to
              make finding and hiring the right repair professional simple, smart, reliable, and efficient while
              creating better opportunities for skilled professionals to serve customers.
            </p>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">
            {footerColumns.map((col, idx) => (
              <FootItem key={idx} heading={col.heading} links={col.links} />
            ))}
          </div>
        </div>

        {/* SOCIAL + CONTACT SECTION */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center items-center">
            {footSocialLinks.map((link, idx) => (
              <SocialIcon key={idx} href={link.href} src={link.src} alt={link.alt} />
            ))}
          </div>

          {/* CONTACT BOXES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {contactBoxLinks.map((link, idx) => (
              <ContactBox key={idx} href={link.href} src={link.src} alt={link.alt} label={link.label} />
            ))}
          </div>
        </section>

        <div className="w-full border-t mt-14 mb-6"></div>

        {/* FOOTER BOTTOM */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-6 lg:mt-12 flex flex-col lg:flex-row justify-center items-center lg:justify-between text-[13px] gap-3 text-center md:text-left font-semibold">
          <p className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
            <span>All Rights Reserved. © 2018-{new Date().getFullYear()}</span>
            <span>BIGRIYO ( A SRIYOG Consulting Initiative )</span>
          </p>

          <div className="flex gap-4 justify-center md:justify-end font-semibold mt-2 lg:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link href="/tos">Terms of Service</Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
