import BookingForm from "@/components/book/BookingForm";
import Ribbon from "@/components/ui/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Booking | BIGRIYO",
  description: "Book any repair services via BIGRIYO."
};

const Book = () => {
  return (
    <>
      <Ribbon name="Booking" showFontSize={false} />
      <div className="max-w-7xl mx-auto min-h-screen py-4 md:py-12 px-4 lg:px-0">
        <div className="rounded-2xl p-4 md:p-8 lg:p-16 border border-border">
          <div className="mb-6 pb-6 border-b border-border">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-foreground">BIGRIYO Repairing Services</h1>
            <p className="mt-2 text-sm text-muted-foreground">Service Booking Form</p>
          </div>
          <BookingForm />
        </div>
      </div>
    </>
  );
};

export default Book;
