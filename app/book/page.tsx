"use client";

import { isEmailInvalid, isNameInvalid, isPhoneNumberInvalid } from "@/utils/validate";
import Ribbon from "@/components/ui/Ribbon";
import useStatus from "@/context/Status";
import { serviceList } from "@/data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const BookForm = () => {
  const searchParams = useSearchParams();
  const repairParam = searchParams.get("repair");

  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(serviceList[0]?.slug || "");
  const [formData, setFormData] = useState({
    fullName: "",
    services: [] as string[],
    budget: "",
    city: "Kathmandu",
    nearestLandmark: "",
    phone: "",
    email: "",
    propertyType: "",
    selectDate: "",
    timeSlot: "",
    referralSource: "Google Search",
    referralPhone: "",
    message: ""
  });

  const { showStatus } = useStatus();

  useEffect(() => {
    if (!repairParam) return;

    for (const category of serviceList) {
      const matchedService = category.services.find(
        (service) => service.slug.toLowerCase() === repairParam.toLowerCase()
      );

      if (matchedService) {
        setActiveCategory(category.slug);
        setFormData((prev) => ({
          ...prev,
          services: prev.services.includes(matchedService.name)
            ? prev.services
            : [...prev.services, matchedService.name]
        }));
        break;
      }
    }
  }, [repairParam]);

  const handleServiceToggle = (serviceName: string) =>
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName]
    }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const handleClearForm = () =>
    setFormData({
      fullName: "",
      services: [],
      budget: "",
      city: "Kathmandu",
      nearestLandmark: "",
      phone: "",
      email: "",
      propertyType: "",
      selectDate: "",
      timeSlot: "",
      referralSource: "Google Search",
      referralPhone: "",
      message: ""
    });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      showStatus("error", "Please select at least one service.");
      return;
    }

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
    } finally {
      setLoading(false);
    }
  };

  const currentCategoryData = serviceList.find((cat) => cat.slug === activeCategory);

  return (
    <>
      <Ribbon name="Booking" showFontSize={false} />
      <div className="max-w-7xl mx-auto min-h-screen py-4 md:py-12 px-4 lg:px-0">
        <div className="rounded-2xl p-4 md:p-8 lg:p-16 border border-border">
          {/* Header Section */}
          <div className="mb-6 pb-6 border-b border-border">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-foreground">BIGRIYO Repairing Services</h1>
            <p className="mt-2 text-sm text-muted-foreground">Service Booking Form</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-semibold mb-1">
                  Full Name <span className="text-failure">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Madan Tamang"
                />
              </div>

              {/* Dynamic Categorized Services Selection */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Select Services <span className="text-failure">*</span>
                </label>

                {/* Category Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-3 border-b border-border pb-2">
                  {serviceList.map((cat) => (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        activeCategory === cat.slug
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "bg-muted text-muted-foreground hover:bg-border"
                      }`}>
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Service Pills for Selected Category */}
                <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-background border border-border min-h-[50px] items-center">
                  {currentCategoryData?.services.map((service) => {
                    const isSelected = formData.services.includes(service.name);
                    return (
                      <button
                        key={service.slug}
                        type="button"
                        onClick={() => handleServiceToggle(service.name)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                          isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-border"
                        }`}>
                        {isSelected ? `✓ ${service.name}` : `+ ${service.name}`}
                      </button>
                    );
                  })}
                </div>

                {/* Summary of Selected Items */}
                {formData.services.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground mb-1.5 font-medium">
                      Selected ({formData.services.length}):
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {formData.services.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-muted text-foreground border border-border">
                          {item}
                          <button
                            type="button"
                            onClick={() => handleServiceToggle(item)}
                            className="hover:text-failure font-bold ml-1">
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Budget in NPR */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-1">
                  Budget in NPR <span className="text-failure">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="" disabled>
                    Select Budget Range
                  </option>
                  <option value="NPR 1,000 - 5,000">NPR 1,000 - 5,000</option>
                  <option value="NPR 5,000 - 15,000">NPR 5,000 - 15,000</option>
                  <option value="NPR 15,000 - 30,000">NPR 15,000 - 30,000</option>
                  <option value="NPR 30,000+">NPR 30,000+</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold mb-1">
                  City <span className="text-failure">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Pokhara">Pokhara</option>
                </select>
              </div>

              {/* Nearest Landmark */}
              <div>
                <label htmlFor="nearestLandmark" className="block text-sm font-semibold mb-1">
                  Nearest Landmark
                </label>
                <input
                  type="text"
                  id="nearestLandmark"
                  name="nearestLandmark"
                  value={formData.nearestLandmark}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Near Bhatbhateni Supermarket"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                  Phone <span className="text-failure">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="98XXXXXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="madan@sriyog.com"
                />
              </div>

              {/* Property Type */}
              <div>
                <label htmlFor="propertyType" className="block text-sm font-semibold mb-1">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="">Select Property Type</option>
                  <option value="Residential Home">Residential Home</option>
                  <option value="Apartment / Balcony">Apartment / Balcony</option>
                  <option value="Commercial Office">Commercial Office</option>
                  <option value="Restaurant / Hotel">Restaurant / Hotel</option>
                </select>
              </div>

              {/* Select Date */}
              <div>
                <label htmlFor="selectDate" className="block text-sm font-semibold mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  id="selectDate"
                  name="selectDate"
                  value={formData.selectDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>

              {/* Time Slot Selection */}
              <div>
                <label htmlFor="timeSlot" className="block text-sm font-semibold mb-1">
                  Time Slot Selection
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="">Select Time Slot</option>
                  <option value="Morning (08:00 AM - 11:00 AM)">Morning (08:00 AM - 11:00 AM)</option>
                  <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                  <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                </select>
              </div>

              {/* Referral Source */}
              <div>
                <label htmlFor="referralSource" className="block text-sm font-semibold mb-1">
                  How did you know about us? <span className="text-failure">*</span>
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  required
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media (Facebook/Instagram)">Social Media (Facebook/Instagram)</option>
                  <option value="Friend/Family Referral">Friend/Family Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Referral Phone */}
              <div>
                <label htmlFor="referralPhone" className="block text-sm font-semibold mb-1">
                  Referral Phone number
                </label>
                <input
                  type="text"
                  id="referralPhone"
                  name="referralPhone"
                  value={formData.referralPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Optional"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-y"
                  placeholder="Add any specific requirements or notes..."
                />
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 border-t border-border flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
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
                className="w-full sm:w-auto px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary">
                Submit
              </button>
            </div>
          </form>

          {/* Security / Notice Note */}
          <div className="mt-8 text-xs text-muted-foreground flex items-center justify-between">
            <span>Do not submit passwords through this form.</span>
            <button type="button" className="hover:underline focus:outline-none">
              Report malicious form
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
          Loading booking page...
        </div>
      }>
      <BookForm />
    </Suspense>
  );
}
