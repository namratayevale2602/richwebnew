import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Users,
  BookOpen,
  Briefcase,
  Code,
  CheckCircle,
  ArrowRight,
  Clock,
  Laptop,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/PopUp/WhatsAppPopup";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import FloatingButtons from "../components/FloatingButtons";
import VideoBackground from "../components/VideoBackground";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="">
      <VideoBackground />
      <ScrollToTop />
      <Navbar />
      {/* Main content area */}
      <main className="relative z-10">
        <Outlet /> {/* This renders the current page component */}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
