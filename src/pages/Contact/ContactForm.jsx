import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Mock API call - replace with your actual API endpoint
      const base_url = import.meta.env.VITE_API_URL + "form-submit";

      // For demo purposes, we'll simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful submission
      const result = { status: true }; // Change this based on actual API response

      if (result.status === true) {
        setSuccess(true);
        setDanger(false);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        setDanger(true);
        setSuccess(false);
        setTimeout(() => setDanger(false), 2000);
      }

      reset();
    } catch (error) {
      console.error("Error:", error);
      setDanger(true);
      setTimeout(() => setDanger(false), 2000);
    }
  };

  return (
    <div>
      {/* Success Alert */}
      {success && (
        <div className="mb-6">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Form submitted successfully!
          </div>
        </div>
      )}

      {/* Error Alert */}
      {danger && (
        <div className="mb-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            There was a technical error! Please try again.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="mt-1 text-red-500 text-sm">
                Full Name is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <span className="mt-1 text-red-500 text-sm">
                Company Name is required
              </span>
            )}
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Email *
            </label>
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span className="mt-1 text-red-500 text-sm">
                Valid Email is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number *
            </label>
            <input
              type="tel"
              placeholder="10 Digit Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("mobile", {
                required: true,
                pattern: /^[7-9]\d{9}$/i,
                maxLength: 10,
              })}
            />
            {errors.mobile && (
              <span className="mt-1 text-red-500 text-sm">
                Valid Mobile Number is required
              </span>
            )}
          </div>
        </div>

        {/* Country and City Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("country")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("city")}
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Products
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="default"
            {...register("product")}
          >
            <option disabled value="default">
              Select a Product
            </option>
            <option value="bulk-sms">Bulk SMS</option>
            <option value="web-dev">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            placeholder="Message Here"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("message")}
          ></textarea>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            {...register("agreement")}
          />
          <span className="text-sm text-gray-600">
            By clicking this, you agree to disclose your personal information to
            Rich System Solution for contacting you via mail or text for further
            assistance.
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
