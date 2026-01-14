import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Zap,
  BarChart,
  Target,
  Layers,
  Code,
  PenTool,
  Megaphone,
} from "lucide-react";
import {
  bulksms,
  bulkvoice,
  whatsappservice,
  digitalmarketing,
  whatsappchatbot,
  digitalautomation,
  designdevelopment,
  graphicdesign,
  alertsystem,
  ivrsystem,
  bulkemail,
  outdoormarketing,
} from "../../assets";

const ServicesWeOffer = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      number: "01",
      title: "SOFTWARE & IT SERVICES",
      services: [
        [
          "Custom Software Development",
          "Modern Responsive Website Development",
        ],
        ["Mobile Apps", "Courses and Internships"],
        ["WhatsApp API Integration", "Dynamic QR Code & Smart Link Generation"],
      ],
      icons: [designdevelopment, digitalautomation, whatsappservice],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      gradient: "from-blue-600 to-purple-700",
      icon: <Code className="w-6 h-6" />,
      description:
        "Comprehensive software solutions and IT services tailored to your business needs",
    },
    {
      id: 2,
      number: "02",
      title: "SOCIAL MEDIA MARKETING",
      services: [
        ["Bulk SMS & Voice Call Services", "WhatsApp Marketing Suite"],
        ["WhatsApp Promotions", "Meta Verified WhatsApp Services"],
        ["WhatsApp Chatbot Solutions", "Personal Number WhatsApp Service"],
        [
          "RICH Connect Application",
          "Lead Management & Automation via Masteraix.io",
        ],
        ["Podcast, Reel Shoot & Product Photography", ""],
      ],
      icons: [bulksms, bulkvoice, whatsappchatbot, digitalmarketing],
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop",
      gradient: "from-pink-500 to-rose-600",
      icon: <Megaphone className="w-6 h-6" />,
      description: "Boost your brand presence across social media platforms",
    },
    {
      id: 3,
      number: "03",
      title: "SEO SERVICES",
      services: [
        ["Local SEO", "Link Building"],
        ["E-Commerce SEO", "SEO Audit"],
        ["International SEO", "Managed SEO Services"],
      ],
      icons: [digitalmarketing, alertsystem],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-600",
      icon: <BarChart className="w-6 h-6" />,
      description:
        "Optimize your online visibility and climb search engine rankings",
    },
    {
      id: 4,
      number: "04",
      title: "DESIGN & DEVELOPMENT",
      services: [
        ["Custom Web Development", "UI/UX Design"],
        ["E-Commerce Development", "Product Design"],
        ["Enterprise Solutions", "Website Design"],
      ],
      icons: [designdevelopment, graphicdesign, outdoormarketing],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop",
      gradient: "from-orange-500 to-red-600",
      icon: <PenTool className="w-6 h-6" />,
      description: "Creative design and robust development solutions",
    },
    {
      id: 5,
      number: "05",
      title: "CONTENT MARKETING",
      services: [
        ["Strategy & Consulting", "Content Creation"],
        ["Content Optimization", "Content Promotion"],
      ],
      icons: [digitalmarketing, bulkemail],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      gradient: "from-indigo-500 to-blue-600",
      icon: <Layers className="w-6 h-6" />,
      description: "Engage your audience with strategic content solutions",
    },
    {
      id: 6,
      number: "06",
      title: "PERFORMANCE MARKETING",
      services: [
        ["PPC Advertising", "Social Media Advertising"],
        ["Conversion Rate Optimization", "Lead Generation"],
        ["Amazon Advertising", "YouTube Advertising"],
      ],
      icons: [digitalmarketing, ivrsystem],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      gradient: "from-purple-500 to-indigo-600",
      icon: <Target className="w-6 h-6" />,
      description: "Data-driven marketing strategies for measurable results",
    },
  ];

  const brandColor = "#b8c7e0";

  return (
    <section className="py-12 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-full mb-6 border border-blue-500/30"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              Our Services
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl text-[#b8c7e0] lg:text-6xl font-bold b8c7e0 mb-6">
            SERVICES
            <h1 className="block text-[#0bc0df] bg-clip-text">WE OFFER</h1>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Comprehensive digital solutions designed to accelerate your business
            growth
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Service Tabs */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeService === index
                        ? "bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
                        : "bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50"
                    }`}
                    whileHover={{ scale: activeService === index ? 1 : 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                          activeService === index
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-sm font-semibold ${
                              activeService === index
                                ? "text-cyan-400"
                                : "text-gray-400"
                            }`}
                          >
                            {service.number}
                          </span>
                          {activeService === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-cyan-400 rounded-full"
                            />
                          )}
                        </div>
                        <h3
                          className={`text-lg font-bold mb-2 ${
                            activeService === index
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            activeService === index
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Active Service Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Service Header with Image */}
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="relative h-64 md:h-80 lg:h-96">
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Service Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50"
                >
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Featured Technologies
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services[activeService].icons.map((icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 flex flex-col items-center justify-center hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <img
                          src={icon}
                          alt={`Tech ${index + 1}`}
                          className="w-12 h-12 object-contain mb-3"
                        />
                        <span className="text-xs text-gray-400 text-center">
                          Tech {index + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Service Features Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Service Features
                      </h4>
                      <p className="text-gray-400">
                        Comprehensive solutions tailored to your needs
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
                      <span className="text-sm font-semibold text-cyan-400">
                        {
                          services[activeService].services
                            .flat()
                            .filter(Boolean).length
                        }{" "}
                        Features
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services[activeService].services.map(
                      (column, colIndex) => (
                        <div key={colIndex} className="space-y-4">
                          {column.map(
                            (item, itemIndex) =>
                              item && (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: (colIndex + itemIndex) * 0.1,
                                  }}
                                  whileHover={{ x: 5 }}
                                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-cyan-500/20 transition-all duration-300 group"
                                >
                                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                  <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {item}
                                  </span>
                                </motion.div>
                              )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
