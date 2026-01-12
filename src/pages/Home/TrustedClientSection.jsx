import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trustedClient } from "../../assets";

// Mock client logos - replace with your actual client logos
const clientLogos = [
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://babliinvestment.com/wp-content/uploads/2024/11/HindujaLeylandFinance.png",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
  "https://www.eqimg.com/images/2024/1920x1080/09022024-image7-equitymaster.jpg",
];

const TrustedClientSection = () => {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(1200); // Default width
  const brandColor = "#07337a";

  // Get carousel width on mount and resize
  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth / 2);
      }
    };

    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);

    return () => window.removeEventListener("resize", updateCarouselWidth);
  }, []);

  // Handle scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInView(isVisible);
      }

      if (currentScrollY > lastScrollY && isInView && !isPlaying) {
        setIsPlaying(true);
      } else if (currentScrollY < lastScrollY && isInView && isPlaying) {
        setIsPlaying(false);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [lastScrollY, isInView, isPlaying]);

  // Fixed carousel animation values
  const carouselAnimation1 = {
    x: [0, -carouselWidth],
  };

  const carouselAnimation2 = {
    x: [-carouselWidth, 0],
  };

  return (
    <section
      ref={sectionRef}
      className="relative  bg-transparent overflow-hidden"
    >
      {/* Enhanced Trusted Clients Section */}
      <motion.div
        ref={carouselRef}
        className="relative w-full max-w-7xl mx-auto my-10 sm:my-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Trusted Client Center Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={trustedClient}
              alt="Trusted by Leading Companies"
              className="w-48 h-24 sm:w-64 sm:h-32 md:h-40 object-contain filter grayscale-0"
            />
          </motion.div>
        </div>

        {/* Enhanced Client Logos Carousel */}
        <div className="relative overflow-hidden py-8 sm:py-16">
          {/* First Carousel */}
          <motion.div
            className="flex gap-8 sm:gap-16 items-center"
            animate={carouselAnimation1}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-14 sm:w-44 sm:h-20  rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 10px 25px ${brandColor}20`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${(index % clientLogos.length) + 1}`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Second Carousel (Reverse Direction) */}
        <div className="relative overflow-hidden py-4 sm:py-8">
          <motion.div
            className="flex gap-6 sm:gap-14 items-center"
            animate={carouselAnimation2}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-28 h-12 sm:w-40 sm:h-16 bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-md border border-gray-100 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: `0 8px 20px ${brandColor}15`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${(index % clientLogos.length) + 1}`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/160x64/${brandColor.replace(
                        "#",
                        ""
                      )}/white?text=Client+${(index % clientLogos.length) + 1}`;
                    }}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedClientSection;
