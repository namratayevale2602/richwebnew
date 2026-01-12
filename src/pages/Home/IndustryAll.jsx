import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// JSON data
const industryData = {
  sectionTitle: "Corporate Network",
  sectionDescription: "Connecting Businesses Across the Globe",
  industries: [
    {
      id: 1,
      icon: "/icons/healthcare.png",
      title: "Healthcare",
    },
    {
      id: 2,
      icon: "/icons/education.png",
      title: "Education",
    },
    {
      id: 3,
      icon: "/icons/finance.png",
      title: "Finance",
    },
    {
      id: 4,
      icon: "/icons/retail.png",
      title: "Retail",
    },
    {
      id: 5,
      icon: "/icons/technology.png",
      title: "Technology",
    },
    {
      id: 6,
      icon: "/icons/manufacturing.png",
      title: "Manufacturing",
    },
    {
      id: 7,
      icon: "/icons/hospitality.png",
      title: "Hospitality",
    },
    {
      id: 8,
      icon: "/icons/logistics.png",
      title: "Logistics",
    },
  ],
  image: "/industry_man.png",
};

const IndustryAll = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    // Simulate API call with JSON data
    setIndustries(industryData.industries);
  }, []);

  return (
    <div className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
            {industryData.sectionTitle}
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-gray-600">
            {industryData.sectionDescription}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between gap-8 lg:gap-12"
        >
          {/* Industries Grid */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 max-h-[400px] overflow-y-auto px-4 py-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Corporate
                    icon={industry.icon}
                    title={industry.title}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={industryData.image}
              alt="Corporate professional"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Corporate Component
const Corporate = ({ icon, title, index }) => {
  const imagePath = import.meta.env.VITE_IMAGE_PATH || "";

  return (
    <motion.div
      whileHover={{
        rotateY: 10,
        transition: { duration: 0.3 },
      }}
      className="flex flex-col items-center justify-center group cursor-pointer"
    >
      <motion.div
        className="card w-24 h-24 sm:w-28 sm:h-28 shadow-xl bg-blue-100 p-4 sm:p-6 rounded-2xl border-2 border-transparent group-hover:border-blue-500 group-hover:bg-blue-200 transition-all duration-300"
        whileHover={{
          boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
        }}
      >
        <img
          src={imagePath + icon}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `data:image/svg+xml;base64,${btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">${title.charAt(
                  0
                )}</text>
              </svg>
            `)}`;
          }}
        />
      </motion.div>

      <motion.h3
        className="mt-3 text-sm sm:text-base font-medium text-gray-700 text-center max-w-[100px] group-hover:text-blue-600 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default IndustryAll;
