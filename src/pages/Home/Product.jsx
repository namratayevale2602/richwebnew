import { useState, useEffect, useRef, useCallback } from "react";
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
} from "lucide-react";
import audioFile from "../../assets/sound/flipcard.mp3";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasPlayedIntroSound, setHasPlayedIntroSound] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const autoPlayRef = useRef(null);
  const audioRef = useRef(null);
  const componentRef = useRef(null);
  const observerRef = useRef(null);
  const touchStartX = useRef(0);
  const cardsPerView = 5;

  // Initialize audio - SIMPLIFIED VERSION
  useEffect(() => {
    try {
      audioRef.current = new Audio(audioFile);
      audioRef.current.volume = 0.3;
      audioRef.current.preload = "auto";
      setIsAudioReady(true);
    } catch (error) {
      console.log("Audio initialization failed:", error);
      setIsAudioReady(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // SIMPLIFIED Intersection Observer - only track visibility
  useEffect(() => {
    if (!componentRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);

        // Play intro sound when component comes into view (first time)
        if (entry.isIntersecting && !hasPlayedIntroSound && isAudioReady) {
          setTimeout(() => {
            try {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.volume = 0.2;
                audioRef.current
                  .play()
                  .then(() => {
                    setHasPlayedIntroSound(true);
                  })
                  .catch((error) => {
                    console.log("Intro audio play failed:", error);
                    setHasPlayedIntroSound(true);
                  });
              }
            } catch (error) {
              console.log("Intro audio error:", error);
              setHasPlayedIntroSound(true);
            }
          }, 500);
        }
      },
      {
        threshold: 0.1, // Only 10% needs to be visible
        rootMargin: "50px", // Add some margin
      }
    );

    observerRef.current.observe(componentRef.current);

    return () => {
      if (observerRef.current && componentRef.current) {
        observerRef.current.unobserve(componentRef.current);
      }
    };
  }, [hasPlayedIntroSound, isAudioReady]);

  // Products data with local images or fallback URLs
  const productsData = {
    sectionTitle: "Our Digital Services",
    sectionDescription: "Comprehensive Solutions for Modern Business Needs",
    products: [
      {
        id: 1,
        title: "Bulk SMS",
        product_name: "bulk-sms",
        description:
          "Reliable bulk SMS services for marketing campaigns, alerts, and notifications. Reach thousands instantly with our robust SMS platform.",
        image:
          "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=1374&auto=format&fit=crop",
        icon: MessageSquare,
        category: "Communication",
        color: "from-blue-500 to-cyan-400",
        bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
      },
      {
        id: 2,
        title: "Bulk Voice",
        product_name: "bulk-voice",
        description:
          "Professional bulk voice messaging services for customer engagement, alerts, and marketing campaigns with high delivery rates.",
        image:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1470&auto=format&fit=crop",
        icon: Phone,
        category: "Communication",
        color: "from-purple-500 to-pink-400",
        bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-400/20",
      },
      {
        id: 3,
        title: "WhatsApp Services",
        product_name: "whatsapp-services",
        description:
          "Official WhatsApp Business API services for marketing, customer support, and automated messaging with high engagement rates.",
        image:
          "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1374&auto=format&fit=crop",
        icon: Smartphone,
        category: "Communication",
        color: "from-green-500 to-emerald-400",
        bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-400/20",
      },
      {
        id: 4,
        title: "Digital Marketing",
        product_name: "digital-marketing",
        description:
          "Comprehensive digital marketing services including SEO, social media marketing, PPC, and content marketing to grow your business online.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
        icon: Megaphone,
        category: "Marketing",
        color: "from-orange-500 to-red-400",
        bgColor: "bg-gradient-to-br from-orange-500/20 to-red-400/20",
      },
      {
        id: 5,
        title: "WhatsApp Chatbot",
        product_name: "whatsapp-chatbot",
        description:
          "Intelligent WhatsApp chatbots for customer service, lead generation, and automated conversations. 24/7 customer support solutions.",
        image:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1469&auto=format&fit=crop",
        icon: Bot,
        category: "Automation",
        color: "from-teal-500 to-cyan-400",
        bgColor: "bg-gradient-to-br from-teal-500/20 to-cyan-400/20",
      },
      {
        id: 6,
        title: "Digital Automation",
        product_name: "digital-automation",
        description:
          "Advanced automation solutions for business processes, workflow optimization, and operational efficiency improvement.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374&auto=format&fit=crop",
        icon: Zap,
        category: "Automation",
        color: "from-indigo-500 to-purple-400",
        bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-400/20",
      },
      {
        id: 7,
        title: "Design & Development",
        product_name: "design-development",
        description:
          "Professional website design, web development, and mobile app development services to establish your strong digital presence.",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop",
        icon: Code,
        category: "Development",
        color: "from-violet-500 to-purple-400",
        bgColor: "bg-gradient-to-br from-violet-500/20 to-purple-400/20",
      },
      {
        id: 8,
        title: "Graphic Design",
        product_name: "graphic-design",
        description:
          "Professional graphic design services including logos, branding, marketing materials, and digital graphics for your business.",
        image:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1528&auto=format&fit=crop",
        icon: Palette,
        category: "Creative",
        color: "from-pink-500 to-rose-400",
        bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-400/20",
      },
      {
        id: 9,
        title: "Alert System",
        product_name: "alert-system",
        description:
          "Custom alert and notification systems for businesses. Real-time alerts via SMS, voice, email, and push notifications.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1469&auto=format&fit=crop",
        icon: AlertCircle,
        category: "Automation",
        color: "from-amber-500 to-yellow-400",
        bgColor: "bg-gradient-to-br from-amber-500/20 to-yellow-400/20",
      },
      {
        id: 10,
        title: "IVR System",
        product_name: "ivr-system",
        description:
          "Professional IVR system development for call centers and businesses. Automate customer interactions and improve call management.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
        icon: PhoneCall,
        category: "Communication",
        color: "from-sky-500 to-blue-400",
        bgColor: "bg-gradient-to-br from-sky-500/20 to-blue-400/20",
      },
      {
        id: 11,
        title: "Bulk Email",
        product_name: "bulk-email",
        description:
          "Professional bulk email marketing services for newsletters, promotions, and customer engagement campaigns with high deliverability rates.",
        image:
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1470&auto=format&fit=crop",
        icon: Mail,
        category: "Marketing",
        color: "from-red-500 to-orange-400",
        bgColor: "bg-gradient-to-br from-red-500/20 to-orange-400/20",
      },
      {
        id: 12,
        title: "Outdoor Marketing",
        product_name: "outdoor-marketing",
        description:
          "Comprehensive outdoor marketing services including hoardings, billboards, transit ads, and OOH advertising for maximum brand visibility.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1525&auto=format&fit=crop",
        icon: Building,
        category: "Marketing",
        color: "from-gray-600 to-gray-400",
        bgColor: "bg-gradient-to-br from-gray-600/20 to-gray-400/20",
      },
    ],
  };

  // Get visible cards for the carousel
  const getVisibleCards = useCallback(() => {
    const total = productsData.products.length;
    if (total === 0) return [];

    const cards = [];
    const halfView = Math.floor(cardsPerView / 2);

    for (let i = -halfView; i <= halfView; i++) {
      let index = currentIndex + i;
      if (index < 0) index = total + index;
      if (index >= total) index = index - total;
      cards.push({
        ...productsData.products[index],
        position: i,
        isCenter: i === 0,
      });
    }

    return cards;
  }, [currentIndex, productsData.products]);

  const visibleCards = getVisibleCards();

  const playSlideSound = useCallback(() => {
    if (audioRef.current && isInView) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((error) => {
          console.log("Slide audio play failed:", error);
        });
      } catch (error) {
        console.log("Slide audio error:", error);
      }
    }
  }, [isInView]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    playSlideSound();

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === productsData.products.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, productsData.products.length, playSlideSound]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    playSlideSound();

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? productsData.products.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, productsData.products.length, playSlideSound]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;

      setIsAnimating(true);
      playSlideSound();

      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, currentIndex, playSlideSound]
  );

  // Touch and mouse handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!touchStartX.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchStartX.current = 0;
    },
    [nextSlide, prevSlide]
  );

  const handleMouseDown = useCallback(
    (e) => {
      touchStartX.current = e.clientX;

      const handleMouseMove = (e) => {
        if (!touchStartX.current) return;
        e.preventDefault();
      };

      const handleMouseUp = (e) => {
        if (!touchStartX.current) return;

        const touchEndX = e.clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }

        touchStartX.current = 0;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [nextSlide, prevSlide]
  );

  // Auto-play - only when in view
  useEffect(() => {
    if (isAutoPlaying && !isAnimating && isInView) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isAnimating, nextSlide, isInView]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Fix for card visibility - ensure they render properly
  if (!productsData.products || productsData.products.length === 0) {
    return (
      <section className="relative py-16 bg-transparent overflow-hidden">
        <div className="text-center text-white">No products available</div>
      </section>
    );
  }

  return (
    <section
      ref={componentRef}
      className="relative py-16 bg-transparent overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b8c7e0] mb-4">
            {productsData.sectionTitle}
          </h1>
          <p className="text-xl text-[#0bc0df] max-w-3xl mx-auto">
            {productsData.sectionDescription}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Auto-play Toggle */}
          {/* <div className="absolute -top-16 right-4 z-20">
            <button
              onClick={toggleAutoPlay}
              className={`px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                  : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              }`}
            >
              {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
            </button>
          </div> */}

          {/* Cards Container */}
          <div
            className="flex items-center justify-center min-h-[600px] md:min-h-[700px] px-8 md:px-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {visibleCards.map((product, index) => {
                const Icon = product.icon;
                const position = product.position;
                const isCenter = product.isCenter;

                // Calculate scale and opacity based on position
                const absPosition = Math.abs(position);
                const scale = 1 - absPosition * 0.1;
                const opacity = 1 - absPosition * 0.3;
                const zIndex = 10 - absPosition;

                return (
                  <div
                    key={`${product.id}-${index}`}
                    className={`
                      relative transition-all duration-500 ease-out
                      ${isAnimating ? "transition-all duration-300" : ""}
                      ${
                        isCenter
                          ? "cursor-default"
                          : "cursor-pointer hover:scale-95"
                      }
                    `}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      width: isCenter ? "320px" : "220px",
                      maxWidth: isCenter ? "320px" : "220px",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onClick={() =>
                      !isCenter &&
                      goToSlide(
                        (currentIndex +
                          position +
                          productsData.products.length) %
                          productsData.products.length
                      )
                    }
                  >
                    {/* Card */}
                    <div
                      className={`
                      relative rounded-3xl overflow-hidden
                      ${
                        isCenter
                          ? "h-[500px] shadow-2xl"
                          : "h-[400px] shadow-xl"
                      }
                      border border-white/10
                      transition-all duration-500
                      ${isAnimating && isCenter ? "shadow-blue-500/30" : ""}
                    `}
                    >
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 ${product.bgColor}`} />

                      {/* Image */}
                      <div className="relative h-1/2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          onError={(e) => {
                            e.target.src = `https://source.unsplash.com/random/800x600/?${product.category}`;
                          }}
                        />
                        {/* Animation overlay during transition */}
                        {isCenter && isAnimating && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent animate-pulse" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative h-1/2 p-6 bg-gradient-to-b from-black/90 to-black">
                        {/* Icon and Category */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`p-3 rounded-2xl transition-all duration-300 ${
                              isCenter ? "bg-white/20" : "bg-white/10"
                            } ${
                              isCenter && isAnimating
                                ? "scale-110 rotate-3"
                                : ""
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 transition-all duration-300 ${
                                isCenter ? "text-white" : "text-white/80"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                              isCenter
                                ? "bg-white/20 text-white"
                                : "bg-white/10 text-white/70"
                            } ${isCenter && isAnimating ? "scale-105" : ""}`}
                          >
                            {product.category}
                          </span>
                        </div>

                        {/* Title and Description */}
                        <div className="mb-4">
                          <h3
                            className={`font-bold mb-2 transition-all duration-300 ${
                              isCenter
                                ? "text-xl text-white"
                                : "text-lg text-white/90"
                            } ${isCenter && isAnimating ? "text-2xl" : ""}`}
                          >
                            {product.title}
                          </h3>
                          <p
                            className={`transition-all duration-300 ${
                              isCenter
                                ? "text-sm text-gray-300"
                                : "text-xs text-gray-400"
                            } line-clamp-3`}
                          >
                            {product.description}
                          </p>
                        </div>

                        {/* Button */}
                        <button
                          className={`
                          w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300
                          ${
                            isCenter
                              ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90"
                              : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                          }
                          ${
                            isCenter && isAnimating
                              ? "scale-105 shadow-lg shadow-blue-500/20"
                              : ""
                          }
                        `}
                        >
                          {isCenter ? "Learn More →" : "View Details"}
                        </button>
                      </div>
                    </div>

                    {/* Glow Effect for Center Card */}
                    {isCenter && (
                      <div className="absolute inset-0 -z-10">
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                            product.color
                          } blur-xl transition-all duration-500 ${
                            isAnimating ? "opacity-50" : "opacity-30"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicators */}
          {/* <div className="flex justify-center items-center gap-2 mt-12">
            {productsData.products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`
                  relative h-2 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && isAnimating && (
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                )}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
