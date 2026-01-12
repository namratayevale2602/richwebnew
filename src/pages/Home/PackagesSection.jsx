import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Zap,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Globe,
  Smartphone,
  Shield,
  BarChart3,
} from "lucide-react";

const PackagesSection = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("growth");

  const packages = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for startups beginning their digital journey",
      tagline: "Build your foundation",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      badge: "Most Popular",
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Modern Responsive Website",
        },
        { icon: <Target className="w-4 h-4" />, text: "Basic SEO Setup" },
        {
          icon: <Smartphone className="w-4 h-4" />,
          text: "Social Media Setup",
        },
        { icon: <Shield className="w-4 h-4" />, text: "Basic Security" },
        { icon: <Check className="w-4 h-4" />, text: "Email Support" },
        { icon: <BarChart3 className="w-4 h-4" />, text: "Monthly Reports" },
      ],
      suitableFor: ["Startups", "Local Businesses", "Freelancers"],
      cta: "Get Started",
    },
    {
      id: "growth",
      name: "Growth",
      description: "Ideal for businesses scaling their digital presence",
      tagline: "Scale your success",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      badge: "Recommended",
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Everything in Starter" },
        {
          icon: <Smartphone className="w-4 h-4" />,
          text: "Mobile App Development",
        },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Advanced SEO" },
        { icon: <Target className="w-4 h-4" />, text: "Performance Marketing" },
        { icon: <Users className="w-4 h-4" />, text: "Content Strategy" },
        { icon: <Shield className="w-4 h-4" />, text: "Priority Support" },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Dedicated Manager",
        },
      ],
      suitableFor: ["Growing Businesses", "E-commerce", "Agencies"],
      cta: "Choose Growth",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Complete digital transformation for established businesses",
      tagline: "Lead your industry",
      icon: <Crown className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      badge: "Premium",
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Everything in Growth" },
        {
          icon: <Sparkles className="w-4 h-4" />,
          text: "Enterprise Solutions",
        },
        { icon: <TrendingUp className="w-4 h-4" />, text: "International SEO" },
        { icon: <Target className="w-4 h-4" />, text: "Advanced Automation" },
        {
          icon: <Users className="w-4 h-4" />,
          text: "Full Content Production",
        },
        { icon: <Shield className="w-4 h-4" />, text: "24/7 Priority Support" },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Custom Integrations",
        },
      ],
      suitableFor: ["Corporations", "Large Enterprises", "Global Brands"],
      cta: "Go Enterprise",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-blue-700">
              Tailored Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Growth Path
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Select the package that aligns with your business goals. Each tier
            offers comprehensive solutions designed to accelerate your digital
            transformation.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20 relative"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              custom={index}
              className="relative group"
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`bg-gradient-to-r ${pkg.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5`}
                  >
                    {pkg.badge === "Recommended" && (
                      <CheckCircle className="w-3 h-3" />
                    )}
                    {pkg.badge === "Most Popular" && (
                      <TrendingUp className="w-3 h-3" />
                    )}
                    {pkg.badge === "Premium" && <Crown className="w-3 h-3" />}
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-2xl shadow-lg border transition-all duration-500 overflow-hidden ${
                  selectedPackage === pkg.id
                    ? "border-blue-500 shadow-xl"
                    : "border-gray-100 hover:shadow-xl hover:border-gray-200"
                } ${hoveredPackage === pkg.id ? "scale-[1.02]" : ""}`}
              >
                {/* Package Header */}
                <div
                  className={`bg-gradient-to-r ${pkg.color} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {pkg.icon}
                      </div>
                      <span className="text-sm font-medium opacity-90">
                        {pkg.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Suitable For */}
                <div className="px-8 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {pkg.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <div className="space-y-4">
                    <AnimatePresence>
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature.text}
                          custom={featureIndex}
                          initial="hidden"
                          animate="visible"
                          variants={featureVariants}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-gray-50 to-white group-hover/feature:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <span className="text-sm text-gray-700 font-medium">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-8 pb-8 pt-2">
                  <motion.button
                    onClick={() => setSelectedPackage(pkg.id)}
                    whileHover={{
                      scale: 1.02,
                      y: -1,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden group ${
                      selectedPackage === pkg.id || pkg.badge === "Recommended"
                        ? "text-white"
                        : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                    }`}
                    style={{
                      backgroundColor:
                        selectedPackage === pkg.id ||
                        pkg.badge === "Recommended"
                          ? undefined
                          : "",
                      backgroundImage:
                        selectedPackage === pkg.id ||
                        pkg.badge === "Recommended"
                          ? `linear-gradient(to right, ${
                              pkg.color
                                .replace("from-", "")
                                .replace("to-", "")
                                .split(" ")[0]
                            }, ${
                              pkg.color
                                .replace("from-", "")
                                .replace("to-", "")
                                .split(" ")[1]
                            })`
                          : "",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>

                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                All Packages Include
              </h3>
              <p className="text-gray-600">
                Every plan comes with our core features to ensure your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Secure Infrastructure",
                  desc: "Enterprise-grade security for your digital assets",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Expert Support",
                  desc: "Access to our team of digital transformation experts",
                },
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: "Performance Tracking",
                  desc: "Regular insights and optimization recommendations",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-100 border-dashed">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-white shadow-lg">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We tailor packages specifically for your unique business needs
                and goals
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 12px 30px rgba(37, 99, 235, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f8fafc",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-xl font-bold shadow-sm border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 group"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Free consultation • Personalized proposal • No commitment
                required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
