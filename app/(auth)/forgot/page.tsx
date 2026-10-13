"use client";

import useStatus from "@/context/Status";
import { isEmailInvalid } from "@/utils/validate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { showStatus } = useStatus();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const errEmail = isEmailInvalid(email);
    if (errEmail) {
      showStatus("error", errEmail);
      return;
    }

    setLoading(true);
    try {
      router.push("verify");
    } catch (err) {
      console.error("Error submitting form:", err);
      showStatus("error", "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="self-start text-sm font-bold cursor-pointer hover:text-primary"
        onClick={() => router.back()}>
        &lt;- Back to Login
      </button>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Forgot Password</h3>
        <p className="text-sm md:text-lg font-medium text-muted-foreground">
          Enter the email address associated with your account, and we'll send you a verification code.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email <span className="text-failure">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
              placeholder="madan@sriyog.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-100">
            Submit
          </button>
        </form>
      </div>
      <p className="text-xs md:text-sm hover:text-primary text-center">Don't remember email? Contact support.</p>
    </>
  );
};

export default Forgot;
