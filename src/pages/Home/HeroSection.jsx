import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Code,
  Megaphone,
  Building,
  ChevronRight,
  Star,
  Zap,
  Globe,
  Shield,
  Cloud,
} from "lucide-react";
import HeroBackground from "../../components/HeroBackground";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // Services Data
  const services = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Custom software solutions, web & mobile apps, and scalable platforms",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      gradient:
        "linear-gradient(135deg, #0cc0e1 0%, #83bfdf 50%, #137bca 100%)",
      stats: "500+ Projects",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Digital Marketing",
      description:
        "SEO, social media marketing, PPC campaigns & brand strategy",
      icon: Megaphone,
      color: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      stats: "98% ROI",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Business Consulting",
      description:
        "Strategy development, process optimization & growth planning",
      icon: Building,
      color: "from-orange-500 to-red-500",
      gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
      stats: "95% Success",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  // Animate counters
  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden "
    >
      <HeroBackground />
      <motion.div className="absolute inset-0 z-0" animate="animate" />

      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-42">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <motion.h1 className="text-3xl text-[#e5edfc] sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Transform Your Digital Vision
                  <motion.h1
                    className="block bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca] bg-clip-text text-transparent mt-4"
                    animate={{ backgroundPosition: ["0%", "100%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    Into Reality
                  </motion.h1>
                </motion.h1>

                <motion.p className="text-lg lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  We provide comprehensive digital solutions that blend
                  cutting-edge technology with strategic insight to drive
                  measurable business growth.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca] text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(12,192,225,0.5)] transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#137bca] to-[#0cc0e1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    Book Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </button>

                <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                {[
                  { value: "3000+", label: "Happy Clients", icon: Users },
                  { value: "1000+", label: "Projects", icon: Target },
                  { value: "98%", label: "Satisfaction", icon: Star },
                  { value: "24/7", label: "Support", icon: Shield },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <stat.icon className="w-5 h-5 text-blue-400" />
                      <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        <p>{stat.value}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Interactive Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Main Floating Card */}
              <motion.div
                initial="initial"
                animate="animate"
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                {/* Card Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(12,192,225,0.2),transparent_50%)]" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Services List */}
                  <div className="space-y-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}
                            >
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">
                                {service.title}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all" />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-xs text-gray-400">
                            <p>{service.stats}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-cyan-400 transition-colors"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA at bottom */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">
                          <p>Ready to start?</p>
                        </div>
                        <div className="text-white font-semibold">
                          <p>Book a Free Strategy Session</p>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements Around Card */}
              {[
                { icon: Cloud, color: "blue", position: "top-0 -right-8" },
                { icon: Globe, color: "cyan", position: "-top-8 right-20" },
                { icon: Shield, color: "purple", position: "bottom-8 -left-8" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} p-4 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 backdrop-blur-sm border border-${item.color}-500/30 shadow-xl`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="text-sm text-gray-400 mb-4">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
};

// Helper components
const Play = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default HeroSection;
