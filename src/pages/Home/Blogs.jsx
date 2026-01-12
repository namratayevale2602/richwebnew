import React from "react";
import { motion } from "framer-motion";
import Blog from "./Blog";

// JSON data for blog categories
const blogCategories = [
  {
    id: 1,
    img: "/bulk-sms-blog.jfif",
    title: "Bulk SMS",
    description: "Learn about Bulk SMS strategies and best practices",
  },
  {
    id: 2,
    img: "/web-dev-blog.jpg",
    title: "Web Development",
    description: "Latest trends in web development and technologies",
  },
  {
    id: 3,
    img: "/digital-market-blog.jfif",
    title: "Digital Marketing",
    description: "Digital marketing insights and growth strategies",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
          Knowledge Center
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our comprehensive resources and stay updated with the latest
          insights
        </p>
      </motion.div>

      {/* Blog Categories */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8 lg:px-20 py-8 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {blogCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className="w-full sm:w-1/3 max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Blog Posts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Blog />
      </motion.div>
    </div>
  );
};

export default Blogs;
