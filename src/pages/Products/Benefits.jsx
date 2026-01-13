import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { sms, img11, img10, img3 } from "../../assets/index";
import data from "../../data/productsData.json";
import imageMapping from "../../data/imageMapping";

//  data for benefits
const benefitsData = data.benefitsData;
const dummyBenefitsData = {
  benefits: [
    {
      id: 1,
      product_name: "bulk-sms",
      title: "Maximize Your Reach with Bulk SMS",
      subtitle:
        "Engage Customers, Boost Sales and Deliver Instant Communication.",
      description:
        "Bulk SMS provides a direct, reliable way to connect with your audience for promotions, alerts, reminders, or updates. With open rates exceeding traditional email marketing, your message is seen instantly. This cost-effective channel helps businesses strengthen customer relationships and achieve marketing goals faster.",
      image: sms,
      benefits: [
        { benefits: "Send messages instantly for real-time communication." },
        { benefits: "Over 98% open rate ensures visibility." },
        { benefits: "Low-cost marketing with excellent ROI." },
        { benefits: "Reach anyone globally with a mobile phone." },
        { benefits: "Boost interaction with call-to-action features." },
      ],
    },
    {
      id: 2,
      product_name: "bulk-voice",
      title: "Amplify Your Reach with Bulk Voice Solutions",
      subtitle: "Effortless Voice Messaging for Maximum Impact",
      description:
        "Communicate effectively with Bulk Voice services. Deliver personalized voice messages to thousands of recipients instantly. Whether for promotions, updates, or alerts, this solution ensures your message is heard loud and clear, creating a lasting impression.",
      image: img3,
      benefits: [
        { benefits: "Send messages to thousands of contacts simultaneously." },
        {
          benefits:
            "Deliver a human-like experience with customizable voice messages.",
        },
        {
          benefits:
            "Save time and money compared to traditional communication methods.",
        },
        {
          benefits:
            "Ideal for marketing campaigns, reminders, surveys, and emergency alerts.",
        },
        {
          benefits:
            "Suitable for businesses, political campaigns, schools, and more.",
        },
      ],
    },
    {
      id: 3,
      product_name: "graphic-design",
      title: "Unleash Creativity with Expert Graphic Design",
      subtitle: "Crafting Visual Experiences That Captivate and Inspire",
      description:
        "Our Graphic Design services create compelling visuals that bring your brand's message to life, helping you connect with your audience and stand out in the market.",
      image: img10,
      benefits: [
        { benefits: "Builds a memorable and unique brand identity." },
        { benefits: "Simplifies complex messages through visuals." },
        { benefits: "Gives your business a polished and credible look." },
        { benefits: "Captures attention and drives interaction." },
      ],
    },
    {
      id: 2,
      product_name: "ivr-system",
      title: "IVR System Advantages",
      subtitle: "Transform Your Customer Experience",
      description:
        "Our Intelligent Voice Response system provides significant benefits for businesses seeking to automate and improve customer interactions.",
      image: img11,
      benefits: [
        { benefits: "24/7 customer service availability" },
        { benefits: "Reduced wait times for customers" },
        { benefits: "Lower operational costs" },
        { benefits: "Improved call routing efficiency" },
        { benefits: "Multilingual support capabilities" },
      ],
    },

    {
      id: 4,
      product_name: "whatsapp-service",
      title: "Boost Your Business with Advanced WhatsApp Services",
      subtitle:
        "Bulk Messaging, Blue Tick Verification, and WhatsApp Business API Solutions",
      description:
        "Enhance your business communication with our WhatsApp services. From Bulk Messaging to Blue Tick Verification and advanced WhatsApp Business API, we provide tools to connect, engage, and grow efficiently.",
      image: img10,
      benefits: [
        {
          benefits:
            "Instantly reach a broad audience with promotional messages.",
        },
        {
          benefits:
            "Build trust with a verified badge that ensures authenticity.",
        },
        { benefits: "Enhance your brand reputation and customer confidence." },
        {
          benefits:
            "Automate responses with chatbots for faster customer service.",
        },
        { benefits: "Drive better engagement with your official account." },
      ],
    },
  ],
};

// Mock fetch function
const getBenefits = async (industry = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(benefitsData.benefits);
      } catch (error) {
        reject(new Error(error));
      }
    }, 300);
  });
};

const Benefits = ({ subpage }) => {
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
              <h1 className="text-4xl font-bold text-[#b8c7e0] mb-4">
                {benefit.title}
              </h1>
              <h2 className="text-2xl font-semibold text-[#0bc0df] mb-6">
                {benefit.subtitle}
              </h2>
              <p className="text-[#e5edfc] text-lg leading-relaxed mb-8">
                {benefit.description}
              </p>

              <div className="space-y-4">
                {benefit.benefits.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FcApproval className="text-2xl mr-4 mt-1 flex-shrink-0" />
                    <span className="text-[#0895d9] text-lg">
                      {item.benefits}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image on right side */}
            <div className="w-full lg:w-1/2">
              <img
                src={imageMapping[benefit.image]}
                alt={benefit.title}
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Benefits;
