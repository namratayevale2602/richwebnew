import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { integrationvideo } from "../../assets";

// JSON data
const offerData = {
  title: "Get more out of Rich System Solution",
  subtitle: "Do more with the resources you already have.",
  description:
    "Enhance your operations with Rich System Solution's powerful APIs and versatile plug-ins, enabling seamless automation across platforms. Our advanced services and solutions integrate effortlessly with a wide range of popular applications to streamline your business processes. Whether you're managing productivity with Zoho Applications, running e-commerce stores on WooCommerce or Shopify, or optimizing CRM workflows with Bitrix 24 and HubSpot, Rich System Solution has you covered",
  button: {
    text: "Contact us now",
    link: "/schedule-a-demo",
    color: "text-blue-500",
  },
  video: {
    src: integrationvideo,
    alt: "Integrations video",
  },
};

const Offer = () => {
  return (
    <div className="flex items-center py-10 sm:py-5 lg:py-0">
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:items-center gap-4">
        {/* Text Content */}
        <motion.div
          className="w-full sm:w-1/2 ms-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl text-[#b8c7e0] font-bold antialiased capitalize mb-5 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {offerData.title}
          </motion.h2>

          <motion.h4
            className="text-2xl text-capitalize antialiased capitalize mb-5 text-[#0bc0df] font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {offerData.subtitle}
          </motion.h4>

          <motion.p
            className="text-justify mb-5 text-gray-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {offerData.description}
          </motion.p>

          <motion.div
            className="my-5 flex "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to={offerData.button.link} className={offerData.button.color}>
              {offerData.button.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Video Content */}
        <motion.div
          className="w-full sm:w-1/2 p-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={offerData.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
