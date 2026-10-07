"use client";

import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="- - - - - - - -"
          />
        </div>

        <div className="flex flex-col gap-2 items-center mt-4">
          <button
            type="submit"
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
