import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";

// Dummy data for benefits
const dummyBenefitsData = {
  benefits: [
    {
      id: 1,
      product_name: "hospital",
      title: "Bulk SMS Benefits",
      subtitle: "Why Choose Our SMS Services",
      description:
        "Our Bulk SMS service offers numerous advantages for businesses looking to enhance their communication strategy and reach customers effectively.",
      image: "/images/bulk-sms-benefits.jpg",
      benefits: [
        { benefits: "Instant delivery to thousands of customers" },
        { benefits: "High open rates compared to email" },
        { benefits: "Cost-effective marketing solution" },
        { benefits: "Real-time delivery reports" },
        { benefits: "Easy integration with existing systems" },
      ],
    },
    {
      id: 2,
      product_name: "ivr-system",
      title: "IVR System Advantages",
      subtitle: "Transform Your Customer Experience",
      description:
        "Our Intelligent Voice Response system provides significant benefits for businesses seeking to automate and improve customer interactions.",
      image: "/images/ivr-benefits.jpg",
      benefits: [
        { benefits: "24/7 customer service availability" },
        { benefits: "Reduced wait times for customers" },
        { benefits: "Lower operational costs" },
        { benefits: "Improved call routing efficiency" },
        { benefits: "Multilingual support capabilities" },
      ],
    },
    {
      id: 3,
      product_name: "digital-marketing",
      title: "Digital Marketing Benefits",
      subtitle: "Grow Your Online Presence",
      description:
        "Our comprehensive digital marketing services help businesses establish a strong online presence and reach their target audience effectively.",
      image: "/images/digital-marketing-benefits.jpg",
      benefits: [
        { benefits: "Increased brand visibility and awareness" },
        { benefits: "Targeted audience reach" },
        { benefits: "Measurable ROI and analytics" },
        { benefits: "Cost-effective compared to traditional marketing" },
        { benefits: "Real-time campaign adjustments" },
      ],
    },
    {
      id: 4,
      product_name: "whatsapp-service",
      title: "WhatsApp Business Benefits",
      subtitle: "Engage Customers Personally",
      description:
        "Leverage the power of WhatsApp for business communication with high engagement rates and personal touch.",
      image: "/images/whatsapp-benefits.jpg",
      benefits: [
        { benefits: "High engagement and open rates" },
        { benefits: "Rich media support (images, videos, documents)" },
        { benefits: "Official WhatsApp Business API" },
        { benefits: "Template messaging for consistency" },
        { benefits: "Secure and encrypted communication" },
      ],
    },
  ],
};

// Mock fetch function
const getBenefits = async (industry = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(dummyBenefitsData.benefits);
      } catch (error) {
        reject(new Error(error));
      }
    }, 300);
  });
};

const IndustriBenifits = ({ subpage }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        setLoading(true);
        const data = await getBenefits();
        setResult(data);
      } catch (err) {
        setError(err.message);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, [subpage]);

  if (loading) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content side - loading */}
          <div className="w-full lg:w-1/2">
            <div className="animate-pulse h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="animate-pulse h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="animate-pulse w-6 h-6 bg-gray-300 rounded-full mr-4"></div>
                  <div className="animate-pulse h-4 bg-gray-300 rounded w-64"></div>
                </div>
              ))}
            </div>
          </div>
          {/* Image side - loading */}
          <div className="w-full lg:w-1/2">
            <div className="animate-pulse w-full h-80 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load benefits: {error}
        </div>
      </div>
    );
  }

  const filteredBenefits = result.filter(
    (benefit) => benefit.product_name === subpage?.details
  );

  if (filteredBenefits.length === 0) {
    return null;
  }

  return (
    <>
      {filteredBenefits.map((benefit, i) => (
        <div
          key={i}
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content on left side */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                {benefit.subtitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {benefit.description}
              </p>

              <div className="space-y-4">
                {benefit.benefits.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FcApproval className="text-2xl mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      {item.benefits}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image on right side */}
            <div className="w-full lg:w-1/2">
              <img
                src={`https://picsum.photos/600/400?random=${benefit.id}`}
                alt={benefit.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IndustriBenifits;
