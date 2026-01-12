import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// JSON data
const benefitsData = {
  background: "#004ECC",
  image: "/ipads.png",
  alt: "offer",
  title: "Unlock 100,000 Bulk SMS for Just Rs. 12,000!",
  subtitle: "MORE THAN 1000+ SATISFIED CUSTOMERS",
  description:
    "Rich System Solution is a leading provider of Bulk SMS services & Marketing SMS services in India. Rich System Solution has been providing SMS based services for over 6 years.Unlimited Validity, Data Support, Non DND, DND Filtration, Multi Language, 9am to 9pm and mor",
  button: {
    text: "Contact Us",
    link: "/contact",
    color: "text-blue-500",
    bgColor: "bg-white",
    hoverColor: "hover:bg-slate-200",
  },
};

const BenfitsHome = () => {
  return (
    <section
      className="py-8 sm:py-8 lg:py-8"
      style={{ background: benefitsData.background }}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={benefitsData.image}
              alt={benefitsData.alt}
              className="w-full max-w-xl mx-auto"
            />
          </motion.div>

          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl mb-3">
              {benefitsData.title}
            </h2>
            <h4 className="text-xl font-bold leading-tight text-white sm:text-xl lg:text-2xl">
              {benefitsData.subtitle}
            </h4>
            <p className="mt-6 text-base text-white text-justify">
              {benefitsData.description}
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={benefitsData.button.link}
                title=""
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold ${benefitsData.button.color} transition-all duration-200 ${benefitsData.button.bgColor} rounded-md mt-9 ${benefitsData.button.hoverColor} focus:bg-blue-700`}
                role="button"
              >
                {benefitsData.button.text}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenfitsHome;
