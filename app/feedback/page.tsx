import FeedbackForm from "@/components/feedback/FeedbackForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | BIGRIYO",
  description: "Share your experience with our services."
};

const Feedback = () => {
  return <FeedbackForm />;
};

export default Feedback;
