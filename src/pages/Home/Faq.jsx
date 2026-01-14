import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqData = {
  sectionTitle: "Frequently Asked Questions",
  sectionDescription:
    "Get answers to common questions about our comprehensive digital services and solutions",
  faqs: [
    // Software & IT Services FAQs
    {
      id: 1,
      question: "What types of custom software do you develop?",
      answer:
        "We develop a wide range of custom software solutions including enterprise resource planning (ERP) systems, customer relationship management (CRM) tools, inventory management systems, and bespoke business applications tailored to your specific needs and workflows.",
      product_name: "software-it",
      isVisibleHome: true,
    },
    {
      id: 2,
      question: "Do you provide ongoing support after development?",
      answer:
        "Yes, we offer comprehensive post-development support including maintenance, updates, bug fixes, and feature enhancements. We provide different support packages to ensure your software continues to perform optimally.",
      product_name: "software-it",
      isVisibleHome: true,
    },
    {
      id: 3,
      question: "What technologies do you use for mobile app development?",
      answer:
        "We use both native (Swift for iOS, Kotlin for Android) and cross-platform technologies (React Native, Flutter) depending on your project requirements, budget, and performance needs.",
      product_name: "software-it",
      isVisibleHome: false,
    },

    // Social Media Marketing FAQs
    {
      id: 4,
      question: "How does Bulk SMS marketing work?",
      answer:
        "Our Bulk SMS service allows you to send promotional or transactional messages to thousands of customers simultaneously. We provide a user-friendly platform, API integration, and advanced features like DND filtering and delivery reports.",
      product_name: "social-media",
      isVisibleHome: true,
    },
    {
      id: 5,
      question: "What is WhatsApp Marketing Suite?",
      answer:
        "Our WhatsApp Marketing Suite includes promotional messaging, chatbot automation, Meta Verified services, and personal number integration. It helps businesses engage customers directly on WhatsApp with high open rates and better engagement.",
      product_name: "social-media",
      isVisibleHome: true,
    },
    {
      id: 6,
      question: "Can you help with content creation for social media?",
      answer:
        "Yes, we offer complete content creation services including podcast production, reel shoots, product photography, and graphic design to ensure your social media presence is engaging and professional.",
      product_name: "social-media",
      isVisibleHome: false,
    },

    // SEO Services FAQs
    {
      id: 7,
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. Typically, you can see initial improvements in 3-6 months, with significant results appearing in 6-12 months. The timeline depends on your industry competition, website age, and the current state of your SEO.",
      product_name: "seo",
      isVisibleHome: true,
    },
    {
      id: 8,
      question:
        "What's the difference between Local SEO and International SEO?",
      answer:
        "Local SEO focuses on optimizing your online presence to attract customers from specific geographic locations, while International SEO targets multiple countries and languages, involving hreflang tags, country-specific domains, and international keyword research.",
      product_name: "seo",
      isVisibleHome: true,
    },
    {
      id: 9,
      question: "Do you provide SEO audit reports?",
      answer:
        "Yes, we conduct comprehensive SEO audits that analyze technical SEO, on-page optimization, backlink profile, content quality, and competitor analysis. You receive detailed reports with actionable recommendations.",
      product_name: "seo",
      isVisibleHome: false,
    },

    // Design & Development FAQs
    {
      id: 10,
      question: "What is your website development process?",
      answer:
        "Our process includes discovery and planning, design mockups, development, testing, and deployment. We follow agile methodology with regular client updates and feedback sessions throughout the project.",
      product_name: "design-dev",
      isVisibleHome: true,
    },
    {
      id: 11,
      question: "Do you create responsive websites?",
      answer:
        "Absolutely. All our websites are fully responsive and optimized for all devices - desktop, tablet, and mobile. We ensure seamless user experience across all screen sizes and browsers.",
      product_name: "design-dev",
      isVisibleHome: true,
    },
    {
      id: 12,
      question: "What e-commerce platforms do you work with?",
      answer:
        "We work with various e-commerce platforms including Shopify, WooCommerce, Magento, and custom solutions. We help you choose the best platform based on your business needs and budget.",
      product_name: "design-dev",
      isVisibleHome: false,
    },

    // Content Marketing FAQs
    {
      id: 13,
      question: "What does content marketing strategy include?",
      answer:
        "Our content marketing strategy includes audience research, content planning, keyword strategy, content calendar, distribution plan, and performance metrics. We create content that resonates with your target audience and drives conversions.",
      product_name: "content-marketing",
      isVisibleHome: true,
    },
    {
      id: 14,
      question: "How do you measure content marketing success?",
      answer:
        "We track multiple metrics including website traffic, engagement rates, time on page, social shares, lead generation, conversion rates, and ROI. Regular reports help us optimize your content strategy.",
      product_name: "content-marketing",
      isVisibleHome: false,
    },

    // Performance Marketing FAQs
    {
      id: 15,
      question: "What is your approach to PPC advertising?",
      answer:
        "We create data-driven PPC campaigns focusing on keyword research, audience targeting, ad copy optimization, landing page design, and continuous A/B testing to maximize your return on ad spend.",
      product_name: "performance-marketing",
      isVisibleHome: true,
    },
    {
      id: 16,
      question: "How do you improve conversion rates?",
      answer:
        "We use CRO techniques including user behavior analysis, A/B testing, heatmaps, session recordings, and landing page optimization to identify and fix conversion barriers, ultimately increasing your conversion rates.",
      product_name: "performance-marketing",
      isVisibleHome: true,
    },
    {
      id: 17,
      question: "Do you manage Amazon and YouTube advertising?",
      answer:
        "Yes, we manage comprehensive advertising campaigns on Amazon (Sponsored Products, Brands) and YouTube (TrueView, Bumper ads) to help you reach customers on these high-traffic platforms effectively.",
      product_name: "performance-marketing",
      isVisibleHome: false,
    },

    // General FAQs
    {
      id: 18,
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including project-based pricing for one-time projects, monthly retainers for ongoing services, and performance-based pricing for certain marketing services. We provide custom quotes based on your specific requirements.",
      product_name: "general",
      isVisibleHome: true,
    },
    {
      id: 19,
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Contact us for a free consultation where we discuss your goals, analyze your needs, and provide a customized proposal. Once approved, we begin the onboarding process and kick off your project.",
      product_name: "general",
      isVisibleHome: true,
    },
    {
      id: 20,
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with startups, small businesses, medium enterprises, and large corporations across various industries. We tailor our services to meet the specific needs and budgets of each client.",
      product_name: "general",
      isVisibleHome: true,
    },
  ],
};

const Faq = ({ subpage = 0 }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openItem, setOpenItem] = useState(0);
  const brandColor = "#07337a";

  useEffect(() => {
    setFaqs(faqData.faqs);
    setLoading(false);
  }, []);

  const filteredFaqs = faqs.filter((faq) => {
    if (subpage.details && faq.product_name === subpage.details) {
      return true;
    }
    if (subpage === 0 && faq.isVisibleHome) {
      return true;
    }
    return false;
  });

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Split FAQs into two columns for the accordion layout
  const leftColumnFaqs = filteredFaqs.slice(
    0,
    Math.ceil(filteredFaqs.length / 2)
  );
  const rightColumnFaqs = filteredFaqs.slice(
    Math.ceil(filteredFaqs.length / 2)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="animate-pulse h-16 bg-gray-200 rounded w-3/4 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-32"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="animate-pulse h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#b8c7e0] mb-8 font-[Poppins] tracking-tight">
              FREQUENTLY
              <br />
              ASKED QUESTIONS
            </h1>
          </motion.div>
        </div>

        {/* FAQ Items - Two Columns Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Column FAQ Items */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === index}
                  onToggle={() => toggleItem(index)}
                  index={index}
                  brandColor={brandColor}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column FAQ Items */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === index + leftColumnFaqs.length}
                  onToggle={() => toggleItem(index + leftColumnFaqs.length)}
                  index={index + leftColumnFaqs.length}
                  brandColor={brandColor}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8"
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: brandColor,
              boxShadow: `0px 8px 25px ${brandColor}40`,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 font-[Inter]"
            style={{ backgroundColor: brandColor }}
          >
            Get Your Questions Answered
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Item Component (unchanged)
const FaqItem = ({ question, answer, isOpen, onToggle, index, brandColor }) => {
  return (
    <motion.div
      className="bg-white/12 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <motion.button
        className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer group"
        onClick={onToggle}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start space-x-4">
          {/* Number Indicator */}
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold font-[Inter] mt-0.5"
            style={{ backgroundColor: brandColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Question */}
          <span
            className={`text-base font-medium font-[Inter] text-left transition-colors duration-300 flex-1 ${
              isOpen ? "text-[#b8c7e0]" : "text-[#b8c7e0]"
            }`}
          >
            {question}
          </span>
        </div>

        {/* Chevron Icon */}
        <motion.div
          className="flex-shrink-0 ml-3"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? "text-gray-400" : "text-gray-400"
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
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-3 border-t border-gray-100 ml-11">
              <motion.p
                className="text-[#b8c7e0] leading-relaxed font-[Inter] text-base font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Faq;
