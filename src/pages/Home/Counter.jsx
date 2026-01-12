import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  TrendingUp,
  Shield,
  Target,
  Zap,
  Clock,
  BarChart3,
  CheckCircle,
  Star,
} from "lucide-react";

// Static data with improved metrics
const factsData = {
  sectionTitle: "Trusted by Industry Leaders",
  sectionDescription: "Our Commitment to Excellence Reflected in Numbers",
  facts: [
    {
      id: 1,
      icon: Award,
      number: 15,
      title: "Years",
      subtitle: "of Digital Excellence",
      suffix: "+",
      description:
        "Years of experience delivering cutting-edge digital solutions",
    },
    {
      id: 2,
      icon: Users,
      number: 3000,
      title: "Happy",
      subtitle: "Clients Worldwide",
      suffix: "+",
      description: "Businesses that trust us with their digital transformation",
    },
    {
      id: 3,
      icon: TrendingUp,
      number: 10,
      title: "Million",
      subtitle: "Messages Delivered",
      suffix: "+",
      description:
        "Text & voice messages delivered annually with 99.9% success rate",
    },
    {
      id: 4,
      icon: Shield,
      number: 99,
      title: "Uptime",
      subtitle: "Service Reliability",
      suffix: "%",
      description:
        "Guaranteed API uptime ensuring uninterrupted business operations",
    },
    {
      id: 5,
      icon: Zap,
      number: 95,
      title: "Client",
      subtitle: "Retention Rate",
      suffix: "%",
      description: "Clients who continue their journey with us year after year",
    },
    {
      id: 6,
      icon: Target,
      number: 500,
      title: "Projects",
      subtitle: "Successfully Delivered",
      suffix: "+",
      description: "Digital projects completed across various industries",
    },
  ],
};

const Counter = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(factsData.facts);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-semibold text-white">
              Our Achievements
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white mb-6">
            {factsData.sectionTitle}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-blue-100"
          >
            {factsData.sectionDescription}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-8 rounded-2xl text-center z-10">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm mb-6 border border-white/20 group-hover:border-white/30 transition-all duration-300"
                >
                  <fact.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="mb-4">
                  <CounterNumber
                    digit={fact.number}
                    suffix={fact.suffix}
                    title={fact.title}
                  />
                </div>

                {/* Subtitle */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {fact.subtitle}
                </h3>

                {/* Description */}
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  {fact.description}
                </p>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-6 mx-auto"
                />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-blue-600/10 transition-all duration-500 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, value: "24/7", label: "Support Available" },
              { icon: BarChart3, value: "98%", label: "Client Satisfaction" },
              { icon: Clock, value: "< 2s", label: "Avg Response Time" },
              { icon: Users, value: "50+", label: "Expert Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-blue-100 mb-6">
            Ready to be our next success story?
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Start Your Journey
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

// Enhanced Counter Number Component
const CounterNumber = ({ digit, suffix, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < digit) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const duration = 2000; // 2 seconds
        const increment = Math.min(
          digit,
          Math.floor((progress / duration) * digit)
        );

        setCount(increment);

        if (increment < digit) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [digit]);

  return (
    <div className="space-y-2">
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
          {count.toLocaleString()}
          {suffix}
        </span>
      </h2>
      <div className="text-lg font-medium text-blue-200 uppercase tracking-wider">
        {title}
      </div>
    </div>
  );
};

export default Counter;
