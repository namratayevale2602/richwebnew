import React, { useState, useEffect } from "react";
import Blog from "../Home/Blog";
import Testimonials from "../../components/Fixed/Testimonials";
import Enquiry from "../../components/Form/Enquiry";

// Dummy data for when API is not available
const dummyData = {
  products: [
    { id: 1, title: "Bulk SMS" },
    { id: 2, title: "IVR System" },
    { id: 3, title: "Digital Marketing" },
    { id: 4, title: "WhatsApp Service" },
    { id: 5, title: "Bulk Voice" },
    { id: 6, title: "Web Development" },
  ],
  faqs: [
    {
      id: 1,
      product_id: 1,
      question: "What is Bulk SMS service?",
      answer:
        "Bulk SMS service allows you to send promotional or transactional messages to thousands of recipients simultaneously through our robust platform with high delivery rates.",
    },
    {
      id: 2,
      product_id: 1,
      question: "How much does Bulk SMS cost?",
      answer:
        "We offer competitive pricing starting at Rs. 12,000 for 100,000 SMS with various packages to suit different business needs and volumes.",
    },
    {
      id: 3,
      product_id: 2,
      question: "What is an IVR System?",
      answer:
        "IVR (Interactive Voice Response) is an automated telephone system that interacts with callers, gathers information, and routes calls to the appropriate recipients without human intervention.",
    },
    {
      id: 4,
      product_id: 2,
      question: "Can IVR system handle multiple languages?",
      answer:
        "Yes, our IVR system supports multiple languages and can be customized to provide voice prompts in regional languages based on your customer demographics.",
    },
    {
      id: 5,
      product_id: 3,
      question: "What digital marketing services do you offer?",
      answer:
        "We offer comprehensive digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics to help you grow your online presence.",
    },
    {
      id: 6,
      product_id: 4,
      question: "What is WhatsApp Business API?",
      answer:
        "WhatsApp Business API is an official solution for businesses to communicate with customers at scale, send notifications, and provide customer support through the WhatsApp platform.",
    },
  ],
};

const FaqResource = () => {
  const [types, setTypes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [faqs, setFaqs] = useState(1);
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Try to fetch from API, fallback to dummy data if fails
        try {
          const [productsRes, faqsRes] = await Promise.all([
            fetch(
              `${
                import.meta.env.VITE_API_URL ||
                "https://richadmin.demovoting.com/api/"
              }products`
            ),
            fetch(
              `${
                import.meta.env.VITE_API_URL ||
                "https://richadmin.demovoting.com/api/"
              }faqs`
            ),
          ]);

          if (productsRes.ok && faqsRes.ok) {
            const productsData = await productsRes.json();
            const faqsData = await faqsRes.json();
            setTypes(productsData.data || productsData);
            setQuestions(faqsData.data || faqsData);
          } else {
            throw new Error("API not available");
          }
        } catch (error) {
          // Fallback to dummy data
          console.log("Using dummy data:", error.message);
          setTypes(dummyData.products);
          setQuestions(dummyData.faqs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to dummy data
        setTypes(dummyData.products);
        setQuestions(dummyData.faqs);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    setFaqs(id);
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="animate-pulse h-10 bg-gray-300 rounded w-96 mx-auto mb-10"></div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* FAQ Questions Loading */}
            <div className="w-full lg:w-3/5 space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse bg-gray-200 h-24 rounded-lg"
                ></div>
              ))}
            </div>
            {/* Categories Loading */}
            <div className="w-full lg:w-2/5">
              <div className="animate-pulse h-10 bg-gray-300 rounded w-48 mx-auto mb-6"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse bg-gray-200 h-16 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FAQ Questions Section */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#b8c7e0] mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {questions
                .filter((que) => que.product_id == faqs)
                .map((que, i) => (
                  <div
                    key={que.id || i}
                    className="bg-white/12 rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer duration-200"
                      onClick={() => toggleItem(i)}
                    >
                      <span className="text-lg font-medium text-[#e5edfc] pr-4">
                        {que.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                          openItems[i] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openItems[i] && (
                      <div className="px-6 pb-4">
                        <p className="text-[#e5edfc] leading-relaxed">
                          {que.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

              {questions.filter((que) => que.product_id == faqs).length ===
                0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg">
                    No FAQs found for this category.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related FAQ Categories */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/12 rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-center text-[#b8c7e0] mb-6">
                Related FAQ
              </h2>

              <div className="max-h-96 overflow-auto space-y-3">
                {types.map((items, i) => (
                  <Types
                    key={items.id || i}
                    title={items.title}
                    isActive={faqs === items.id}
                    onClick={() => handleClick(items.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
      <Testimonials />
      <Enquiry />
    </div>
  );
};

export default FaqResource;

// Types Component
export function Types({ title, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg p-4 cursor-pointer transition-all duration-200 border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600 shadow-md"
          : "bg-sky-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-200"
      }`}
    >
      <div className="flex items-center">
        <h2 className="text-md font-semibold">{title}</h2>
        {isActive && (
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
