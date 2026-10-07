"use client";

import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <h3 className="text-3xl font-bold text-center">Login</h3>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 w-full">
        <div className="space-y-8">
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
        </div>

        <div className="flex items-center justify-between text-muted-foreground text-sm mt-8 mb-2 px-4">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="rem_me" />
            <label htmlFor="rem_me" className="hover:text-primary">
              Remember me
            </label>
          </div>
          <div className="hover:text-primary cursor-pointer">Forgot Password?</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
            Log In
          </button>
          <Link href="/register" className="text-xs text-muted-foreground hover:text-primary">
            Don't have an account? Register here.
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
