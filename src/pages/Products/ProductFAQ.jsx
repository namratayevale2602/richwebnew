import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data mapped to product slugs
const faqData = {
  sectionTitle: "Frequently Asked Questions",
  sectionDescription: "Answers to Common Queries for Better Understanding",
  faqs: [
    // General FAQs
    {
      id: 1,
      question: "What is Rich System Solution?",
      answer:
        "Rich System Solution is a leading provider of digital communication and marketing services with over 6 years of experience in helping businesses grow.",
      product_name: "general",
      isVisibleHome: true,
    },
    {
      id: 2,
      question: "Do you provide API integration?",
      answer:
        "Yes, we provide comprehensive API documentation and support for seamless integration with your existing systems and applications.",
      product_name: "general",
      isVisibleHome: true,
    },

    // Bulk SMS FAQs
    {
      id: 3,
      question: "How does Bulk SMS service work?",
      answer:
        "Our Bulk SMS service allows you to send promotional or transactional messages to thousands of recipients simultaneously through our robust and reliable platform with high delivery rates.",
      product_name: "bulk-sms",
      isVisibleHome: true,
    },
    {
      id: 4,
      question: "What is the delivery rate for Bulk SMS?",
      answer:
        "We maintain over 99% delivery rate with advanced DND filtration, multi-language support, and real-time delivery reports to ensure your messages reach the intended recipients.",
      product_name: "bulk-sms",
      isVisibleHome: true,
    },
    {
      id: 5,
      question: "Can I schedule Bulk SMS messages?",
      answer:
        "Yes, our platform allows you to schedule SMS campaigns in advance, set specific delivery times, and automate your messaging workflows.",
      product_name: "bulk-sms",
      isVisibleHome: false,
    },

    // IVR System FAQs
    {
      id: 6,
      question: "What is an IVR System?",
      answer:
        "IVR (Interactive Voice Response) is an automated telephone system that interacts with callers, gathers information, and routes calls to the appropriate recipient without human intervention.",
      product_name: "ivr-system",
      isVisibleHome: true,
    },
    {
      id: 7,
      question: "Can IVR system handle multiple languages?",
      answer:
        "Yes, our IVR system supports multiple languages and can be customized to provide voice prompts in regional languages based on your customer demographics.",
      product_name: "ivr-system",
      isVisibleHome: true,
    },

    // WhatsApp Service FAQs
    {
      id: 8,
      question: "What is WhatsApp Business API?",
      answer:
        "WhatsApp Business API is an official solution for businesses to communicate with customers at scale, send notifications, and provide customer support through the WhatsApp platform.",
      product_name: "whatsapp-service",
      isVisibleHome: true,
    },
    {
      id: 9,
      question: "Can I send promotional messages via WhatsApp?",
      answer:
        "Yes, you can send promotional messages using approved message templates. However, all promotional content must comply with WhatsApp's business policy and template approval process.",
      product_name: "whatsapp-service",
      isVisibleHome: true,
    },

    // Digital Marketing FAQs
    {
      id: 10,
      question: "What digital marketing services do you offer?",
      answer:
        "We offer comprehensive digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics to help you grow your online presence.",
      product_name: "digital-marketing",
      isVisibleHome: true,
    },
    {
      id: 11,
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. Typically, you can see initial results in 3-6 months, with significant improvements occurring over 6-12 months of consistent optimization.",
      product_name: "digital-marketing",
      isVisibleHome: true,
    },

    // Bulk Voice FAQs
    {
      id: 12,
      question: "What is Bulk Voice service?",
      answer:
        "Bulk Voice service allows you to send pre-recorded voice messages to thousands of phone numbers simultaneously, perfect for announcements, alerts, and personalized communications.",
      product_name: "bulk-voice",
      isVisibleHome: true,
    },

    // WhatsApp Chatbot FAQs
    {
      id: 13,
      question: "What can a WhatsApp Chatbot do?",
      answer:
        "Our WhatsApp Chatbot can handle customer queries, provide instant responses, collect information, schedule appointments, process orders, and integrate with your CRM systems 24/7.",
      product_name: "whats-chatbot",
      isVisibleHome: true,
    },

    // Digital Automation FAQs
    {
      id: 14,
      question: "What is Digital Automation?",
      answer:
        "Digital Automation involves using technology to automate repetitive business processes, workflows, and customer interactions to improve efficiency and reduce manual errors.",
      product_name: "digital-auto",
      isVisibleHome: true,
    },

    // Design & Development FAQs
    {
      id: 15,
      question: "What design and development services do you offer?",
      answer:
        "We offer complete design and development services including website development, mobile apps, UI/UX design, e-commerce solutions, and custom software development.",
      product_name: "design-develop",
      isVisibleHome: true,
    },

    // Graphic Design FAQs
    {
      id: 16,
      question: "What graphic design services are available?",
      answer:
        "Our graphic design services include logo design, branding packages, marketing materials, social media graphics, infographics, and complete visual identity development.",
      product_name: "graphic-design",
      isVisibleHome: true,
    },

    // Alert System FAQs
    {
      id: 17,
      question: "What is an Alert System?",
      answer:
        "Our Alert System provides real-time notifications across multiple channels including SMS, voice calls, email, and push notifications for emergency alerts, system updates, and important announcements.",
      product_name: "alert-system",
      isVisibleHome: true,
    },

    // Bulk Email FAQs
    {
      id: 18,
      question: "What are the benefits of Bulk Email marketing?",
      answer:
        "Bulk Email marketing offers cost-effective reach, personalized communication, measurable results, automation capabilities, and high ROI for customer engagement and retention.",
      product_name: "bulk-email",
      isVisibleHome: true,
    },

    // Outdoor Marketing FAQs
    {
      id: 19,
      question: "What outdoor marketing services do you provide?",
      answer:
        "We provide comprehensive outdoor marketing solutions including hoardings, billboards, bus shelters, vehicle branding, street furniture advertising, and event marketing campaigns.",
      product_name: "outdoor-marketing",
      isVisibleHome: true,
    },

    // Pricing FAQs (General)
    {
      id: 20,
      question: "What are the pricing plans?",
      answer:
        "We offer competitive and flexible pricing plans tailored to your business needs. Contact our sales team for customized quotes based on your requirements and volume.",
      product_name: "pricing",
      isVisibleHome: true,
    },
  ],
};

const ProductFAQ = ({ subpage = 0 }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openItem, setOpenItem] = useState(0); // First item open by default

  useEffect(() => {
    // Simulate API call
    setFaqs(faqData.faqs);
    setLoading(false);
  }, []);

  const filteredFaqs = faqs.filter((faq) => {
    // If we're on a specific product page, show FAQs for that product + general FAQs
    if (subpage.details) {
      return (
        faq.product_name === subpage.details || faq.product_name === "general"
      );
    }
    // If on home page, show only FAQs marked for home visibility
    if (subpage === 0) {
      return faq.isVisibleHome;
    }
    return false;
  });

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  if (loading) {
    return (
      <div className="py-10 sm:py-10 lg:py-10 flex items-center w-full">
        <div className="px-4 max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="animate-pulse h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 h-20 rounded-lg mb-5"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // Don't show FAQ section if no FAQs found for the current page
  if (filteredFaqs.length === 0) {
    return null;
  }

  return (
    <div className="py-10 sm:py-10 lg:py-10 flex items-center w-full">
      <div className="px-4 max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl font-bold leading-tight text-[#e5edfc] sm:text-4xl lg:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqData.sectionTitle}
          </motion.h1>
          <motion.p
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#0bc0df]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.sectionDescription}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onToggle={() => toggleItem(index)}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component with proper accordion
const FaqItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <div className="bg-white/12 shadow-md rounded-lg overflow-hidden">
      <motion.button
        className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer transition-colors duration-200"
        onClick={onToggle}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-medium text-[#b8c7e0] pr-4">
          {question}
        </span>
        <motion.svg
          className={`w-5 h-5 text-[#b8c7e0] transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2">
              <p className="text-[#b8c7e0] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFAQ;
