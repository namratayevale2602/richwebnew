import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  Cpu,
  Wrench,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Calendar,
  Target,
  Layers,
  Database,
  Server,
  Globe,
  ArrowRight,
  Clock,
  DollarSign,
  Headphones,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
// Import JSON data
import servicesData from "../../data/softdev.json";

// Technology icons mapping
const techIcons = {
  "React.js": <Code className="h-5 w-5" />,
  "Next.js": <Globe className="h-5 w-5" />,
  TypeScript: <Code className="h-5 w-5" />,
  Angular: <Code className="h-5 w-5" />,
  "Vue.js": <Code className="h-5 w-5" />,
  "Tailwind CSS": <Palette className="h-5 w-5" />,
  "Material-UI": <Palette className="h-5 w-5" />,
  "Node.js": <Server className="h-5 w-5" />,
  "Python/Django": <Server className="h-5 w-5" />,
  "PHP/Laravel": <Server className="h-5 w-5" />,
  "Java/Spring Boot": <Server className="h-5 w-5" />,
  ".NET Core": <Server className="h-5 w-5" />,
  "Ruby on Rails": <Server className="h-5 w-5" />,
  Go: <Server className="h-5 w-5" />,
  PostgreSQL: <Database className="h-5 w-5" />,
  MySQL: <Database className="h-5 w-5" />,
  MongoDB: <Database className="h-5 w-5" />,
  Redis: <Database className="h-5 w-5" />,
  Firebase: <Database className="h-5 w-5" />,
  Elasticsearch: <Database className="h-5 w-5" />,
  Supabase: <Database className="h-5 w-5" />,
  WordPress: <Globe className="h-5 w-5" />,
  Contentful: <Globe className="h-5 w-5" />,
  Sanity: <Globe className="h-5 w-5" />,
  Strapi: <Globe className="h-5 w-5" />,
  Shopify: <ShoppingCart className="h-5 w-5" />,
  Magento: <ShoppingCart className="h-5 w-5" />,
  WooCommerce: <ShoppingCart className="h-5 w-5" />,
  AWS: <Cloud className="h-5 w-5" />,
  Azure: <Cloud className="h-5 w-5" />,
  "Google Cloud": <Cloud className="h-5 w-5" />,
  Docker: <Server className="h-5 w-5" />,
  Kubernetes: <Server className="h-5 w-5" />,
  "CI/CD Pipelines": <Server className="h-5 w-5" />,
  "Vercel/Netlify": <Globe className="h-5 w-5" />,
};

// Benefit icons mapping
const benefitIcons = {
  "Custom Solutions for Unique Needs": <Target className="h-6 w-6" />,
  "Better Performance & User Experience": <Zap className="h-6 w-6" />,
  "SEO-Friendly Architecture": <TrendingUp className="h-6 w-6" />,
  "Scalability for Growth": <Layers className="h-6 w-5" />,
  "Enhanced Security": <Shield className="h-6 w-6" />,
  "Competitive Advantage": <TrendingUp className="h-6 w-6" />,
  "Complete Customization": <Target className="h-6 w-6" />,
};

// Unsplash Images
const unsplashImages = {
  "custom-software-development":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center",
  "web-development":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop&crop=center",
  "ui-ux-design":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop&crop=center",
  "ecommerce-solutions":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
  "cloud-solutions":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center",
  "api-integration":
    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop&crop=center",
  "maintenance-support":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop&crop=center",
};

const SoftDev = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const pathParts = location.pathname.split("/");
  const softdevSlug = pathParts[pathParts.length - 1];

  const seoKey =
    softdevSlug && softdevSlug !== "software-it-services"
      ? slugToSeoKeyMap[softdevSlug]
      : "softwareIT";

  useSEO(seoKey || "notFound");

  // Create subpage object for ServiceIntro
  const subpage = {
    details:
      softdevSlug && softdevSlug !== "software-it-services"
        ? softdevSlug
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#127cc9] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/software-it-services")}
            className="bg-gradient-to-r from-[#127cc9] to-[#07337a] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0cc0e1] hover:to-[#127cc9] transition-all"
          >
            Browse All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden pt-24 pb-4 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-7 items-center"
          >
            {/* Text Content */}
            <div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#b8c7e0] mb-3 md:mb-6 leading-tight">
                {service.hero.title}
              </h1>

              <p className=" md:text-xl text-[#0bc0df] mb-3 md:mb-8 leading-relaxed">
                {service.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-5 md:mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-white/12 text-[#e5edfc] md:px-8 md:py-4 py-2 rounded-xl md:font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
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
                  src={
                    unsplashImages[slug] || unsplashImages["web-development"]
                  }
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
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {service.hero.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/12 md:p-6 p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#127cc9] p-3 rounded-xl">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-[#e5edfc] md:text-lg md:font-medium">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Deliver Section */}
      {service.whatWeDeliver && (
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-[#b8c7e0] mb-6">
                {service.whatWeDeliver.title}
              </h1>
              <p className="md:text-lg text-[#0bc0df] max-w-3xl mx-auto">
                {service.whatWeDeliver.description}
              </p>
            </div>

            {service.whatWeDeliver.solutions && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.whatWeDeliver.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/12 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl ${
                          index % 3 === 0
                            ? "bg-blue-100"
                            : index % 3 === 1
                            ? "bg-blue-100"
                            : "bg-purple-100"
                        }`}
                      >
                        <Code className="h-8 w-8 text-[#127cc9]" />
                      </div>
                      <h3 className="md:text-2xl font-bold text-[#e5edfc]">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-[#0bc0df] mb-6">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#127cc9] mt-1 flex-shrink-0" />
                          <span className="text-[#e5edfc]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && (
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-[#e5edfc] mb-6">
                {service.process.title}
              </h1>
              <p className="md:text-lg text-[#0bc0df] max-w-3xl mx-auto">
                {service.process.description}
              </p>
            </div>

            {service.process.steps && (
              <div className="relative">
                <div className="space-y-8">
                  {service.process.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`h-14 w-14 rounded-xl flex items-center justify-center ${
                            index === 0
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : index === 1
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : index === 2
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : index === 3
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : index === 4
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                          }`}
                        >
                          <span className="text-2xl font-bold">
                            {index + 1}
                          </span>
                        </div>
                        {index < service.process.steps.length - 1 && (
                          <div className="h-full w-0.5 bg-gradient-to-b from-blue-200 to-transparent my-2"></div>
                        )}
                      </div>

                      <div className="flex-1 bg-white/12 p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="md:text-2xl font-bold text-[#e5edfc] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[#0bc0df] mb-6">
                          {step.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.activities &&
                            step.activities.map((activity, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 p-3 rounded-lg"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#127cc9]"></div>
                                <span className="text-[#e5edfc]">
                                  {activity}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-[#e5edfc] mb-6">
                {service.benefits.title}
              </h1>
              <p className="text-lg text-[#0bc0df] max-w-3xl mx-auto">
                {service.benefits.description}
              </p>
            </div>

            {service.benefits.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.points.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white/12 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-[#127cc9] text-white">
                        {benefitIcons[benefit.title] || (
                          <TrendingUp className="h-6 w-6" />
                        )}
                      </div>
                      <h3 className="md:text-xl font-bold text-[#e5edfc]">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-[#e5edfc]">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-trransparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-[#b8c7e0] mb-6">
              Ready to Get Started?
            </h1>
            <p className="md:text-lg text-[#0bc0df] max-w-3xl mx-auto">
              Contact us today for a free consultation and let's build something
              amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/12 p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="md:text-2xl font-bold text-[#b8c7e0] mb-6">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#e5edfc] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#127cc9] focus:ring-2 text-[#e5edfc] focus:ring-blue-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e5edfc] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#127cc9] focus:ring-2 text-[#e5edfc] focus:ring-blue-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e5edfc] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border text-[#e5edfc] border-gray-300 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e5edfc] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg text-[#e5edfc] border border-gray-300 focus:border-[#127cc9] focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0cc0e1] to-[#127cc9] text-white md:py-4 py-2 rounded-xl font-semibold text-lg hover:from-[#0cc0e1]"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#127cc9]/12 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl text-[#b8c7e0] font-bold mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6" />
                    <div>
                      <h4 className="text-[#e5edfc] font-semibold">
                        Quick Response
                      </h4>
                      <p className="text-white/80">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <DollarSign className="h-6 w-6" />
                    <div>
                      <h4 className="text-[#e5edfc] font-semibold">
                        Transparent Pricing
                      </h4>
                      <p className="text-white/80">No hidden costs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Headphones className="h-6 w-6" />
                    <div>
                      <h4 className="text-[#e5edfc] font-semibold">
                        24/7 Support
                      </h4>
                      <p className="text-white/80">Dedicated support team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/12 p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#b8c7e0] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-[#127cc9]" />
                    <a
                      href="tel:+919595902006"
                      className="text-[#e5edfc] hover:text-[#127cc9] transition-colors"
                    >
                      +91 95959 02006
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-[#127cc9]" />
                    <a
                      href="mailto:support@richsol.com"
                      className="text-[#e5edfc] hover:text-[#127cc9] transition-colors"
                    >
                      support@richsol.com
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-[#127cc9] mt-1" />
                    <p className="text-[#e5edfc]">
                      4th Floor, Akravi Disha, Nashik, Maharashtra 422002
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-[#b8c7e0] mb-6"
          >
            Ready to Transform Your Business?
          </motion.h1>
          <p className="text-xl text-[#0bc0df] mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a solution that exceeds your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white/12 text-[#b8c7e0] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftDev;
