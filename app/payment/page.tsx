import Ribbon from "@/components/ui/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment | BIGRIYO",
  description: "Get to know the payment methods for BIGRIYO."
};

const Payment = () => {
  return (
    <div>
      <Ribbon name="Payment" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 my-16">
        <h3 className="text-2xl md:text-3xl text-center mb-12 md:mb-2">Our Payment Gateway</h3>
        <p className="hidden md:block text-2xl text-muted-foreground text-center mb-24">
          Transfer the payment to our bank account or use the QR code directly.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-12">
            <Image
              width={600}
              height={800}
              src="/payment/1.png"
              alt="Sriyog Consulting Logo"
              className="w-48 md:w-64 mx-auto lg:mx-0"
            />
            <div className="space-y-3 md:text-xl">
              <p>
                Account Name: <span className="font-semibold">Sriyog Consulting Pvt Ltd.</span>
              </p>
              <p>Account Number: 00701017502051</p>
              <p>Branch: Kathmandu</p>
              <p>SWIFT CODE: NARBNPKA</p>
              <p>
                URL:{" "}
                <Link href="https://www.nabilbank.com" target="_blank" rel="noreferrer" className="underline">
                  www.nabilbank.com
                </Link>
              </p>
            </div>
            <p className="text-xl md:text-2xl">VAT Number: 606683203</p>
          </div>
          <Image
            width={400}
            height={700}
            src="/payment/1.webp"
            alt="Payment QR"
            className="bg-card p-4 object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
