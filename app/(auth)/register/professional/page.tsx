"use client";

import { isEmailInvalid, isNameInvalid, isPhoneNumberInvalid } from "@/utils/validate";
import { useState } from "react";
import useStatus from "@/context/Status";
import Image from "next/image";
import Link from "next/link";

const ProfessionalRegister = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    workType: "Electical",
    certificate: null as File | null
  });
  const { showStatus } = useStatus();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
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

    const errPhoneNumber = isPhoneNumberInvalid("Nepal (+977)", formData.phone);
    if (errPhoneNumber) {
      showStatus("error", errPhoneNumber);
      return;
    }

    setLoading(true);
    try {
      showStatus("info", "Coming Soon!");
    } catch (err) {
      console.error("Error submitting form:", err);
      showStatus("error", "Something went wrong!");
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
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Phone Number <span className="text-failure">*</span>
          </label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="98XXXXXXXX"
          />
        </div>

        <div>
          <label htmlFor="workType" className="block text-sm font-semibold mb-1">
            Work Type <span className="text-failure">*</span>
          </label>
          <div className="relative h-10.5">
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
              className="absolute inset-0 appearance-none w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none">
              <option value="Electrical">Electrical</option>
              <option value="Electronics">Electronics</option>
              <option value="Computer">Computer</option>
              <option value="Furniture">Furniture</option>
              <option value="Pumbing">Pumbing</option>
              <option value="Others">Others? Specify Below.</option>
            </select>
            <span className="absolute right-3.5 pointer-events-none top-1/2 -translate-y-1/2 cursor-pointer">
              <Image width={24} height={24} src="/icons/dropdown.svg" alt="dropdown" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="certificate" className="block text-sm font-semibold mb-1">
            Certificate <span className="text-failure">*</span>
          </label>
          <input
            type="file"
            name="certificate"
            onChange={(e) => setFormData({ ...formData, certificate: e.target.files ? e.target.files[0] : null })}
            required
            className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        <div className="flex flex-col gap-2 items-center my-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
            Apply for Work
          </button>
          <Link href="/login/professional" className="text-xs text-muted-foreground hover:text-primary">
            Already have an account? Login here.
          </Link>
        </div>
      </form>
      <Link href="/register" className="text-sm hover:text-primary">
        Register as a customer instead?
      </Link>
    </>
  );
};

export default ProfessionalRegister;
