import React from "react";
import { motion, recordStats } from "framer-motion";
import { Link } from "react-router-dom";
import { reachOut } from "../../assets/index";

// JSON data
const enquiryFlexData = {
  background: "#004ecc40",
  image: {
    src: reachOut,
    alt: "offer",
  },
  title: "LETS REACH OUT",
  subtitle: "Connect with us",
  description:
    "Empower your business with cutting-edge conversational experiences through our robust infrastructure, designed to support you at any scale. With contextual campaigns, customizable workflows, and seamless cross-channel interactions, we help you engage your customers in meaningful and innovative ways. Whether it's personalizing customer journeys, streamlining communication processes, or creating impactful marketing campaigns, our solution ensures that your enterprise is equipped to deliver outstanding, scalable, and efficient customer experiences.",
  buttons: [
    {
      text: "Schedule a demo",
      link: "/schedule-a-demo",
      className:
        "bg-[#073379] text-[#e5edfc] px-3 sm:px-10 py-2 rounded-full me-2 sm:me-5 hover:bg-slate-200 capitalize",
    },
    {
      text: "Talk to Sales",
      link: "/contact",
      className:
        "bg-[#073379] text-[#e5edfc] px-3 sm:px-10 py-2 rounded-full hover:bg-slate-200 capitalize",
    },
  ],
};

const EnquiryFlex = () => {
  return (
    <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-10">
      <motion.div
        className="shadow-xl text-white rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="card flex flex-col sm:flex-row justify-center sm:items-center p-5 sm:p-0 rounded-xl"
          style={{ background: enquiryFlexData.background }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full sm:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={enquiryFlexData.image.src}
              alt={enquiryFlexData.image.alt}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full sm:w-3/5 p-6 sm:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="card-title text-[#b8c7e0] text-3xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {enquiryFlexData.title}
            </motion.h1>

            <motion.h3
              className="font-semibold text-[#b8c7e0] mb-3 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {enquiryFlexData.subtitle}
            </motion.h3>

            <motion.p
              className="text-justify text-[#e5edfc] pe-3 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {enquiryFlexData.description}
            </motion.p>

            <motion.div
              className="mt-5 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {enquiryFlexData.buttons.map((button, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={button.link}
                    className={
                      button.className +
                      " transition-all duration-200 font-medium "
                    }
                  >
                    {button.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnquiryFlex;
