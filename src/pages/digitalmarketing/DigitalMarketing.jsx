import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Search,
  TrendingUp,
  Users,
  Mail,
  MessageSquare,
  Smartphone,
  Palette,
  Film,
  Globe,
  Target,
  Shield,
  Zap,
  Layers,
  Calendar,
  ArrowRight,
  ChevronRight,
  Clock,
  DollarSign,
  Headphones,
  Phone,
  MapPin,
  Home,
  Briefcase,
  BarChart3,
  FileText,
  Share2,
  Megaphone,
  Image as ImageIcon,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";

// Import JSON data
import servicesData from "../../data/digitalMarketingData.json";

// Service icons mapping
const serviceIcons = {
  "SEO Services": <Search className="h-6 w-6" />,
  "Social Media Marketing": <Share2 className="h-6 w-6" />,
  "PPC Advertising": <Megaphone className="h-6 w-6" />,
  "Content Marketing": <FileText className="h-6 w-6" />,
  "Email Marketing": <Mail className="h-6 w-6" />,
  "WhatsApp Marketing": <MessageSquare className="h-6 w-6" />,
  "Bulk SMS Marketing": <Smartphone className="h-6 w-6" />,
  "Graphic Design": <Palette className="h-6 w-6" />,
  "Video Marketing": <Film className="h-6 w-6" />,
};

// Benefit icons mapping
const benefitIcons = {
  "Increased Visibility": <Globe className="h-6 w-6" />,
  "Higher Conversion Rates": <TrendingUp className="h-6 w-6" />,
  "Better ROI": <DollarSign className="h-6 w-6" />,
  "Brand Authority": <Shield className="h-6 w-6" />,
  "Targeted Audience": <Target className="h-6 w-6" />,
  "Measurable Results": <BarChart3 className="h-6 w-6" />,
};

// Unsplash Images for Digital Marketing
const unsplashImages = {
  seo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
  "social-media-marketing":
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center",
  "ppc-advertising":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&crop=center",
  "content-marketing":
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center",
  "email-marketing":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop&crop=center",
  "whatsapp-marketing":
    "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&h=600&fit=crop&crop=center",
  "bulk-sms":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=center",
  "graphic-design":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop&crop=center",
  "video-marketing":
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&h=600&fit=crop&crop=center",
};

const DigitalMarketing = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const pathParts = location.pathname.split("/");
  const digitalmarketingSlug = pathParts[pathParts.length - 1];

  const seoKey =
    digitalmarketingSlug &&
    digitalmarketingSlug !== "digital-marketing-services"
      ? slugToSeoKeyMap[digitalmarketingSlug]
      : "digitalMarketingServices";

  useSEO(seoKey || "notFound");

  // Create subpage object for ServiceIntro
  const subpage = {
    details:
      digitalmarketingSlug &&
      digitalmarketingSlug !== "digital-marketing-services"
        ? digitalmarketingSlug
        : null,
  };

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      const serviceData = servicesData[slug];
      if (serviceData) {
        setService(serviceData);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Default image if service slug not found
  const getServiceImage = (slugKey) => {
    return (
      unsplashImages[slugKey] ||
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center"
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#127cc9] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The digital marketing service you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/digital-marketing")}
            className="bg-gradient-to-r from-[#127cc9] to-[#07337a] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0cc0e1] hover:to-[#127cc9] transition-all"
          >
            Browse All Marketing Services
          </button>
        </div>
      </div>
    );
  }

  const imageKey = slug.split("-").pop();
  const serviceImage = getServiceImage(imageKey);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt={service.label}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.hero.title}
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {service.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-white text-[#07337a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get Free Marketing Audit
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("strategies")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  View Strategies
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImage}
                  alt={service.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      {service.hero.features && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.hero.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#127cc9] p-3 rounded-xl">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      {service.whatWeDeliver && (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Home className="h-8 w-8 text-[#127cc9]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.whatWeDeliver.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {service.whatWeDeliver.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">
                    Our Approach
                  </h3>
                  <ul className="space-y-3">
                    {service.whatWeDeliver.approach?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#127cc9] mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">
                    Key Metrics
                  </h3>
                  <ul className="space-y-3">
                    {service.whatWeDeliver.metrics?.map((metric, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700">{metric.label}</span>
                        <span className="font-bold text-[#127cc9]">
                          {metric.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {service.solutions && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Briefcase className="h-8 w-8 text-[#127cc9]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Comprehensive Solutions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-[#127cc9] text-white">
                        {serviceIcons[solution.title] || (
                          <TrendingUp className="h-6 w-6" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#127cc9] mt-2"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Strategies Section */}
      {service.strategies && (
        <section id="strategies" className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <BarChart3 className="h-8 w-8 text-[#127cc9]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.strategies.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {service.strategies.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {service.strategies.items?.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[#127cc9] text-white">
                          {strategy.icon || <BarChart3 className="h-6 w-6" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {strategy.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {strategy.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {strategy.tactics?.map((tactic, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-white rounded-lg border border-blue-100"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#127cc9] flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {tactic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Calendar className="h-8 w-8 text-[#127cc9]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.process.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {service.process.description}
                  </p>
                </div>
              </div>

              {service.process.steps && (
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.process.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[#127cc9] text-white">
                            <span className="text-xl font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.activities?.map((activity, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#127cc9]"></div>
                              <span className="text-gray-700 text-sm">
                                {activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <TrendingUp className="h-8 w-8 text-[#127cc9]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.benefits.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {service.benefits.description}
                  </p>
                </div>
              </div>

              {service.benefits.points && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.points.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-[#127cc9] text-white">
                          {benefitIcons[benefit.title] || (
                            <TrendingUp className="h-6 w-6" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Ready to Boost Your Marketing?
              </h2>
            </div>

            <p className="text-lg text-white/90 mb-8">
              Contact us today for a free marketing audit and let's create a
              strategy that drives real results for your business.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marketing Goals
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Tell us about your marketing objectives..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#127cc9] to-[#07337a] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#0cc0e1] hover:to-[#127cc9] transition-all shadow-lg"
                  >
                    Get Free Marketing Plan
                  </motion.button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#07337a] to-[#127cc9] text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Target className="h-6 w-6" />,
                        title: "Targeted Approach",
                        desc: "Precision targeting for maximum impact",
                      },
                      {
                        icon: <TrendingUp className="h-6 w-6" />,
                        title: "Proven Results",
                        desc: "Data-driven strategies that work",
                      },
                      {
                        icon: <Headphones className="h-6 w-6" />,
                        title: "Dedicated Support",
                        desc: "Personal account manager",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        {item.icon}
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Phone className="h-5 w-5 text-[#127cc9]" />,
                        text: "+91 95959 02006",
                      },
                      {
                        icon: <Mail className="h-5 w-5 text-[#127cc9]" />,
                        text: "marketing@richsol.com",
                      },
                      {
                        icon: <MapPin className="h-5 w-5 text-[#127cc9]" />,
                        text: "4th Floor, Akravi Disha, Nashik, Maharashtra 422002",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        {item.icon}
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
