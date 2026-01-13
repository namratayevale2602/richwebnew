import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin } from "lucide-react";
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
  career,
  blog,
  howtoguide,
  faq,
  Richlogo,
} from "../assets";

// Logo Component
const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src={Richlogo}
          alt="Rich Logo"
          className="w-24 h-22 md:w-28 md:h-26 p-3"
        />
      </motion.div>
    </motion.div>
  );
};

const servicesData = [
  {
    label: "Bulk SMS",
    path: "/products/bulk-sms",
    description:
      "Secure, timely delivery of Transactional, Promotional, OTP...",
    image: bulksms,
  },
  {
    label: "Bulk Voice",
    path: "/products/bulk-voice",
    description:
      "Send your message instantly with reliable bulk voice solutions.",
    image: bulkvoice,
  },
  {
    label: "Whatsapp Service",
    path: "/products/whatsapp-service",
    description: "Power your business instantly with reliable WhatsApp API...",
    image: whatsappservice,
  },
  {
    label: "Digital Marketing",
    path: "/digital-marketing-services",
    description:
      "Boost your brand instantly with reliable digital marketing...",
    image: digitalmarketing,
  },
  {
    label: "Whatsapp Chatbot",
    path: "/products/whats-chatbot",
    description: "Power your business instantly with reliable WhatsApp API...",
    image: whatsappchatbot,
  },
  {
    label: "Digital Automation",
    path: "/products/digital-auto",
    description:
      "Streamline your operations instantly with digital business...",
    image: digitalautomation,
  },
  {
    label: "Software & IT",
    path: "/software-it-services",
    description:
      "Transforming Visionary Concepts into Functional and Innovative...",
    image: designdevelopment,
  },
  {
    label: "Graphic Design",
    path: "/products/graphic-design",
    description:
      "Bringing Creative Concepts to Life with Artistic Precision and Visua...",
    image: graphicdesign,
  },
  {
    label: "Alert System",
    path: "/products/alert-system",
    description:
      "Stay informed instantly with our efficient miss call alert system.",
    image: alertsystem,
  },
  {
    label: "IVR System",
    path: "/products/ivr-system",
    description: "Automate interactions seamlessly with our efficient IV...",
    image: ivrsystem,
  },
  {
    label: "Bulk Email",
    path: "/products/bulk-email",
    description:
      "Reach your audience instantly with reliable bulk email solutions.",
    image: bulkemail,
  },
];

// Service items structure
const resourcesData = [
  {
    label: "Career",
    path: "/resources/career",
    description:
      "Tailored software solutions for your business needs with modern technologies.",
    image: designdevelopment,
    keywords: [
      "custom software",
      "enterprise software",
      "business software",
      "software solutions",
    ],
  },
  {
    label: "How To Guide",
    path: "/resources/how-to-guide",
    description: "Native and cross-platform iOS & Android mobile applications.",
    image: digitalautomation,
    keywords: [
      "mobile apps",
      "ios development",
      "android apps",
      "react native",
    ],
  },
  {
    label: "Blog",
    path: "/resources/blog",
    description:
      "Responsive websites with React, Next.js, and modern frameworks.",
    image: designdevelopment,
    keywords: [
      "web development",
      "website design",
      "responsive websites",
      "frontend development",
    ],
  },
  {
    label: "FAQ",
    path: "/resources/faq",
    description: "User-centered interface design and experience optimization.",
    image: graphicdesign,
    keywords: ["ui design", "ux design", "user experience", "interface design"],
  },
];

const softwareData = [
  {
    label: "Custom Software Development",
    path: "/software-it-services/custom-software-development",
    description:
      "Tailored software solutions for your business needs with modern technologies.",
    image: designdevelopment,
    keywords: [
      "custom software",
      "enterprise software",
      "business software",
      "software solutions",
    ],
  },
  {
    label: "Web Development",
    path: "/software-it-services/web-development",
    description:
      "Responsive websites with React, Next.js, and modern frameworks.",
    image: designdevelopment,
    keywords: [
      "web development",
      "website design",
      "responsive websites",
      "frontend development",
    ],
  },
  {
    label: "Mobile App Development",
    path: "/software-it-services/mobile-app-development",
    description: "Native and cross-platform iOS & Android mobile applications.",
    image: digitalautomation,
    keywords: [
      "mobile apps",
      "ios development",
      "android apps",
      "react native",
    ],
  },
  {
    label: "UI/UX Design",
    path: "/software-it-services/ui-ux-design",
    description: "User-centered interface design and experience optimization.",
    image: graphicdesign,
    keywords: ["ui design", "ux design", "user experience", "interface design"],
  },
  {
    label: "E-Commerce Solutions",
    path: "/software-it-services/ecommerce-solutions",
    description: "Complete e-commerce platforms with payment integration.",
    image: designdevelopment,
    keywords: [
      "ecommerce development",
      "online store",
      "shopping cart",
      "payment gateway",
    ],
  },
  {
    label: "Cloud Solutions",
    path: "/software-it-services/cloud-solutions",
    description: "Cloud migration, deployment, and management services.",
    image: digitalautomation,
    keywords: [
      "cloud computing",
      "aws",
      "azure",
      "google cloud",
      "cloud migration",
    ],
  },
  {
    label: "API Integration",
    path: "/software-it-services/api-integration",
    description: "Third-party API integrations and custom API development.",
    image: whatsappservice,
    keywords: [
      "api integration",
      "rest api",
      "web services",
      "api development",
    ],
  },
  {
    label: "Maintenance & Support",
    path: "/software-it-services/maintenance-support",
    description: "Ongoing software maintenance and technical support.",
    image: alertsystem,
    keywords: [
      "software maintenance",
      "technical support",
      "updates",
      "bug fixes",
    ],
  },
];

const marketingServices = [
  {
    label: "SEO Services",
    path: "/digital-marketing-services/seo",
    description:
      "Search engine optimization to improve rankings and visibility.",
    image: digitalmarketing,
    keywords: [
      "seo services",
      "search engine optimization",
      "organic traffic",
      "keyword ranking",
    ],
  },
  {
    label: "Social Media Marketing",
    path: "/digital-marketing-services/social-media-marketing",
    description: "Complete social media strategy and management.",
    image: digitalmarketing,
    keywords: [
      "social media marketing",
      "smm",
      "facebook marketing",
      "instagram marketing",
    ],
  },
  {
    label: "PPC Advertising",
    path: "/digital-marketing-services/ppc-advertising",
    description:
      "Pay-per-click campaigns on Google, Facebook, and other platforms.",
    image: digitalmarketing,
    keywords: [
      "ppc",
      "google ads",
      "facebook ads",
      "paid advertising",
      "pay per click",
    ],
  },
  {
    label: "Content Marketing",
    path: "/digital-marketing-services/content-marketing",
    description: "Strategic content creation and distribution.",
    image: digitalmarketing,
    keywords: [
      "content marketing",
      "blog writing",
      "content strategy",
      "copywriting",
    ],
  },
  {
    label: "Email Marketing",
    path: "/digital-marketing-services/email-marketing",
    description: "Targeted email campaigns and automation.",
    image: bulkemail,
    keywords: ["email marketing", "email campaigns", "newsletter", "mailchimp"],
  },
  {
    label: "WhatsApp Marketing",
    path: "/digital-marketing-services/whatsapp-marketing",
    description: "WhatsApp Business API and marketing campaigns.",
    image: whatsappservice,
    keywords: [
      "whatsapp marketing",
      "whatsapp business",
      "bulk whatsapp",
      "whatsapp api",
    ],
  },
  {
    label: "Bulk SMS Marketing",
    path: "/digital-marketing-services/bulk-sms",
    description: "Transactional and promotional SMS campaigns.",
    image: bulksms,
    keywords: [
      "bulk sms",
      "sms marketing",
      "text marketing",
      "promotional sms",
    ],
  },
  {
    label: "Graphic Design",
    path: "/digital-marketing-services/graphic-design",
    description: "Brand identity, logos, and marketing materials.",
    image: graphicdesign,
    keywords: [
      "graphic design",
      "logo design",
      "brand identity",
      "marketing materials",
    ],
  },
  {
    label: "Video Marketing",
    path: "/digital-marketing-services/video-marketing",
    description: "Promotional videos, reels, and animated content.",
    image: outdoormarketing,
    keywords: [
      "video marketing",
      "promotional videos",
      "animated videos",
      "reels",
    ],
  },
];

// Departments Structure
const departments = [
  {
    label: "Services",
    path: "/services",
    title: "Software & IT Services Company | Custom Software Development",
    metaDescription:
      "Complete software & IT solutions including custom software development, web development, mobile apps, UI/UX design, and enterprise solutions for businesses.",
    services: servicesData,
  },
  {
    label: "Software & IT",
    path: "/software-it-services",
    title: "Software & IT Services Company | Custom Software Development",
    metaDescription:
      "Complete software & IT solutions including custom software development, web development, mobile apps, UI/UX design, and enterprise solutions for businesses.",
    services: softwareData,
  },
  {
    label: "Digital Marketing",
    path: "/digital-marketing-services",
    title: "Digital Marketing Agency | SEO & Social Media Marketing Services",
    metaDescription:
      "Full-service digital marketing agency offering SEO, social media marketing, PPC, content marketing, and email marketing services to grow your business.",
    services: marketingServices,
  },
  {
    label: "Resources",
    path: "/resources",
    title: "Software & IT Services Company | Custom Software Development",
    metaDescription:
      "Complete software & IT solutions including custom software development, web development, mobile apps, UI/UX design, and enterprise solutions for businesses.",
    services: resourcesData,
  },
];

// Essential Navigation Items (without Contact)
const essentialNavItems = [
  // {
  //   label: "Home",
  //   path: "/",
  //   title: "IT Services & Digital Marketing Company",
  //   description:
  //     "Leading IT services and digital marketing company offering software development, web development, and complete digital marketing solutions.",
  // },
  {
    label: "About Us",
    path: "/about",
    title: "About Our Company | Our Story & Mission",
    description:
      "Learn about our journey, mission, values, and the team behind our successful IT and digital marketing projects.",
  },
];

// Contact item (separate for positioning)
const contactItem = {
  label: "Contact",
  path: "/contact",
  title: "Contact Us | Get in Touch for IT Services",
  description:
    "Contact our team for software development, digital marketing services, or any inquiries about our IT solutions.",
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const brandColor = "#b8c7e0";

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (typeof document !== "undefined") {
      document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const handleCTAClick = () => {
    closeAllMenus();
    navigate("/contact");
  };

  const handleMobileCTAClick = () => {
    closeAllMenus();
    navigate("/contact");
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Main Navigation */}
      <motion.nav
        className={`${
          scrolled
            ? "bg-white/12 backdrop-blur-xl "
            : "bg-white/12 backdrop-blur-xl"
        } transition-all duration-300 pt-2`}
        initial={{ padding: "8px 0" }}
        animate={{
          padding: scrolled ? "4px 0" : "4px 0",
          // backgroundColor: "rgba(255,255,255,0.98)",
        }}
      >
        <div className="max-w-[1650px] mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center bg-white rounded-b-4xl px-8"
            whileHover={{ scale: 1.03 }}
          >
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer"
              aria-label="RichSol IT Services & Digital Marketing Company"
            >
              <Logo />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Essential Pages (without Contact) */}
            {essentialNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <div
                  onClick={() => {
                    navigate(item.path);
                    closeAllMenus();
                  }}
                  className={`px-4 py-2 font-medium uppercase tracking-wider text-sm relative transition-colors cursor-pointer ${
                    isActive(item.path) ? "text-[#e5edfc]" : "text-[#b8c7e0]"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: brandColor }}
                      layoutId="navUnderline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Departments with Mega Menu */}
            {departments.map((department) => (
              <div
                key={department.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(department.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-[#b8c7e0] transition-colors px-4 py-2 font-medium uppercase tracking-wider text-sm relative hover:text-[#e5edfc] group">
                  <span className="whitespace-nowrap">{department.label}</span>
                  <ChevronDown
                    className={`h-3 w-3 ml-1 transition-transform ${
                      openDropdown === department.label ? "rotate-180" : ""
                    }`}
                  />
                  {(openDropdown === department.label ||
                    isActive(department.path)) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: brandColor }}
                      layoutId="navUnderline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </button>

                {/* Department Mega Menu */}
                {openDropdown === department.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[800px] bg-[#10182b] backdrop-blur-xl rounded-lg shadow-xl z-50 border border-gray-200"
                    onMouseEnter={() => setOpenDropdown(department.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-6">
                      <div className="mb-6">
                        <div
                          onClick={() => {
                            navigate(department.path);
                            closeAllMenus();
                          }}
                          className="inline-block cursor-pointer"
                        >
                          <h3 className="text-2xl font-bold text-white hover:text-[#07337a] transition-colors">
                            {department.label} Services
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {department.metaDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        {/* Services Grid */}
                        <div className="space-y-3">
                          {department.services
                            .slice(0, Math.ceil(department.services.length / 2))
                            .map((service) => (
                              <div
                                key={service.label}
                                onClick={() => {
                                  navigate(service.path);
                                  closeAllMenus();
                                }}
                                className="group block p-4 rounded-lg hover:bg-white/12 transition-all border border-transparent hover:border-blue-100 cursor-pointer"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 flex items-center justify-center bg-white/12 rounded-lg flex-shrink-0">
                                    <img
                                      src={service.image}
                                      alt={service.label}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-[#b8c7e0] transition-colors">
                                      {service.label}
                                    </h4>
                                    <p className="text-sm text-[#e5edfc] mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                          {department.services
                            .slice(Math.ceil(department.services.length / 2))
                            .map((service) => (
                              <div
                                key={service.label}
                                onClick={() => {
                                  navigate(service.path);
                                  closeAllMenus();
                                }}
                                className="group block p-4 rounded-lg hover:bg-white/12 transition-all border border-transparent hover:border-blue-100 cursor-pointer"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 flex items-center justify-center bg-white/12 rounded-lg flex-shrink-0">
                                    <img
                                      src={service.image}
                                      alt={service.label}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-[#b8c7e0]">
                                      {service.label}
                                    </h4>
                                    <p className="text-sm text-[#e5edfc] mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Department CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div
                          onClick={() => {
                            navigate(department.path);
                            closeAllMenus();
                          }}
                          className="inline-flex items-center text-[#e5edfc] font-semibold cursor-pointer"
                        >
                          View All {department.label} Services
                          <ChevronDown className="h-4 w-4 ml-1 -rotate-90" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Contact Tab (after all dropdowns) */}
            <div key={contactItem.label} className="relative group">
              <div
                onClick={() => {
                  navigate(contactItem.path);
                  closeAllMenus();
                }}
                className={`px-4 py-2 font-medium uppercase tracking-wider text-sm relative transition-colors cursor-pointer ${
                  isActive(contactItem.path)
                    ? "text-[#b8c7e0]"
                    : "text-[#b8c7e0]"
                }`}
              >
                <span className="whitespace-nowrap">{contactItem.label}</span>
                {isActive(contactItem.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{ backgroundColor: brandColor }}
                    layoutId="navUnderline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleCTAClick}
              className="ml-4 text-white px-6 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: brandColor }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 5px 15px ${brandColor}40`,
                backgroundColor: "#062a5e",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
              <button
                onClick={closeAllMenus}
                className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="space-y-1">
                {/* Essential Pages (without Contact) */}
                {essentialNavItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100">
                    <div
                      onClick={() => {
                        navigate(item.path);
                        closeAllMenus();
                      }}
                      className="flex items-center py-4 text-lg text-gray-800 font-semibold w-full text-left hover:text-[#07337a] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </div>
                  </div>
                ))}

                {/* Departments */}
                {departments.map((department) => (
                  <div
                    key={department.label}
                    className="border-b border-gray-100"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === department.label ? null : department.label
                          )
                        }
                        className="flex-1 flex items-center py-4 text-lg text-gray-800 font-semibold hover:text-[#07337a] transition-colors text-left"
                      >
                        {department.label}
                      </button>
                      <button
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === department.label ? null : department.label
                          )
                        }
                        className="p-2"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === department.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {openDropdown === department.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {department.services.map((service) => (
                            <div
                              key={service.label}
                              className="border-t border-gray-100"
                            >
                              <div
                                onClick={() => {
                                  navigate(service.path);
                                  closeAllMenus();
                                }}
                                className="block py-3 text-gray-600 hover:text-[#07337a] transition-colors cursor-pointer font-medium pl-4"
                              >
                                {service.label}
                              </div>
                            </div>
                          ))}
                          <div className="border-t border-gray-100">
                            <div
                              onClick={() => {
                                navigate(department.path);
                                closeAllMenus();
                              }}
                              className="block py-3 text-[#07337a] font-semibold pl-4 cursor-pointer"
                            >
                              View All {department.label} Services →
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Contact in Mobile Menu (after all dropdowns) */}
                <div
                  key={contactItem.label}
                  className="border-b border-gray-100"
                >
                  <div
                    onClick={() => {
                      navigate(contactItem.path);
                      closeAllMenus();
                    }}
                    className="flex items-center py-4 text-lg text-gray-800 font-semibold w-full text-left hover:text-[#07337a] transition-colors cursor-pointer"
                  >
                    {contactItem.label}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <button
                  onClick={handleMobileCTAClick}
                  className="block w-full text-white px-6 py-4 rounded-lg font-semibold uppercase tracking-wider text-center text-lg shadow-lg transition-all"
                  style={{ backgroundColor: brandColor }}
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919595902006"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors text-base"
                  >
                    <Phone size={18} className="mr-3" />
                    +91 95959 02006
                  </a>
                  <a
                    href="mailto:support@richsol.com"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors text-base"
                  >
                    <Mail size={18} className="mr-3" />
                    support@richsol.com
                  </a>
                  <div className="text-gray-700 flex items-start">
                    <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">
                      4th Floor, Akravi Disha, Nashik, Maharashtra 422002
                    </span>
                  </div>
                  <div className="text-gray-700 flex items-center text-base">
                    <Clock size={18} className="mr-3" />
                    Mon–Sat: 9:30 AM – 6:30 PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
