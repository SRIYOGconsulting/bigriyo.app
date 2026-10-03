import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const Payment = () => {
  return (
    <div>
      {/* Page Header */}
      <Ribbon name="Payment" showFontSize={false} />

      {/* Main Payment Section */}
      <div className="max-w-7xl px-4 lg:px-0 py-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ===== Left: Bank Details ===== */}
        <div className=" space-y-3 text-center lg:text-left">
          <Image
            width={600}
            height={800}
            src="/images/payment/image.webp"
            alt="Sriyog Consulting Logo"
            className="w-60 sm:w-56 mb-5 mx-auto lg:mx-0"
          />

          <p className="flex flex-col text-xl">
            <span>Account Name:</span> <span className="font-semibold">Sriyog Consulting Pvt Ltd.</span>
          </p>
          <p className="text-xl">Account number: 00701017502051</p>
          <p className="text-xl">Branch: Kathmandu</p>
          <p className="text-xl">SWIFT CODE: NARBNPKA</p>
          <p className="text-xl">
            URL:{" "}
            <a href="https://www.nabilbank.com" target="_blank" rel="noreferrer" className=" underline">
              www.nabilbank.com
            </a>
          </p>
          <p className="pt-8 text-2xl ">VAT Number: 606683203</p>
        </div>

        {/* ===== Right: QR Code Section ===== */}
        <div className="card flex flex-col justify-center items-center border  rounded-3xl w-full max-w-sm mx-auto shadow-sm">
          <img
            src="/images/payment/image.webp"
            alt="Sriyog Consulting Logo"
            className="w-48 sm:w-60 mb-4 object-contain"
          />
          <Image
            width={600}
            height={800}
            src="/images/payment/image2.webp"
            alt="Payment QR"
            className="w-full h-full rounded-3xl object-contain "
          />

          <div className="text-center  font-semibold space-y-2 text-sm sm:text-base">
            <p className="text-lg sm:text-xl">Sriyog Consulting Pvt Ltd.</p>
            <p>Account No: 00701017502051</p>
            <p>Branch: Kathmandu</p>
            <p>Bank: Nabil Bank Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
