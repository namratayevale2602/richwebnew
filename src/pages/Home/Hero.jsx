import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import herovideo from "../../assets/homeimg/global.mp4";
import {
  business,
  digital,
  Richlogo,
  software,
  trustedClient,
} from "../../assets";

// Import React Icons from specific libraries
// Lucide React Icons
import {
  Globe,
  Shield,
  Cloud,
  Wrench,
  TrendingUp,
  Smartphone,
  Zap,
  ShoppingCart,
  Rocket,
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
  Bell,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ChevronLeft,
  ArrowRight,
  RotateCw,
  Sparkles as SparklesIcon,
} from "lucide-react";

// Font Awesome Icons
import {
  FaCode,
  FaSearch,
  FaPenFancy,
  FaEnvelope,
  FaCogs,
  FaFire,
  FaStar,
  FaBolt,
} from "react-icons/fa";

// Material Design Icons
import { MdWeb, MdStore, MdChatBubble, MdDashboard } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

// Hero Icons
import { HiOutlineLightningBolt } from "react-icons/hi";

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

// Popular service combinations for quick add (without pricing)
const popularPackages = {
  "Software Development": [
    {
      name: "Starter Website Package",
      items: ["static_website", "domain", "hosting", "ssl"],
      description: "Perfect for small businesses",
      badge: "Popular",
      badgeIcon: <FaFire className="w-3 h-3" />,
    },
    {
      name: "Business Website Package",
      items: ["dynamic_website", "domain", "hosting", "ssl", "seo_setup"],
      description: "Complete online presence",
      badge: "Recommended",
      badgeIcon: <FaStar className="w-3 h-3" />,
    },
  ],
  "Digital Marketing": [
    {
      name: "Social Media Starter",
      items: ["social_media", "reel", "video_ad"],
      description: "Boost your social presence",
      badge: "Trending",
      badgeIcon: <FaBolt className="w-3 h-3" />,
    },
  ],
};

const Hero = () => {
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  // Remove totalPrice calculation since we're not showing pricing
  const totalItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  // Memoized service data
  const currentService = useMemo(
    () => (selectedService ? servicesData[selectedService] : null),
    [selectedService]
  );

  // Optimized scroll handlers
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Cart management functions
  const addToCart = useCallback((item, type, service) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id && cartItem.service === service
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          type,
          service,
          quantity: 1,
          addedAt: new Date().toISOString(),
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((itemId, service) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === itemId && item.service === service
      );

      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return prev.filter(
        (item) => !(item.id === itemId && item.service === service)
      );
    });
  }, []);

  const deleteFromCart = useCallback((itemId, service) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === itemId && item.service === service))
    );
  }, []);

  const addPopularPackage = useCallback(
    (pkg, service) => {
      pkg.items.forEach((itemId) => {
        const feature = servicesData[service].features.find(
          (f) => f.id === itemId
        );
        const addon = servicesData[service].addons.find((a) => a.id === itemId);

        if (feature && !cartItems.some((item) => item.id === itemId)) {
          addToCart(feature, "feature", service);
        }
        if (addon && !cartItems.some((item) => item.id === itemId)) {
          addToCart(addon, "addon", service);
        }
      });
    },
    [addToCart, cartItems]
  );

  // Check if item is in cart
  const isInCart = useCallback(
    (itemId, service) => {
      return cartItems.some(
        (item) => item.id === itemId && item.service === service
      );
    },
    [cartItems]
  );

  // Get item quantity from cart
  const getItemQuantity = useCallback(
    (itemId, service) => {
      const item = cartItems.find(
        (item) => item.id === itemId && item.service === service
      );
      return item ? item.quantity : 0;
    },
    [cartItems]
  );

  const handleInquiry = useCallback(() => {
    const inquiryData = {
      services: cartItems,
      itemsCount: totalItemsCount,
      contactInfo: {},
      timestamp: new Date().toISOString(),
    };

    console.log("Inquiry Generated:", inquiryData);
    alert(
      `Inquiry generated successfully!\n${totalItemsCount} items selected\nOur team will contact you with a customized quote.`
    );
  }, [cartItems, totalItemsCount]);

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
      {/* Enhanced Floating Cart Button */}
      <AnimatePresence>
        {cartItems.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            onClick={() => setShowCart(true)}
            className="fixed top-6 right-18 z-50 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.div>
              <motion.span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {totalItemsCount}
              </motion.span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-5 overflow-y-auto border-l border-gray-200/50"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200/50">
                <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Selection
                </h3>
                <motion.button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XCircle className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="space-y-3 mb-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.service}-${index}`}
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/80 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-800 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-600 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                        {item.service}
                      </p>
                      <p className="text-sm font-medium text-blue-600 flex items-center">
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 ml-2">
                      <motion.button
                        onClick={() => removeFromCart(item.id, item.service)}
                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </motion.button>
                      <span className="w-6 text-center font-semibold text-xs text-gray-700 bg-gray-100 rounded-lg py-1">
                        {item.quantity}
                      </span>
                      <motion.button
                        onClick={() => addToCart(item, item.type, item.service)}
                        className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </motion.button>
                      <motion.button
                        onClick={() => deleteFromCart(item.id, item.service)}
                        className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200 ml-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-200/50 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-900">Total Items:</span>
                  <motion.span
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    {totalItemsCount}
                  </motion.span>
                </div>
                <motion.button
                  onClick={handleInquiry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Generate Enquiry
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
        {!selectedService ? (
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
                onClick={() => setSelectedService(serviceName)}
                className="md:bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 shadow-md border border-gray-200/50 hover:border-blue-300/50 cursor-pointer transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <img
                    className="w-28 h-28 mx-auto md:mb-4 object-contain filter drop-shadow-lg "
                    src={serviceData.icon}
                    alt={serviceName}
                  />

                  <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {serviceName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors hidden md:flex">
                    {serviceData.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Enhanced Service Details */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-7xl mx-auto mt-6"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Service Configuration */}
              <div className="flex-1">
                <motion.div
                  className="flex items-center justify-between mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="flex items-center text-xs md:text-md text-gray-600 hover:text-gray-900 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-gray-100/50 font-medium group"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <motion.span initial={{ x: 0 }} whileHover={{ x: -3 }}>
                      Back to Services
                    </motion.span>
                  </motion.button>
                  <motion.h2
                    className="text-xs md:text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    {selectedService}
                  </motion.h2>
                  <div className="text-xs md:text-xl text-gray-500 bg-gray-100/50 px-3 py-1 rounded-lg flex items-center">
                    <ShoppingBag className="w-3 h-3 mr-1" />
                    {
                      cartItems.filter(
                        (item) => item.service === selectedService
                      ).length
                    }{" "}
                    items
                  </div>
                </motion.div>

                {/* Enhanced Quick Packages */}
                {popularPackages[selectedService] && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xs md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.span>
                      Quick Packages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {popularPackages[selectedService].map((pkg, index) => (
                        <motion.div
                          key={pkg.name}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: index * 0.15 }}
                          className="p-4 border-2 border-dashed border-blue-200/50 rounded-xl bg-gradient-to-br from-blue-50/50 to-white cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all duration-500 group relative overflow-hidden"
                          onClick={() =>
                            addPopularPackage(pkg, selectedService)
                          }
                          whileHover={{ y: -2, scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold text-blue-900 text-xs md:text-xl">
                                    {pkg.name}
                                  </h4>
                                  {pkg.badge && (
                                    <motion.span
                                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: index * 0.3 }}
                                    >
                                      {pkg.badgeIcon}
                                      {pkg.badge}
                                    </motion.span>
                                  )}
                                </div>
                                <p className="text-xs md:text-xl text-blue-700/80 leading-relaxed">
                                  {pkg.description}
                                </p>
                              </div>
                              <motion.span
                                className="font-bold text-blue-900 text-xs md:text-xl bg-white/80 px-3 py-2 rounded-lg border border-blue-200/50 shadow-sm flex items-center"
                                whileHover={{ scale: 1.05 }}
                              >
                                <IoIosAddCircleOutline className="w-3 h-3 mr-1" />
                                Package
                              </motion.span>
                            </div>
                            <motion.div
                              className="text-xs md:text-xl text-blue-600/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            >
                              <motion.span
                                className="mr-2"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <HiOutlineLightningBolt className="w-3 h-3" />
                              </motion.span>
                              Click to add package
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Tab Navigation */}
                <motion.div
                  className="flex space-x-1 mb-6 p-1 bg-gray-100/50 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    {
                      id: "features",
                      label: "Main Features",
                      icon: <CheckCircle className="w-4 h-4" />,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      id: "addons",
                      label: "Additional Services",
                      icon: <Wrench className="w-4 h-4" />,
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-6 py-3 rounded-xl text-xs md:text-xl font-medium transition-all duration-500 flex-1 relative overflow-hidden ${
                        activeTab === tab.id
                          ? "text-white shadow-lg"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${tab.color}`}
                          layoutId="activeTab"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center">
                        <span className="mr-3">{tab.icon}</span>
                        {tab.label}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>

                {/* Enhanced Features & Addons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  {(activeTab === "features"
                    ? currentService.features
                    : currentService.addons
                  ).map((item, index) => (
                    <EnhancedServiceItem
                      key={item.id}
                      item={item}
                      service={selectedService}
                      isInCart={isInCart}
                      getItemQuantity={getItemQuantity}
                      onAdd={() =>
                        addToCart(
                          item,
                          activeTab === "features" ? "feature" : "addon",
                          selectedService
                        )
                      }
                      onRemove={() => removeFromCart(item.id, selectedService)}
                      onDelete={() => deleteFromCart(item.id, selectedService)}
                      index={index}
                      isFeature={activeTab === "features"}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Selection Summary (Replaced Pricing Summary) */}
              <div className="lg:w-80">
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-gray-200/50 sticky top-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Selection Summary
                  </h3>

                  <div className="space-y-3 mb-4 max-h-80 overflow-y-auto pr-2">
                    {cartItems
                      .filter((item) => item.service === selectedService)
                      .map((item, index) => (
                        <motion.div
                          key={`${item.id}-${index}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex justify-between items-center py-2 px-3 rounded-xl hover:bg-gray-50/50 border border-transparent hover:border-gray-200/50 transition-all duration-300 group"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-800 text-xs truncate group-hover:text-gray-900">
                              {item.name}
                            </p>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-xs md:text-xl text-gray-500 group-hover:text-gray-600 flex items-center">
                                <ShoppingBag className="w-3 h-3 mr-1" />
                                Qty: {item.quantity}
                              </p>
                              <span className="font-bold text-gray-900 text-xs group-hover:text-blue-600 transition-colors flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Selected
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  <div className="border-t border-gray-200/50 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900">
                        Total Items:
                      </span>
                      <motion.span
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ShoppingBag className="w-5 h-5 mr-1" />
                        {totalItemsCount}
                      </motion.span>
                    </div>

                    <motion.button
                      onClick={handleInquiry}
                      disabled={cartItems.length === 0}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-sm relative overflow-hidden ${
                        cartItems.length === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                      }`}
                      whileHover={
                        cartItems.length === 0 ? {} : { scale: 1.02, y: -1 }
                      }
                      whileTap={cartItems.length === 0 ? {} : { scale: 0.98 }}
                    >
                      {cartItems.length === 0 ? (
                        <span className="flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Add Services to Continue
                        </span>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <span className="relative z-10 flex items-center justify-center">
                            <motion.span
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="mr-2"
                            >
                              <Rocket className="w-4 h-4" />
                            </motion.span>
                            Generate Enquiry
                          </span>
                        </>
                      )}
                    </motion.button>

                    {cartItems.length > 0 && (
                      <motion.p
                        className="text-center text-xs md:text-xl text-gray-600 mt-3 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}{" "}
                        items • {cartItems.length} services
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Enhanced Video Section */}
      {/* <div ref={videoContainerRef} className="w-full flex justify-center my-12">
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
      </div> */}
    </section>
  );
};

// Enhanced Service Item Component
const EnhancedServiceItem = React.memo(
  ({
    item,
    service,
    isInCart,
    getItemQuantity,
    onAdd,
    onRemove,
    onDelete,
    index,
    isFeature,
  }) => {
    const quantity = getItemQuantity(item.id, service);
    const isSelected = quantity > 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: index * 0.05,
          type: "spring",
          stiffness: 300,
        }}
        className={`p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer group backdrop-blur-sm ${
          isSelected
            ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-blue-100/50 shadow-lg"
            : "border-gray-200/50 bg-white/80 hover:border-blue-300/50 hover:shadow-md"
        }`}
        onClick={!isSelected ? onAdd : undefined}
        whileHover={{
          y: -2,
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <motion.div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                isSelected
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                  : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4
                  className={`font-semibold text-sm leading-tight ${
                    isSelected
                      ? "text-gray-900"
                      : "text-gray-800 group-hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </h4>
                {isSelected && (
                  <motion.span
                    className="font-bold text-xs md:text-xl whitespace-nowrap ml-2 flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Selected
                  </motion.span>
                )}
              </div>

              {item.description && (
                <p className="text-gray-600 text-xs md:text-xl mb-2 line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              )}

              {item.duration && (
                <p className="text-gray-500 text-xs md:text-xl flex items-center group-hover:text-gray-600 transition-colors">
                  <motion.span
                    className="mr-2"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Clock className="w-3 h-3" />
                  </motion.span>
                  {item.duration}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Quantity Controls */}
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={onRemove}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-xl hover:bg-gray-300 transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
                title="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <motion.span
                className="w-8 text-center font-semibold text-xs md:text-xl bg-white rounded-lg py-1 border border-gray-200"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {quantity}
              </motion.span>
              <motion.button
                onClick={onAdd}
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>

            <motion.button
              onClick={onDelete}
              className="text-red-600 hover:text-red-700 text-xs md:text-xl flex items-center transition-all duration-300 px-3 py-2 rounded-lg hover:bg-red-50/50 font-medium"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              title="Remove from cart"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Remove
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced Add to cart hint */}
        {!isSelected && (
          <motion.div
            className="text-xs text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <span className="flex items-center">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                <ShoppingBag className="w-3 h-3" />
              </motion.span>
              Click to add
            </span>
            <span className="text-blue-500 font-medium flex items-center">
              <Plus className="w-3 h-3 mr-1" />
              Add to selection
            </span>
          </motion.div>
        )}
      </motion.div>
    );
  }
);

export default Hero;
