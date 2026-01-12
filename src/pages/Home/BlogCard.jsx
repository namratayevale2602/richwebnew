import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// JSON data for blog types
const blogTypes = {
  "bulk-sms": { color: "text-rose-500", bgColor: "bg-rose-100" },
  "web-development": { color: "text-blue-500", bgColor: "bg-blue-100" },
  "digital-marketing": { color: "text-green-500", bgColor: "bg-green-100" },
};

const BlogCard = ({
  id,
  title,
  created_at,
  description,
  type,
  blog_image,
  image_alt,
}) => {
  const navigate = useNavigate();
  const blogType = blogTypes[type] || blogTypes["bulk-sms"];

  return (
    <motion.div
      className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white"
      onClick={() => navigate(`/resources/blogs/${id}`)}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <div className="block aspect-w-4 aspect-h-3">
          <img
            src={blog_image}
            alt={image_alt}
            className="object-cover w-full h-48"
          />
        </div>

        <div className="p-4">
          <span
            className={`inline-flex px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${blogType.color} ${blogType.bgColor}`}
          >
            {type}
          </span>

          <motion.p
            className="mt-4 text-xl font-semibold text-black line-clamp-2"
            whileHover={{ color: "#004ECC" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.p>

          <p className="mt-3 text-gray-600 line-clamp-3">
            {description.slice(0, 100) + "...."}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {new Date(created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
