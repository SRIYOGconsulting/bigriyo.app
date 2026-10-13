"use client";

import useStatus from "@/context/Status";
import { isCodeInvalid } from "@/utils/validate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Verify = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { showStatus } = useStatus();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const errCode = isCodeInvalid(code);
    if (errCode) {
      showStatus("error", errCode);
      return;
    }

    setLoading(true);
    try {
      router.push("/reset");
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
        <h3 className="text-2xl md:text-3xl font-bold text-center">Verify Code</h3>
        <p className="text-sm md:text-lg font-medium text-muted-foreground">
          Enter the 6-digit verification code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label htmlFor="code" className="block text-sm font-semibold mb-2">
              Code <span className="text-failure">*</span>
            </label>
            <input
              type="password"
              name="code"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
              placeholder="0 0 0 0 0 0"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
              Resend Code
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-100">
              Verify
            </button>
          </div>
        </form>
      </div>
      <p className="text-xs md:text-sm hover:text-primary text-center">Didn't receive any code? Contact Support.</p>
    </>
  );
};

export default Verify;
