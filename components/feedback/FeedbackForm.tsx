"use client";

import { isEmailInvalid, isNameInvalid, isPhoneNumberInvalid } from "@/utils/validate";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Ribbon from "@/components/ui/Ribbon";
import useStatus from "@/context/Status";
import Image from "next/image";

const SITE_CAPTCHA_KEY = "6LfeSyUsAAAAAHUNk-NbZKDKe6YqXU5WJxh9iscC";

const initialFormData = {
  firstname: "",
  middlename: "",
  lastname: "",
  organization: "",
  designation: "",
  phone: "",
  email: "",
  country: "",
  headshot: null as File | null,
  service: "Website Development",
  message: ""
};

const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormData);

  const { showStatus } = useStatus();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClearForm = () => setFormData(initialFormData);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      showStatus("info", "Please verify you're not a robot!");
      return;
    }

    const errFirstName = isNameInvalid(formData.firstname);
    if (errFirstName) {
      showStatus("error", "Invalid First Name!");
      return;
    }

    const errMiddleName = isNameInvalid(formData.middlename);
    if (errMiddleName) {
      showStatus("error", "Invalid Middle Name!");
      return;
    }

    const errLastName = isNameInvalid(formData.lastname);
    if (errLastName) {
      showStatus("error", "Invalid Last Name!");
      return;
    }

    const errEmail = isEmailInvalid(formData.email);
    if (errEmail) {
      showStatus("error", errEmail);
      return;
    }

    const errPassword = isPhoneNumberInvalid("Nepal (+977)", formData.phone);
    if (errPassword) {
      showStatus("error", errPassword);
      return;
    }

    setLoading(true);
    try {
      showStatus("info", "Thank you for your feedback!");
      handleClearForm();
    } catch (err) {
      console.error("Error submitting form:", err);
      showStatus("error", "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Full-width Ribbon Header */}
      <Ribbon name="Feedback" showFontSize={false} />

      {/* FORM SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-0 my-12 rounded-xl border-border border-2">
        <p className="text-center text-2xl font-bold">Your feedback helps us improve.</p>
        <p className="text-center mb-8 text-xl font-semibold">Please share your experience with our services.</p>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid sm:grid-cols-2 gap-4 p-8">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              First Name <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Madan"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Middle Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Middle Name</label>
            <input
              type="text"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
              placeholder="Laal"
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Last Name <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Tamang"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Country <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Nepal"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Organization */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Organization <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="SRIYOG"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Designation */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Designation <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Manager"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Phone <span className="text-failure">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98XXXXXXXX"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Email <span className="text-failure">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="madan@sriyog.com"
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Headshot */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Headshot <span className="text-failure">*</span>
            </label>
            <input
              type="file"
              name="headshot"
              onChange={(e) => setFormData({ ...formData, headshot: e.target.files ? e.target.files[0] : null })}
              required
              className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label htmlFor="service" className="mb-2 font-medium">
              Service <span className="text-failure">*</span>
            </label>
            <div className="relative h-10.5">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="absolute inset-0 appearance-none w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none">
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                <option value="IT Consultation">IT Consultation</option>
              </select>
              <span className="absolute right-3.5 pointer-events-none top-1/2 -translate-y-1/2 cursor-pointer">
                <Image width={24} height={24} src="/icons/dropdown.svg" alt="dropdown" />
              </span>
            </div>
          </div>

          {/* Feedback Message */}
          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="mb-2 font-medium">
              Feedback <span className="text-failure">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your feedback here..."
              rows={5}
              required
              className="px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-center col-span-2 scale-75">
            <ReCAPTCHA
              sitekey={SITE_CAPTCHA_KEY}
              onChange={(token: string | null) => setCaptchaToken(token)}
              size="normal"
              badge="inline"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 pt-6 border-t border-border flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleClearForm}
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Image width={32} height={32} src="/icons/sync.svg" alt="clear" className="w-4 h-4 mr-2" />
              Clear form
            </button>

            <button
              type="submit"
              disabled={loading || !captchaToken}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-muted">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
