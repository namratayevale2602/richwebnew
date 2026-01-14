import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import herovideo from "../../assets/homeimg/global.mp4";
import { business, digital, software } from "../../assets";

// Import React Icons from specific libraries
// Lucide React Icons
import {
  Globe,
  Shield,
  Cloud,
  Wrench,
  TrendingUp,
  Smartphone,
  Phone,
  Video,
  Users,
  LifeBuoy,
  Moon,
  Monitor,
  GraduationCap,
  Plug,
  BarChart3,
  FileText,
  Target,
  Mail,
  Film,
  Camera,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

// Font Awesome Icons
import { FaCode, FaSearch, FaPenFancy } from "react-icons/fa";

// Material Design Icons
import { MdWeb } from "react-icons/md";

// Optimized service data with categories and popular combinations
const servicesData = {
  "Software Development": {
    description: "Custom software solutions tailored to your business needs",
    icon: software,
    category: "development",
    popular: true,
    features: [
      {
        id: "static_website",
        name: "Static Website",
        description: "5 pages, responsive design, contact form",
        duration: "7-10 days",
        icon: <MdWeb className="w-6 h-6" />,
      },
      {
        id: "dynamic_website",
        name: "Dynamic Website",
        description: "CMS, admin panel, dynamic content",
        duration: "15-20 days",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        id: "ecommerce",
        name: "E-commerce Platform",
        description: "Product catalog, payment gateway, order management",
        duration: "25-30 days",
        icon: <ShoppingBag className="w-6 h-6" />,
      },
      {
        id: "web_app",
        name: "Custom Web Application",
        description: "Custom features, user management, database",
        duration: "30-45 days",
        icon: <FaCode className="w-6 h-6" />,
      },
      {
        id: "mobile_app",
        name: "Mobile App Development",
        description: "iOS/Android, native performance",
        duration: "35-50 days",
        icon: <Smartphone className="w-6 h-6" />,
      },
    ],
    addons: [
      {
        id: "domain",
        name: "Domain Registration (.com/.in)",
        duration: "1 year",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        id: "hosting",
        name: "Web Hosting",
        description: "1 Year Premium Hosting",
        duration: "1 year",
        icon: <Cloud className="w-6 h-6" />,
      },
      {
        id: "ssl",
        name: "SSL Certificate",
        duration: "1 year",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        id: "maintenance",
        name: "Website Maintenance",
        description: "Monthly updates & support",
        duration: "1 year",
        icon: <Wrench className="w-6 h-6" />,
      },
      {
        id: "seo_setup",
        name: "Basic SEO Setup",
        duration: "One-time",
        icon: <TrendingUp className="w-6 h-6" />,
      },
    ],
  },
  "Digital Marketing": {
    description: "Data-driven marketing strategies to grow your business",
    icon: digital,
    category: "marketing",
    popular: true,
    features: [
      {
        id: "social_media",
        name: "Social Media Management",
        description: "3 platforms, 15 posts/month",
        duration: "Monthly",
        icon: <Smartphone className="w-6 h-6" />,
      },
      {
        id: "seo",
        name: "SEO Services",
        description: "Keyword research, on-page SEO, tracking",
        duration: "Monthly",
        icon: <FaSearch className="w-6 h-6" />,
      },
      {
        id: "ppc",
        name: "PPC Campaign Management",
        description: "Google Ads, Facebook Ads setup & management",
        duration: "Monthly",
        icon: <Target className="w-6 h-6" />,
      },
      {
        id: "content",
        name: "Content Marketing",
        description: "8 blog posts, content strategy",
        duration: "Monthly",
        icon: <FaPenFancy className="w-6 h-6" />,
      },
      {
        id: "email",
        name: "Email Marketing",
        description: "Campaign setup, 5000 subscribers",
        duration: "Monthly",
        icon: <Mail className="w-6 h-6" />,
      },
    ],
    addons: [
      {
        id: "reel",
        name: "1 Reel Creation",
        duration: "One-time",
        icon: <Film className="w-6 h-6" />,
      },
      {
        id: "video_ad",
        name: "1 Video Ad (30 sec)",
        duration: "One-time",
        icon: <Camera className="w-6 h-6" />,
      },
      {
        id: "social_ads",
        name: "Social Media Ads",
        description: "Ad creation & placement",
        duration: "Monthly",
        icon: <Sparkles className="w-6 h-6" />,
      },
      {
        id: "analytics",
        name: "Analytics Dashboard",
        duration: "Monthly",
        icon: <BarChart3 className="w-6 h-6" />,
      },
      {
        id: "reporting",
        name: "Monthly Performance Report",
        duration: "Monthly",
        icon: <FileText className="w-6 h-6" />,
      },
    ],
  },
  "Business Communication": {
    description: "Streamline your business communications and operations",
    icon: business,
    category: "communication",
    popular: false,
    features: [
      {
        id: "voip",
        name: "VoIP Phone System",
        description: "10 users, call routing, voicemail",
        duration: "Setup + Monthly",
        icon: <Phone className="w-6 h-6" />,
      },
      {
        id: "video_conf",
        name: "Video Conferencing Setup",
        description: "Zoom/Teams setup, hardware integration",
        duration: "One-time",
        icon: <Video className="w-6 h-6" />,
      },
      {
        id: "crm",
        name: "CRM Integration",
        description: "Sales pipeline, customer management",
        duration: "One-time",
        icon: <Users className="w-6 h-6" />,
      },
      {
        id: "collaboration",
        name: "Team Collaboration Tools",
        description: "Slack/Teams setup, workflows",
        duration: "One-time",
        icon: <Users className="w-6 h-6" />,
      },
      {
        id: "support_system",
        name: "Customer Support System",
        description: "Ticketing, live chat, knowledge base",
        duration: "One-time",
        icon: <LifeBuoy className="w-6 h-6" />,
      },
    ],
    addons: [
      {
        id: "support_24x7",
        name: "24/7 Support",
        duration: "Monthly",
        icon: <Moon className="w-6 h-6" />,
      },
      {
        id: "hardware",
        name: "Hardware Setup",
        duration: "One-time",
        icon: <Monitor className="w-6 h-6" />,
      },
      {
        id: "training",
        name: "Training Sessions",
        description: "4 sessions for your team",
        duration: "One-time",
        icon: <GraduationCap className="w-6 h-6" />,
      },
      {
        id: "custom_integration",
        name: "Custom Integration",
        duration: "One-time",
        icon: <Plug className="w-6 h-6" />,
      },
    ],
  },
};

const Hero = () => {
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);

  // Optimized scroll handlers
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center px-2 sm:px-6 pt-24 md:pt-34 sm:pt-38 overflow-hidden bg-transparent"
    >
      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mt-2 rounded-full bg-blue-50/80 border border-blue-200/50 mb-4 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca]  rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <span className="text-xs font-medium text-blue-700">
            Transform Your Digital Presence
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#b8c7e0] mb-4 leading-tight"
        >
          From Strategy to Software
          <br />
          <motion.span className="bg-[#0bc0df] bg-clip-text text-transparent">
            We Build, Market & Scale
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-md sm:text-xl text-[#b8c7e0] mb-4 leading-relaxed max-w-3xl mx-auto"
        >
          Choose your service, customize your package, and create enquiry
        </motion.p>

        {/* Services Selection */}

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mt-2 max-w-4xl mx-auto "
        >
          {Object.entries(servicesData).map(([serviceName, serviceData]) => (
            <motion.div
              key={serviceName}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="md:bg-white/12 backdrop-blur-sm rounded-2xl p-2 md:p-6 shadow-md border border-gray-200/50 hover:border-blue-300/50 cursor-pointer transition-all duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <img
                  className="w-28 h-28 mx-auto md:mb-4 object-contain filter drop-shadow-lg "
                  src={serviceData.icon}
                  alt={serviceName}
                />

                <h3 className="text-xs md:text-xl font-bold text-[#b8c7e0] mb-2 transition-colors">
                  {serviceName}
                </h3>
                <p className="text-[#e5edfc] text-sm mb-4 leading-relaxed transition-colors hidden md:flex">
                  {serviceData.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Video Section */}
      <div ref={videoContainerRef} className="w-full flex justify-center my-12">
        <motion.div
          style={{ scale, opacity }}
          className="w-full max-w-4xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200/50"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <source src={herovideo} type="video/mp4" />
          </motion.video>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
