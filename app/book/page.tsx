"use client";

import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";
import { useState } from "react";

const Book = () => {
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

  const availableServices = ["Kitchen", "Computer", "Electrics", "Electronics", "Other"];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleClearForm = () => {
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
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Ribbon name="Booking" showFontSize={false} />
      <div className="max-w-7xl mx-auto min-h-screen py-4 md:py-12 px-4 lg:px-0">
        <div className="bg-card text-card-foreground shadow-md rounded-2xl p-4 md:p-16 border border-border">
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
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="John Doe"
                />
              </div>

              {/* Select Services (Multi-select pill display) */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Select Services <span className="text-failure">*</span>
                </label>
                <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-background border border-border min-h-[46px] items-center">
                  {availableServices.map((service) => {
                    const isSelected = formData.services.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                          isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-border"
                        }`}>
                        {isSelected ? `✓ ${service}` : `+ ${service}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget in NPR */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-1">
                  Budget in NPR <span className="text-failure">*</span>
                </label>
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
                  value={formData.nearestLandmark}
                  onChange={(e) => setFormData({ ...formData, nearestLandmark: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="e.g. Near Bhatbhateni Supermarket"
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
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="98XXXXXXXX"
                />
              </div>

              {/* eMail */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  eMail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="example@domain.com"
                />
              </div>

              {/* Property Type */}
              <div>
                <label htmlFor="propertyType" className="block text-sm font-semibold mb-1">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
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
                  value={formData.selectDate}
                  onChange={(e) => setFormData({ ...formData, selectDate: e.target.value })}
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
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="">Select Time Slot</option>
                  <option value="Morning (08:00 AM - 11:00 AM)">Morning (08:00 AM - 11:00 AM)</option>
                  <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                  <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                </select>
              </div>

              {/* How did you know about us? */}
              <div>
                <label htmlFor="referralSource" className="block text-sm font-semibold mb-1">
                  How did you know about us? <span className="text-failure">*</span>
                </label>
                <select
                  id="referralSource"
                  required
                  value={formData.referralSource}
                  onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media (Facebook/Instagram)">Social Media (Facebook/Instagram)</option>
                  <option value="Friend/Family Referral">Friend/Family Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Referral Phone number */}
              <div>
                <label htmlFor="referralPhone" className="block text-sm font-semibold mb-1">
                  Referral Phone number
                </label>
                <input
                  type="text"
                  id="referralPhone"
                  value={formData.referralPhone}
                  onChange={(e) => setFormData({ ...formData, referralPhone: e.target.value })}
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
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-y"
                  placeholder="Add any specific requirements or notes..."></textarea>
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

export default Book;
