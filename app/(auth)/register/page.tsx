"use client";

import { isEmailInvalid, isNameInvalid, isPasswordInvalid } from "@/utils/validate";
import { useState } from "react";
import Link from "next/link";
import useStatus from "@/context/Status";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { showStatus } = useStatus();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const errName = isNameInvalid(formData.fullName);
    if (errName) {
      showStatus("error", errName);
      return;
    }

    const errEmail = isEmailInvalid(formData.email);
    if (errEmail) {
      showStatus("error", errEmail);
      return;
    }

    const errPassword = isPasswordInvalid(formData.password);
    if (errPassword) {
      showStatus("error", errPassword);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showStatus("error", "Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      showStatus("info", "Coming Soon!");
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-3xl font-bold text-center">Register</h3>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 w-full">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold mb-1">
            Full Name <span className="text-failure">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="Madan Tamang"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email <span className="text-failure">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="madan@sriyog.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            Password <span className="text-failure">*</span>
          </label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="- - - - - - - -"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">
            Confirm Password <span className="text-failure">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="- - - - - - - -"
          />
        </div>

        <div className="flex flex-col gap-2 items-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
            Register
          </button>
          <Link href="/login" className="text-xs text-muted-foreground hover:text-primary">
            Already have an account? Login here.
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
