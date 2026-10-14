import { faqs } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import FaqList from "@/components/faq/FaqList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | BIGRIYO",
  description: "Browse the frequently asked questions on BIGRIYO."
};

const Faq = () => {
  return (
    <>
      <Ribbon name="FAQ" showFontSize={true} />
      <FaqList faqs={faqs} />
    </>
  );
};

export default Faq;
