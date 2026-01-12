import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginService = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Redirect based on selected service
    const redirectUrls = {
      bulk_sms_service: "https://smsjust.com/blank/login.php",
      gsm_sms_service: "https://fastsms.bulkwhatsapp.net/",
      bulk_whatsApp_service: "https://login.digitalsms.biz/signin.php",
      bulk_whatsApp: "http://182.75.84.114/",
      bulk_voice_call_service: "http://103.255.103.28/",
      business_verified_whatsApp: "http://app.infobynitin.com/login",
      bulk_email_service: "http://cp.richsol.com/",
    };

    if (redirectUrls[data.service]) {
      window.location.href = redirectUrls[data.service];
    }
  };

  return (
    <div>
      <div className="flex justify-center py-10 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-[450px] bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 capitalize">
                Choose Your Sign-In Method
              </h2>
              <p className="text-gray-600 mt-2">
                Access with Your Preferred Account
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Service *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  {...register("service", { required: true })}
                >
                  <option value="">Select Service</option>
                  <option value="bulk_sms_service">Bulk SMS Service</option>
                  <option value="gsm_sms_service">GSM SMS Service</option>
                  <option value="bulk_whatsApp_service">
                    Bulk WhatsApp Service
                  </option>
                  <option value="bulk_whatsApp">Bulk WhatsApp</option>
                  <option value="bulk_voice_call_service">
                    Bulk Voice Call Service
                  </option>
                  <option value="business_verified_whatsApp">
                    Business Verified WhatsApp
                  </option>
                  <option value="bulk_email_service">Bulk Email Service</option>
                </select>
                {errors.service && (
                  <span className="mt-2 text-red-500 text-sm block">
                    Please select a service
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Redirecting..." : "Continue to Login"}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                You will be redirected to the selected service's login page
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginService;
