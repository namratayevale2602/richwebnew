import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Smartphone,
  Megaphone,
  Bot,
  Zap,
  Code,
  Palette,
  AlertCircle,
  PhoneCall,
  Mail,
  Building,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  alertsystems,
  bulkemails,
  bulksmss,
  bulkvoicee,
  designdevelopementt,
  designmarketingg,
  digitalautomationn,
  graphicDesignn,
  ivrr,
  outdoormarketingg,
  whatsappchatbots,
  whatsappservices,
} from "../../assets";

// Complete Static JSON Data with all 12 services
const productsData = {
  sectionTitle: "Our Digital Services",
  sectionDescription: "Comprehensive Solutions for Modern Business Needs",
  products: [
    {
      id: 1,
      title: "Bulk Sms",
      product_name: "bulk-sms",
      description:
        "Reliable bulk SMS services for marketing campaigns, alerts, and notifications. Reach thousands instantly with our robust SMS platform.",
      image: bulksmss,
      icon: MessageSquare,
      category: "Communication",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Bulk Voice",
      product_name: "bulk-voice",
      description:
        "Professional bulk voice messaging services for customer engagement, alerts, and marketing campaigns with high delivery rates.",
      image: bulkvoicee,
      icon: Phone,
      category: "Communication",
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Whatsapp Services",
      product_name: "whatsapp-services",
      description:
        "Official WhatsApp Business API services for marketing, customer support, and automated messaging with high engagement rates.",
      image: whatsappservices,
      icon: Smartphone,
      category: "Communication",
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      title: "Digital Marketing",
      product_name: "digital-marketing",
      description:
        "Comprehensive digital marketing services including SEO, social media marketing, PPC, and content marketing to grow your business online.",
      image: designmarketingg,
      icon: Megaphone,
      category: "Marketing",
      color: "from-orange-500 to-red-400",
    },
    {
      id: 5,
      title: "Whatsapp Chatbot",
      product_name: "whatsapp-chatbot",
      description:
        "Intelligent WhatsApp chatbots for customer service, lead generation, and automated conversations. 24/7 customer support solutions.",
      image: whatsappchatbots,
      icon: Bot,
      category: "Automation",
      color: "from-teal-500 to-cyan-400",
    },
    {
      id: 6,
      title: "Digital Automation",
      product_name: "digital-automation",
      description:
        "Advanced automation solutions for business processes, workflow optimization, and operational efficiency improvement.",
      image: digitalautomationn,
      icon: Zap,
      category: "Automation",
      color: "from-indigo-500 to-purple-400",
    },
    {
      id: 7,
      title: "Design Development",
      product_name: "design-development",
      description:
        "Professional website design, web development, and mobile app development services to establish your strong digital presence.",
      image: designdevelopementt,
      icon: Code,
      category: "Development",
      color: "from-violet-500 to-purple-400",
    },
    {
      id: 8,
      title: "Graphic Design",
      product_name: "graphic-design",
      description:
        "Professional graphic design services including logos, branding, marketing materials, and digital graphics for your business.",
      image: graphicDesignn,
      icon: Palette,
      category: "Creative",
      color: "from-pink-500 to-rose-400",
    },
    {
      id: 9,
      title: "Alert System",
      product_name: "alert-system",
      description:
        "Custom alert and notification systems for businesses. Real-time alerts via SMS, voice, email, and push notifications.",
      image: alertsystems,
      icon: AlertCircle,
      category: "Automation",
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 10,
      title: "Ivr System",
      product_name: "ivr-system",
      description:
        "Professional IVR system development for call centers and businesses. Automate customer interactions and improve call management.",
      image: ivrr,
      icon: PhoneCall,
      category: "Communication",
      color: "from-sky-500 to-blue-400",
    },
    {
      id: 11,
      title: "Bulk Email",
      product_name: "bulk-email",
      description:
        "Professional bulk email marketing services for newsletters, promotions, and customer engagement campaigns with high deliverability rates.",
      image: bulkemails,
      icon: Mail,
      category: "Marketing",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 12,
      title: "Outdoor Marketing",
      product_name: "outdoor-marketing",
      description:
        "Comprehensive outdoor marketing services including hoardings, billboards, transit ads, and OOH advertising for maximum brand visibility.",
      image: outdoormarketingg,
      icon: Building,
      category: "Marketing",
      color: "from-gray-600 to-gray-400",
    },
  ],
};

const ServiceCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const autoSlideRef = useRef(null);
  const totalProducts = productsData.products.length;

  // Detect screen size for responsive adjustments
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Get visible cards based on screen size
  const getVisibleCards = (index) => {
    const cards = [];

    // Adjust number of visible cards based on screen size
    let halfWindow;
    if (isMobile) {
      halfWindow = 1; // Show 1 card on each side for mobile (3 total)
    } else if (isTablet) {
      halfWindow = 1; // Show 1 card on each side for tablet (3 total)
    } else {
      halfWindow = 2; // Show 2 cards on each side for desktop (5 total)
    }

    for (let i = index - halfWindow; i <= index + halfWindow; i++) {
      let cardIndex = i;
      if (i < 0) {
        cardIndex = totalProducts + i;
      } else if (i >= totalProducts) {
        cardIndex = i % totalProducts;
      }
      cards.push({
        ...productsData.products[cardIndex],
        position: i - index,
      });
    }
    return cards;
  };

  useEffect(() => {
    setVisibleCards(getVisibleCards(currentIndex));
  }, [currentIndex, isMobile, isTablet]);

  // Auto slider functionality
  useEffect(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }

    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [totalProducts]);

  const nextSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % totalProducts);

    // Restart auto slider after manual navigation
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts);
    }, 5000);
  };

  const prevSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);

    // Restart auto slider after manual navigation
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts);
    }, 5000);
  };

  const goToSlide = (index) => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    setCurrentIndex(index);

    // Restart auto slider after manual navigation
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts);
    }, 5000);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-full mb-4 lg:mb-6 border border-blue-500/30"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#b8c7e0] lg:text-5xl mb-4 lg:mb-6">
            {productsData.sectionTitle}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl">
              {productsData.sectionDescription}
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 px-4">
            Discover our comprehensive range of digital solutions designed to
            accelerate your business growth
          </p>
        </motion.div>

        {/* Slider Container - Responsive height */}
        <div
          className={`relative w-full ${
            isMobile
              ? "h-[500px]"
              : isTablet
              ? "h-[550px]"
              : "h-[600px] lg:h-[700px]"
          }`}
        >
          {/* Navigation Buttons - Responsive positioning */}
          <button
            onClick={prevSlide}
            className={`absolute ${
              isMobile ? "left-2" : "left-4 lg:left-8"
            } top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/90 transition-all duration-300 hover:scale-110 group`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300 group-hover:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute ${
              isMobile ? "right-2" : "right-4 lg:right-8"
            } top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/90 transition-all duration-300 hover:scale-110 group`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300 group-hover:text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence>
              {visibleCards.map((card, index) => (
                <ProductCard
                  key={`${card.id}-${card.position}`}
                  product={card}
                  position={card.position}
                  isActive={card.position === 0}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  onClick={() => {
                    const targetIndex =
                      (currentIndex + card.position + totalProducts) %
                      totalProducts;
                    goToSlide(targetIndex);
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  product,
  position,
  isActive,
  isMobile,
  isTablet,
  onClick,
}) => {
  const IconComponent = product.icon;

  const getCardStyle = () => {
    if (isMobile) {
      const mobileStyles = {
        0: "scale-110 z-30", // Center card (active)
        "-1": "-translate-x-[120%] translate-y-8 rotate-[-12deg] scale-85 opacity-70 z-20",
        1: "translate-x-[120%] translate-y-8 rotate-[12deg] scale-85 opacity-70 z-20",
      };
      return mobileStyles[position] || "";
    } else if (isTablet) {
      const tabletStyles = {
        0: "scale-120 z-30", // Center card (active)
        "-1": "-translate-x-[100%] translate-y-6 rotate-[-10deg] scale-90 opacity-75 z-20",
        1: "translate-x-[100%] translate-y-6 rotate-[10deg] scale-90 opacity-75 z-20",
      };
      return tabletStyles[position] || "";
    } else {
      const desktopStyles = {
        0: "scale-125 z-30", // Center card (active)
        "-2": "-translate-x-[140%] translate-y-10 rotate-[-15deg] scale-75 opacity-70 z-10",
        "-1": "-translate-x-[70%] translate-y-5 rotate-[-8deg] scale-90 opacity-80 z-20",
        1: "translate-x-[70%] translate-y-5 rotate-[8deg] scale-90 opacity-80 z-20",
        2: "translate-x-[140%] translate-y-10 rotate-[15deg] scale-75 opacity-70 z-10",
      };
      return desktopStyles[position] || "";
    }
  };

  const getCardSize = () => {
    if (isMobile) {
      if (isActive) {
        return "w-[240px] h-[350px] cursor-default";
      }
      return "w-[220px] h-[320px] cursor-pointer";
    } else if (isTablet) {
      if (isActive) {
        return "w-[300px] h-[440px] cursor-default";
      }
      return "w-[260px] h-[380px] cursor-pointer";
    } else {
      if (isActive) {
        return "w-[250px] h-[400px] cursor-default";
      }
      return "w-[300px] h-[420px] cursor-pointer";
    }
  };

  const getCardPosition = (pos) => {
    if (isMobile) {
      switch (pos) {
        case -1:
          return "-120%";
        case 0:
          return "0%";
        case 1:
          return "120%";
        default:
          return "0%";
      }
    } else if (isTablet) {
      switch (pos) {
        case -1:
          return "-100%";
        case 0:
          return "0%";
        case 1:
          return "100%";
        default:
          return "0%";
      }
    } else {
      switch (pos) {
        case -2:
          return "-140%";
        case -1:
          return "-70%";
        case 0:
          return "0%";
        case 1:
          return "70%";
        case 2:
          return "140%";
        default:
          return "0%";
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: position > 0 ? 100 : -100 }}
      animate={{
        opacity: isActive ? 1 : isMobile ? 0.6 : 0.7,
        scale: isActive
          ? isMobile
            ? 1.1
            : isTablet
            ? 1.2
            : 1.25
          : position === 2 || position === -2
          ? 0.75
          : position === 1 || position === -1
          ? 0.85
          : 0.9,
        x: getCardPosition(position),
        rotate: isActive
          ? 0
          : isMobile
          ? (position < 0 ? -12 : 12) * Math.abs(position)
          : isTablet
          ? (position < 0 ? -10 : 10) * Math.abs(position)
          : (position < 0 ? -8 : 8) * Math.abs(position),
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute ${getCardSize()} ${getCardStyle()} transition-all duration-500`}
      onClick={!isActive ? onClick : undefined}
    >
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden ${
          isActive
            ? "bg-gradient-to-br from-gray-800 to-gray-900  shadow-2xl shadow-cyan-500/20"
            : "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-xl"
        }`}
      >
        {/* Cross overlay for side cards */}
        {!isActive && (
          <div className="absolute inset-0 z-40 flex items-center justify-center backdrop-blur-[0.2px]">
            <div
              className={`relative ${
                isMobile ? "w-16 h-16" : "w-20 h-20 lg:w-24 lg:h-24"
              }`}
            ></div>
          </div>
        )}

        {/* Card Content */}
        <div className="relative z-10 p-4 sm:p-5 lg:p-3 h-full flex flex-col">
          <div
            className={`mb-3 lg:mb-4 overflow-hidden rounded-xl ${
              isActive
                ? isMobile
                  ? "h-36"
                  : isTablet
                  ? "h-40"
                  : "h-48"
                : isMobile
                ? "h-24"
                : isTablet
                ? "h-28"
                : "h-32"
            }`}
          >
            <img
              src={product.image}
              alt={product.title}
              className={`w-full h-full object-contain transition-transform duration-500 ${
                isActive ? "group-hover:scale-110" : ""
              }`}
            />
          </div>

          {/* Product Title */}
          <h3
            className={`font-bold mb-1 lg:mb-2 ${
              isActive
                ? (isMobile ? "text-lg" : isTablet ? "text-xl" : "text-2xl") +
                  " text-[#b8c7e0]"
                : (isMobile ? "text-base" : "text-lg") + " text-gray-300"
            }`}
          >
            {product.title}
          </h3>

          {/* Product Description */}
          <p
            className={`mb-3 lg:mb-4 ${
              isActive
                ? (isMobile ? "text-xs" : "text-sm") +
                  " text-gray-400 leading-relaxed flex-grow"
                : (isMobile ? "text-xs" : "text-xs") +
                  " text-gray-500 leading-relaxed flex-grow"
            }`}
          >
            {isActive
              ? isMobile
                ? product.description.substring(0, 100) + "..."
                : product.description
              : product.description.substring(0, isMobile ? 60 : 80) + "..."}
          </p>

          {/* View More Button (only for active card) */}
          {isActive && (
            <div className="mt-auto pt-3 lg:pt-4 border-t border-gray-700/50">
              <motion.a
                href={`/products/${product.product_name}`}
                whileHover={{ x: 5 }}
                className="text-cyan-400 font-semibold transition-colors duration-300 inline-flex items-center justify-between w-full group/button text-sm lg:text-base"
              >
                <span>Learn More</span>
                <svg
                  className={`${
                    isMobile ? "w-4 h-4" : "w-5 h-5"
                  } transition-transform group-hover/button:translate-x-2`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </div>
          )}
        </div>

        {/* Glow effect for active card */}
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCards;
