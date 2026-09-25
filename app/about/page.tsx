"use client";

import Ribbon from "@/components/Ribbon";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Ribbon name="About Us" showFontSize={true} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Image on mobile */}
          <div className="md:hidden overflow-hidden px-5 sm:px-0">
            <Image
              src="/about/1.png"
              alt="Repair Center Workshop"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Left side - Text content */}
          <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed">
            <p className="content-text">
              Established on June 14, 2018, BIGRIYO, based in Kathmandu, Nepal, is a premier multi-brand repair and
              maintenance hub dedicated to delivering expert hardware and electronic repair services. Our mission is to
              provide households and businesses across the Valley with fast, reliable, and transparent repair solutions
              that extend the lifespan of essential devices and equipment.
            </p>

            <p className="content-text">
              At Kathmandu Repair Center, we believe that precision workmanship and genuine components are key to
              restoring optimal performance. Our team of certified technician specialists delivers end-to-end
              diagnostics and repairs across laptops, smartphones, home appliances, and commercial electronic
              systems—each service tailored to meet strict quality and safety standards.
            </p>

            <p className="content-text">
              By utilizing advanced diagnostic tools and state-of-the-art testing equipment, we eliminate technical
              downtime and ensure lasting repairs. We specialize in component-level micro-soldering, motherboard
              architecture troubleshooting, screen replacements, and preventive maintenance across leading global
              brands.
            </p>

            <p className="content-text">
              Our offerings include express same-day repair services, doorstep pickup and delivery within Kathmandu,
              transparent pricing models, and comprehensive service warranties on all genuine replacement parts.
            </p>

            <p className="content-text">
              Whether you need urgent emergency repairs or routine system overhauls, our specialized technicians deliver
              trustworthy, high-quality service engineered to keep your technology running seamlessly.
            </p>
          </div>

          {/* Right side - Images (Desktop only) */}
          <div className="hidden md:block md:w-1/3 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <img src="/about/1.png" alt="Kathmandu Repair Center Workshop" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
