import React from "react";
import { motion } from "framer-motion";
import herovideo from "../../assets/homeimg/global.mp4";

// JSON data
const heroData = {
  subtitle: "Rich System Solutions",
  title: "Drive Engagement with Instant Messaging",
  description:
    "We’re Nashik's top marketing company since 2009, offering web design, social media, Google Ads, email marketing, and content creation. Partnering with 200+ brands, we deliver impactful campaigns with transparent reporting and secure data handling for last.",
  videoSrc: herovideo,
  buttons: [
    {
      text: "Schedule a demo",
      url: "/schedule-a-demo",
      bgColor: "bg-sky-600",
      hoverColor: "hover:bg-sky-700",
    },
    {
      text: "Talk to Sales",
      url: "/contact",
      bgColor: "bg-blue-900",
      hoverColor: "hover:bg-blue-950",
    },
  ],
};

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-full py-8"
    >
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:items-center gap-8">
        {/* Text Content */}
        <div className="w-full sm:w-1/2">
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-5xl antialiased capitalize mb-2 text-sky-500 font-bold"
          >
            {heroData.subtitle}
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-800 font-bold antialiased capitalize mb-3"
          >
            {heroData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 mb-6"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {heroData.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${button.bgColor} ${button.hoverColor} text-white px-6 sm:px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 text-center`}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Video Content */}
        <div className="w-full sm:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ overflow: "hidden", width: "100%", height: "100%" }}
            className="rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={heroData.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
