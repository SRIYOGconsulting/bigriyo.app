import type { Metadata } from "next";
import { policies } from "@/constants";
import Ribbon from "@/components/Ribbon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Policies | BIGRIYO",
  description: "Read BIGRIYO's Usage Policy."
};

export default function Policy() {
  return (
    <>
      <Ribbon name="Our Policies" showFontSize={true} />
      <div className="flex items-center justify-center min-h-[25vw] font-semibold text-2">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-card-foreground gap-2">
          {policies.map((policy) => (
            <Link key={policy.href} href={policy.href} className="underline hover:text-primary">
              {policy.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
