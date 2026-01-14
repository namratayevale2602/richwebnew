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
      blog_image: "/bulk-sms-blog.jfif",
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
      blog_image: "/web-dev-blog.jpg",
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
      blog_image: "/digital-market-blog.jfif",
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
      isVisibleHome: true,
    },
  ],
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLayout, setActiveLayout] = useState("masonry"); // masonry, grid, featured

  useEffect(() => {
    setBlogs(blogData.blogs);
    setLoading(false);
  }, []);

  const visibleBlogs = blogs.filter((blog) => blog.isVisibleHome);

  // Masonry layout columns
  const getMasonryColumns = () => {
    const columns = [[], [], []];
    visibleBlogs.forEach((blog, index) => {
      columns[index % 3].push(blog);
    });
    return columns;
  };

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
    <section className="flex items-center py-10 sm:py-16 lg:py-24 bg-transparent">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        {/* Section Header with Layout Switcher */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mb-8 lg:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#b8c7e0] font-[Poppins] tracking-tight">
              BLOG &
              <br />
              INSIGHTS
            </h2>
            <p className="text-lg text-[#e5edfc] max-w-2xl font-[Inter] leading-relaxed">
              {blogData.sectionDescription}
            </p>
          </motion.div>

          {/* Layout Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-2 bg-white/12 rounded-lg p-2 shadow-sm border"
          >
            {["masonry", "grid", "featured"].map((layout) => (
              <button
                key={layout}
                onClick={() => setActiveLayout(layout)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeLayout === layout
                    ? "bg-blue-600 text-[#e5edfc] shadow-md"
                    : "text-[#e5edfc]  "
                }`}
              >
                {layout.charAt(0).toUpperCase() + layout.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Layout */}
        {activeLayout === "masonry" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getMasonryColumns().map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-8">
                {column.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: columnIndex * 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className={`transform hover:-translate-y-2 transition-all duration-500 ${
                      index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                    }`}
                  >
                    <BlogCard
                      id={blog.id}
                      title={blog.blog_heading}
                      description={blog.introduction}
                      type={blog.blog_cat}
                      created_at={blog.created_at}
                      blog_image={blog.blog_image}
                      image_alt={blog.image_alt}
                      variant="masonry"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        )}

        {/* Grid Layout */}
        {activeLayout === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {visibleBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <BlogCard
                  id={blog.id}
                  title={blog.blog_heading}
                  description={blog.introduction}
                  type={blog.blog_cat}
                  created_at={blog.created_at}
                  blog_image={blog.blog_image}
                  image_alt={blog.image_alt}
                  variant="grid"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Featured Layout */}
        {activeLayout === "featured" && visibleBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Featured Blog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <BlogCard {...visibleBlogs[0]} variant="featured" />
            </motion.div>

            {/* Secondary Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleBlogs.slice(1).map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <BlogCard
                    id={blog.id}
                    title={blog.blog_heading}
                    description={blog.introduction}
                    type={blog.blog_cat}
                    created_at={blog.created_at}
                    blog_image={blog.blog_image}
                    image_alt={blog.image_alt}
                    variant="compact"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Blogs Message */}
        {visibleBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg font-[Inter]">
              No blogs available at the moment. Check back soon!
            </p>
          </motion.div>
        )}

        {/* View All CTA */}
        {visibleBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              View All Articles
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
