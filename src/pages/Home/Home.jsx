import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Products from "./Product";
import Counter from "../../components/Fixed/Counter";
import IndustryAll from "./IndustryAll";
import FlexBanner from "./FlexBanner";
import Enquiry from "../../components/Form/Enquiry";
import BenfitsHome from "./BenfitsHome";
import Offer from "./Offer";
import Faq from "./Faq";
import EnquiryFlex from "../../components/Fixed/EnquiryFlex";
// import Blogs from "./Blogs";
import Blog from "./Blog";
import Testimonials from "../../components/Fixed/Testimonials";
import HeroSection from "./HeroSection";
import ServicesWeOffer from "./ServicesWeOffer";
import PackagesSection from "./PackagesSection";
import Hero from "./Hero";
import TrustedClientSection from "./TrustedClientSection";
import ServiceCards from "./ServiceCards";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-200 border-t-[#0cc0e1] rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-lg font-semibold bg-gradient-to-r from-[#0cc0e1] to-[#137bca] bg-clip-text text-transparent">
              RSS
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen"
        >
          <HeroSection />
          {/* You can add other sections here */}
        </motion.div>
      </AnimatePresence>
      <Hero />
      <Products />
      <ServiceCards />
      <Counter />
      <TrustedClientSection />
      <ServicesWeOffer />
      <Offer />
      {/* <PackagesSection /> */}
      <Testimonials />
      <Faq />
      <Blog />
    </div>
  );
}

export default Home;
