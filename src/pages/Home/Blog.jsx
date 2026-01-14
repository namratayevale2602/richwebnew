import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

// JSON data
const blogData = {
  sectionTitle: "Insights & Trends",
  sectionDescription:
    "Stay updated on the latest trends and expert insights shaping Rich System Solution",
  blogs: [
    {
      id: 1,
      blog_heading: "How to manage your remote team with Bulk SMS?",
      introduction:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      blog_cat: "bulk-sms",
      created_at: "2024-01-15",
      blog_image:
        "https://plus.unsplash.com/premium_photo-1719491716646-9525cc8bdc3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      image_alt: "Bulk SMS Blog",
      isVisibleHome: true,
    },
    {
      id: 2,
      blog_heading: "Web Development Best Practices in 2024",
      introduction:
        "Learn the latest web development trends and best practices for building scalable applications.",
      blog_cat: "web-development",
      created_at: "2024-01-10",
      blog_image:
        "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174",
      image_alt: "Web Development Blog",
      isVisibleHome: true,
    },
    {
      id: 3,
      blog_heading: "Digital Marketing Strategies That Work",
      introduction:
        "Discover effective digital marketing strategies to grow your business online.",
      blog_cat: "digital-marketing",
      created_at: "2024-01-05",
      blog_image:
        "https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=982",
      image_alt: "Digital Marketing Blog",
      isVisibleHome: true,
    },
    {
      id: 4,
      blog_heading: "Advanced Bulk SMS Features",
      introduction:
        "Explore advanced features of our Bulk SMS platform for enterprise communication.",
      blog_cat: "bulk-sms",
      created_at: "2024-01-01",
      blog_image: "/advanced-sms.jpg",
      image_alt: "Advanced SMS Features",
      isVisibleHome: false,
    },
  ],
};

const Blog = ({ img, title }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setBlogs(blogData.blogs);
    setLoading(false);
  }, []);

  const visibleBlogs = blogs.filter((blog) => blog.isVisibleHome);

  if (loading) {
    return (
      <section className="flex items-center py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="animate-pulse h-12 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg h-80"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-12xl w-full">
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#b8c7e0] font-[Poppins] tracking-tight">
              BLOG &
              <br />
              INSIGHTS
            </h1>

            <motion.p
              className="text-lg leading-relaxed text-[#0bc0df] font-[Inter]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {blogData.sectionDescription}
            </motion.p>
          </motion.div>

          {/* Right Column - Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {visibleBlogs.length > 0 ? (
              visibleBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    id={blog.id}
                    title={blog.blog_heading}
                    description={blog.introduction}
                    type={blog.blog_cat}
                    created_at={blog.created_at}
                    blog_image={blog.blog_image}
                    image_alt={blog.image_alt}
                  />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No blogs available at the moment.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
