import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import flexBanner from "../../assets/homeimg/flexbanner.png";

// JSON data
const flexBannerData = {
  offers: [
    {
      id: 1,
      image: flexBanner,
      alt: "Special Offer Banner",
      title: "Special Offer",
      description: "Limited time offer for our valued customers",
    },
  ],
};

const FlexBanner = () => {
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with JSON data
    const fetchData = async () => {
      try {
        // Using static JSON data
        setOffer(flexBannerData.offers[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 w-full h-64 rounded-lg"></div>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="py-10 flex items-center justify-center">
        <div className="text-gray-500">No banner available</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="py-10"
    >
      <div className="py-10 flex items-center">
        <motion.img
          src={offer.image}
          alt={offer.alt}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          // whileHover={{
          //   scale: 1.02,
          //   transition: { duration: 0.3 },
          // }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default FlexBanner;
