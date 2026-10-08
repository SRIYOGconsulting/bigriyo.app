"use client";

import { isEmailInvalid, isNameInvalid, isPhoneNumberInvalid } from "@/utils/validate";
import { countries } from "@/constants";
import { useState } from "react";
import useStatus from "@/context/Status";
import Image from "next/image";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "Nepal (+977)",
    phone: "",
    extension: "",
    topic: "Sales",
    message: ""
  });

  const { showStatus } = useStatus();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "Nepal (+977)",
      phone: "",
      extension: "",
      topic: "Sales",
      message: ""
    });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (isNameInvalid(formData.firstName)) {
      showStatus("error", "Invalid First Name!");
      return;
    }

    if (isNameInvalid(formData.lastName)) {
      showStatus("error", "Invalid Last Name!");
      return;
    }

    const errEmail = isEmailInvalid(formData.email);
    if (errEmail) {
      showStatus("error", errEmail);
      return;
    }

    const errPhoneNumber = isPhoneNumberInvalid(formData.countryCode, formData.phone);
    if (errPhoneNumber) {
      showStatus("error", errPhoneNumber);
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
    <div className="rounded-lg p-8 border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8">
          <img src="/icons/email.svg" alt="email" className="w-full h-full" />
        </div>
        <h2 className="text-2xl font-bold">Send Your Queries</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Madan"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Tamang"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="madan@sriyog.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
          />
          <p className="text-xs text-gray-500 mt-1.5">We'll never share your email with anyone else.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold  mb-2">Country Code</label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none">
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold  mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold  mb-2">Extension</label>
            <input
              type="text"
              name="extension"
              placeholder="Extension"
              value={formData.extension}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold  mb-2">What do you need help with?</label>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none">
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Billing">Billing</option>
            <option value="Complain">Complain</option>
            <option value="Training">Training</option>
            <option value="Internship">Internship</option>
            <option value="Certificates">Certificates</option>
            <option value="Meeting">Meeting</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold  mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2.5 border rounded text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleClearForm}
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
            <Image width={32} height={32} src="/icons/sync.svg" alt="clear" className="w-4 h-4 mr-2" />
            Clear form
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-40 cursor-pointer bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition-colors text-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
