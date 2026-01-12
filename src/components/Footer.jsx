import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Heart,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { FaTooth, FaSprayCan } from "react-icons/fa";
import { TbMoodSmile } from "react-icons/tb";
import RichLogo from "./RichLogo";
import { footerLogo } from "../assets/index";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Career", path: "/resources/career" },
    { label: "Blogs", path: "/resources/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    { label: "Customer Support", path: "/customer-support" },
    { label: "How to guide", path: "/resources/how-to-guide" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://www.facebook.com/richsystemsolutionspvtltd",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://www.instagram.com/richsol_nsk",
    },
    {
      icon: <Linkedin size={18} />,
      label: "Linkedin",
      url: "https://www.linkedin.com/company/rich-system-solutions-pvt-ltd-2024",
    },
    {
      icon: <Youtube size={18} />,
      label: "YouTube",
      url: "https://www.youtube.com/@RICHSystemSolutions/videos",
    },
  ];

  const features = [
    {
      icon: <FaSprayCan size={20} className="text-[#021b44]" />,
      text: "Sterilized Equipment",
    },
    {
      icon: <Award size={20} className="text-[#021b44]" />,
      text: "19+ Years Experience",
    },
    {
      icon: <Star size={20} className="text-[#021b44]" />,
      text: "4.9/5 Google Rating",
    },
    {
      icon: <TbMoodSmile size={20} className="text-[#021b44]" />,
      text: "13,000+ Happy Patients",
    },
  ];

  return (
    <footer className="rounded-tl-4xl bg-gradient-to-b from-[#021b44] to-[#085692] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Clinic Info */}
        <div>
          <div className="mb-6 flex items-center">
            <img
              src={footerLogo}
              alt="Rich Logo"
              className="w-12 h-12 md:w-40  md:h-30"
            />
          </div>
          <p className="text-white mb-6 leading-relaxed">
            Rich System Solutions is a leading provider of Bulk SMS services &
            Marketing SMS services in India. Rich system solutions has been
            providing SMS based services for over 16 years.
          </p>
          <div className="flex gap-3 mb-6">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3676a3] hover:bg-[#83c5f5] p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Google Rating Badge */}
          {/* <div
            onClick={() =>
              window.open(
                "https://www.google.com/search?sca_esv=e126eb4d051b0442&hl=en-IN&sxsrf=AE3TifNr_Dtdbla7hIZPea5IYv8ZDv9R2w:1757507049932&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMYoQmT4ohuML6aQ2PsEJljXCqJtIR5FaZP8LvlO3lHcOmmVTAnZMmofty28cA7GXa_gdxY2ompeOKMyZBQp2esPbePTO5knQp1Wfb43CWHjUKjtwXwUwiOOFEGTjDwRl6Wqtqpo%3D&q=Dr.+Joshi%27s+Care+%26+Cure+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwiw7Zr7l86PAxVB2DgGHcRVO44Q0bkNegQIJhAE&biw=1478&bih=708&dpr=1.3",
                "_blank"
              )
            }
            className="bg-amber-50 text-gray-800 p-3 rounded-lg inline-flex items-center cursor-pointer"
          >
            <div className="bg-amber-400 text-white p-1 rounded mr-2">
              <Star size={16} fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-sm">4.9/5 Rating</p>
              <p className="text-xs">Based on 113 Google Reviews</p>
            </div>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-white hover:text-[#0bc0df] transition-colors text-left flex items-center group"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#0bc0df] transition-colors"></span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Help
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(service.path)}
                  className="text-white hover:text-[#0bc0df] transition-colors text-left flex items-center group"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#0bc0df] transition-colors"></span>
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Contact Info
          </h3>
          <ul className="space-y-4 text-white pt-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
              <span>
                4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                Tilakwadi, Nashik, Maharashtra 422002
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-white" />
              <a
                href="tel:+919595902006"
                className="hover:text-white transition-colors font-medium"
              >
                +91 95959 02006
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-white" />
              <a
                href="tel:+919595902003"
                className="hover:text-white transition-colors font-medium"
              >
                +91 95959 02003
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-white" />
              <a
                href="mailto:support@richsol.com"
                className="hover:text-white transition-colors"
              >
                support@richsol.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-white" />
              <div>
                <p>Mon-Sat: 09:30 AM - 6:30 PM</p>
                <p className="text-teal-300">Sunday: Closed</p>
              </div>
            </li>
          </ul>

          {/* Emergency Contact */}
          {/* <div className="mt-6 p-4 bg-amber-500/10 border border-amber-400/30 rounded-lg">
            <p className="font-semibold text-amber-300 mb-1">
              Dental Emergency?
            </p>
            <a
              href="tel:+918149049104"
              className="text-white font-bold text-lg hover:underline"
            >
              Call Now: +91 81490 49104
            </a>
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-sm text-teal-300 border-t border-teal-700 pt-6">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Rich System Solutions Pvt Ltd
          </span>
          . All Rights Reserved.
        </p>

        <p className="flex flex-wrap justify-center items-center gap-3">
          <button
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-amber-400 transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-teal-600">•</span>
          <button
            onClick={() => navigate("/terms-and-service")}
            className="hover:text-amber-400 transition-colors"
          >
            Terms of Service
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
