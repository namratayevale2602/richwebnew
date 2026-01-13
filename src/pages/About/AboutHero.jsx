import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import your image (make sure to place it in the src/assets folder)
import flexBanner from "../../assets/homeimg/flexbanner.png";
const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div className="bg-transparent">
      {/* Image Section at Top */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-96 md:h-[500px] overflow-hidden"
      >
        <img
          src={flexBanner}
          alt="Conversational Messaging"
          className="w-full h-full object-cover"
        />
      </motion.div> */}

      {/* Text Content Section */}
      <div ref={ref} className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-[#b8c7e0] mb-6 text-center leading-tight"
        >
          One-on-one engagement, for everyone
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-bold text-[#0bc0df] mb-12 text-center leading-relaxed max-w-6xl mx-auto"
        >
          Revolutionizing commerce, marketing, and support with conversational
          messaging worldwide
        </motion.p>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8"
        >
          <p className="text-[#e5edfc] leading-relaxed text-center text-lg">
            Rich System Solutions Pvt Ltd, established in 2009, is a leading
            digital marketing company in Nashik. We help brands achieve their
            business goals through comprehensive services like web design,
            development, social media marketing, paid marketing, and more. Our
            experienced team works closely with you, understanding your needs
            and delivering results that drive growth and success
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
