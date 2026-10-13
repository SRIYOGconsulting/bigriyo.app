"use client";

import useStatus from "@/context/Status";
import { isPasswordInvalid } from "@/utils/validate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { showStatus } = useStatus();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const errPassword = isPasswordInvalid(password);
    if (errPassword) {
      showStatus("error", errPassword);
      return;
    }

    if (password !== confirmPassword) {
      showStatus("error", "Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      showStatus("success", "Your password was changed.");
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
        <h3 className="text-2xl md:text-3xl font-bold text-center">Change Password</h3>
        <p className="text-sm md:text-lg font-medium text-muted-foreground">
          Enter a new password. Make sure it's strong and hard to guess.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              New Password <span className="text-failure">*</span>
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
              placeholder="- - - - - - - -"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
              Confirm Password <span className="text-failure">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
              placeholder="- - - - - - - -"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-100">
            Change Password
          </button>
        </form>
      </div>
      <p className="text-xs md:text-sm hover:text-primary text-center">
        You can change your password only once a week.
      </p>
    </>
  );
};

export default Reset;
