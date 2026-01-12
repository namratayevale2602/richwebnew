import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Demo() {
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
      const base_url = import.meta.env.VITE_API_URL + "demo-form-submit";
      const response = await fetch(base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

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
    }
  };

  return (
    <div className="min-h-screen bg-white mt-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                GET PERSONAL SERVICE AND EXPERT SUPPORT
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
                Schedule A Free Demo
              </h1>
            </div>

            <div className="w-20 h-1 bg-gray-300 mx-auto lg:mx-0 mb-6"></div>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Schedule A Free Demo
              </h2>

              {/* Alerts */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Form submitted successfully!
                </div>
              )}
              {danger && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  There is technical error!
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <span className="text-red-500 text-sm mt-1">
                      Full Name is required
                    </span>
                  )}
                </div>

                {/* Email and Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1">
                        Valid Email is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register("mobile", {
                        required: true,
                        pattern: /^[7-9]\d{9}$/i,
                        maxLength: 10,
                      })}
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm mt-1">
                        Valid Mobile Number is required
                      </span>
                    )}
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register("company", { required: true })}
                  />
                  {errors.company && (
                    <span className="text-red-500 text-sm mt-1">
                      Company Name is required
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Message Here"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    {...register("message")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
