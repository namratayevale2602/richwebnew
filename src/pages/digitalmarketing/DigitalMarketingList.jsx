import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Megaphone,
  FileText,
  Mail,
  MessageSquare,
  Smartphone,
  Palette,
  Film,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Zap,
  Globe,
  Layers,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

// Import JSON data
import marketingServicesData from "../../data/digitalMarketingData.json";

const DigitalMarketingList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useSEO("digitalMarketingServices");

  // Convert object to array
  const servicesArray = Object.entries(marketingServicesData).map(
    ([slug, data]) => ({
      ...data,
      slug: `digital-marketing-services/${slug}`,
      fullSlug: slug,
      category: determineCategory(data.label),
    })
  );

  // Determine category based on service label
  function determineCategory(label) {
    if (label.includes("SEO")) {
      return "seo";
    } else if (label.includes("Social")) {
      return "social";
    } else if (["PPC Advertising", "Video Marketing"].includes(label)) {
      return "advertising";
    } else if (
      [
        "Content Marketing",
        "Email Marketing",
        "WhatsApp Marketing",
        "Bulk SMS Marketing",
      ].includes(label)
    ) {
      return "content";
    } else if (["Graphic Design", "Video Marketing"].includes(label)) {
      return "design";
    }
    return "other";
  }

  // Marketing service type filters
  const serviceTypes = [
    {
      id: "all",
      label: "All Services",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    { id: "seo", label: "SEO & Organic", icon: <Search className="h-4 w-4" /> },
    {
      id: "social",
      label: "Social Media",
      icon: <Share2 className="h-4 w-4" />,
    },
    {
      id: "advertising",
      label: "Advertising",
      icon: <Megaphone className="h-4 w-4" />,
    },
    { id: "content", label: "Content", icon: <FileText className="h-4 w-4" /> },
    { id: "design", label: "Design", icon: <Palette className="h-4 w-4" /> },
  ];

  // Unsplash Images for Digital Marketing
  const unsplashImages = {
    seo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
    "social-media-marketing":
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&crop=center",
    "ppc-advertising":
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    "content-marketing":
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&crop=center",
    "email-marketing":
      "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=800&h=600&fit=crop&crop=center",
    "whatsapp-marketing":
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&crop=center",
    "bulk-sms":
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    "graphic-design":
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
    "video-marketing":
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&crop=center",
  };

  // Marketing stats
  const marketingStats = [
    {
      value: "200%",
      label: "Avg. Traffic Increase",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      value: "150%",
      label: "Conversion Boost",
      icon: <Target className="h-6 w-6" />,
    },
    {
      value: "5x",
      label: "Average ROI",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  // Filter services
  const filteredServices = servicesArray.filter((service) => {
    const matchesSearch =
      searchTerm === "" ||
      service.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.hero.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" || service.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  // Category colors
  const categoryColors = {
    seo: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      text: "text-purple-600",
      light: "bg-purple-50",
    },
    social: {
      bg: "bg-gradient-to-br from-pink-500 to-pink-600",
      text: "text-pink-600",
      light: "bg-pink-50",
    },
    advertising: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      text: "text-blue-600",
      light: "bg-blue-50",
    },
    content: {
      bg: "bg-gradient-to-br from-green-500 to-green-600",
      text: "text-green-600",
      light: "bg-green-50",
    },
    design: {
      bg: "bg-gradient-to-br from-orange-500 to-orange-600",
      text: "text-orange-600",
      light: "bg-orange-50",
    },
    other: {
      bg: "bg-gradient-to-br from-gray-500 to-gray-600",
      text: "text-gray-600",
      light: "bg-gray-50",
    },
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b8c7e0] mb-6 leading-tight">
              Professional Digital Marketing Solutions
            </h1>
            <p className="text-lg md:text-xl text-[#e5edfc] mb-8 leading-relaxed">
              Drive growth, increase visibility, and boost conversions with our
              comprehensive digital marketing services. Data-driven strategies
              for real results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {marketingStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex text-[#e5edfc] items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-2xl md:text-3xl font-bold text-[#e5edfc]">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8  border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search marketing services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-96 px-4 py-3 pl-12 text-[#e5edfc] rounded-xl border border-gray-200 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeFilter === type.id
                    ? "bg-[#127cc9] text-white"
                    : "bg-white/12 text-[#e5edfc] "
                }`}
              >
                {type.icon}
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const colors =
                  categoryColors[service.category] || categoryColors.other;
                return (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => navigate(`/${service.slug}`)}
                    className="bg-white/12 rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          unsplashImages[service.fullSlug] ||
                          unsplashImages["seo"]
                        }
                        alt={service.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#b8c7e0] mb-3 group-hover:text-[#127cc9] transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-[#e5edfc] mb-4 line-clamp-2">
                        {service.hero.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {service.hero.features
                          .slice(0, 2)
                          .map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#127cc9] mt-2 flex-shrink-0"></div>
                              <span className="text-[#e5edfc] text-sm line-clamp-2">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* CTA Button */}
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0cc0e1] to-[#127cc9]">
                        View Marketing Strategy
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // No Results
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No marketing services found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="bg-gradient-to-r from-[#127cc9] to-[#07337a] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0cc0e1] hover:to-[#127cc9] transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#b8c7e0] text-center mb-12">
            Why Our Marketing Services Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Data-Driven Strategies",
                description:
                  "Results based on analytics and performance metrics",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Quick Results",
                description: "See measurable improvements in weeks, not months",
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "High ROI Focus",
                description:
                  "Maximize your marketing budget with proven tactics",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Continuous Optimization",
                description: "Regular campaign analysis and improvement",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/12 p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-[#127cc9] text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#b8c7e0] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#e5edfc]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-[#b8c7e0] mb-6"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <p className="text-xl text-[#e5edfc] mb-8 max-w-3xl mx-auto">
            Get a free marketing audit and discover how our strategies can
            transform your online presence and drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white/12 text-[#e5edfc] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Get Free Marketing Audit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/case-studies")}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingList;
