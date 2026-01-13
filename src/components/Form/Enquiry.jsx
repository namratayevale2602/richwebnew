import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Enquiry = () => {
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
      setDanger(true);
      setTimeout(() => setDanger(false), 2000);
    }
  };

  return (
    <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#b8c7e0] leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have a Question or need any assistance?
            </motion.h1>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0bc0df] leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reach Out to us
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[#e5edfc] leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </motion.p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="w-full lg:w-1/2 max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/12 rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Alerts */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="text-green-800 font-medium">
                    Form submitted successfully!
                  </div>
                </motion.div>
              )}

              {danger && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="text-red-800 font-medium">
                    There is technical error!
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#e5edfc]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-[#e5edfc] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm"
                    >
                      Full Name is required
                    </motion.span>
                  )}
                </div>

                {/* Email and Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#e5edfc]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full px-4 py-3 text-[#e5edfc] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm"
                      >
                        Valid Email is required
                      </motion.span>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#e5edfc]">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="w-full px-4 py-3 text-[#e5edfc] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      {...register("mobile", {
                        required: true,
                        pattern: /^[7-9]\d{9}$/i,
                        maxLength: 10,
                      })}
                    />
                    {errors.mobile && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm"
                      >
                        Valid Mobile Number is required
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#e5edfc]">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 text-[#e5edfc] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    {...register("company", { required: true })}
                  />
                  {errors.company && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm"
                    >
                      Business Name is required
                    </motion.span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#e5edfc]">
                    Message
                  </label>
                  <textarea
                    placeholder="Message Here"
                    rows={4}
                    className="w-full px-4 py-3 text-[#e5edfc] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    {...register("message")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
