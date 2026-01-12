import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  Server,
  Wrench,
  Database,
  Cpu,
  Layers,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Search,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

// Import JSON data
import softwareServicesData from "../../data/softdev.json";

const SoftDevList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useSEO("softwareIT");

  // Convert object to array
  const servicesArray = Object.entries(softwareServicesData).map(
    ([slug, data]) => ({
      ...data,
      slug: `software-it-services/${slug}`,
      fullSlug: slug,
      category: determineCategory(data.label),
    })
  );

  // Determine category based on service label
  function determineCategory(label) {
    if (
      [
        "Custom Software Development",
        "Web Development",
        "Mobile App Development",
      ].includes(label)
    ) {
      return "development";
    } else if (label.includes("Design")) {
      return "design";
    } else if (["Cloud Solutions", "API Integration"].includes(label)) {
      return "cloud";
    } else if (["Maintenance & Support"].includes(label)) {
      return "support";
    }
    return "other";
  }

  // Service type filters
  const serviceTypes = [
    { id: "all", label: "All Services", icon: <Layers className="h-4 w-4" /> },
    {
      id: "development",
      label: "Development",
      icon: <Code className="h-4 w-4" />,
    },
    { id: "design", label: "Design", icon: <Palette className="h-4 w-4" /> },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      icon: <Cloud className="h-4 w-4" />,
    },
    { id: "support", label: "Support", icon: <Wrench className="h-4 w-4" /> },
  ];

  // Unsplash Images for Software Services
  const unsplashImages = {
    "custom-software-development":
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
    "web-development":
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    "mobile-app-development":
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    "ui-ux-design":
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
    "ecommerce-solutions":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    "cloud-solutions":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
    "api-integration":
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&crop=center",
    "maintenance-support":
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center",
  };

  // Stats data
  const stats = [
    {
      value: "100+",
      label: "Projects Completed",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "10+",
      label: "Years Experience",
      icon: <TrendingUp className="h-6 w-6" />,
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
    development: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      text: "text-blue-600",
      light: "bg-blue-50",
    },
    design: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      text: "text-purple-600",
      light: "bg-purple-50",
    },
    cloud: {
      bg: "bg-gradient-to-br from-green-500 to-green-600",
      text: "text-green-600",
      light: "bg-green-50",
    },
    support: {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Software & IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive software development, web solutions, mobile apps,
              and IT services designed to transform your business with
              cutting-edge technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-2xl md:text-3xl font-bold text-white">
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
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search software services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-96 px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600 font-medium">
              {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "service" : "services"} found
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
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          unsplashImages[service.fullSlug] ||
                          unsplashImages["web-development"]
                        }
                        alt={service.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#127cc9] transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.hero.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {service.hero.features
                          .slice(0, 2)
                          .map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#127cc9] mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm line-clamp-2">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="text-center p-2 rounded-lg bg-gray-50">
                          <div className="text-xs text-gray-600">Custom</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-gray-50">
                          <div className="text-xs text-gray-600">Fast</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-gray-50">
                          <div className="text-xs text-gray-600">Secure</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0cc0e1] to-[#127cc9] ">
                        View Service Details
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
                No services found
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Software Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Expert Development",
                description:
                  "10+ years of experience in software development with modern technologies",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Solutions",
                description:
                  "Enterprise-grade security and data protection measures",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Fast Delivery",
                description:
                  "Agile development methodology for faster time-to-market",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Scalable Architecture",
                description:
                  "Solutions designed to grow with your business needs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-[#127cc9] text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Need Custom Software Solutions?
          </motion.h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you need? Our team specializes in creating
            custom software solutions tailored to your specific business
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white text-[#07337a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Request Custom Solution
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Schedule Technical Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftDevList;
