import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClockCircle,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiWhatsappFill, RiFacebookCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import ContactForm from "./ContactForm";
import Breadcrumb from "../../components/Breadcrumb";

// Dummy contact data
const dummyContactData = [
  {
    id: 1,
    address:
      "4th Floor, Akravi Disha, 401, opposite Hotel City Pride, Tilakwadi, Nashik, Maharashtra 422002.",
    social_links: [
      { value: "https://facebook.com/richsystems" },
      { value: "https://linkedin.com/company/richsystems" },
      { value: "https://instagram.com/richsystems" },
    ],
    support_enquiry: [
      { support_enquiry: "9595902003" },
      { support_enquiry: "9595902006" },
    ],
    sales_enquiry: [
      { sales_enquiry: "9765432109" },
      { sales_enquiry: "9345678901" },
    ],
  },
];

// Mock fetch function
const fetchContactData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(dummyContactData);
      } catch (error) {
        reject(new Error(error));
      }
    }, 300);
  });
};

const ContactPage = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContactData = async () => {
      try {
        setLoading(true);
        const data = await fetchContactData();
        setContactData(data);
      } catch (err) {
        setError(err.message);
        setContactData([]);
      } finally {
        setLoading(false);
      }
    };

    getContactData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50">
        <div className="w-full h-48 bg-blue-900">
          <div className="h-full w-full flex flex-col items-center justify-center py-10">
            <div className="animate-pulse h-8 bg-blue-700 rounded w-48 mb-4"></div>
            <div className="animate-pulse h-4 bg-blue-700 rounded w-64 mb-2"></div>
            <div className="animate-pulse h-4 bg-blue-700 rounded w-72"></div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side loading */}
              <div className="w-full lg:w-1/2">
                <div className="animate-pulse h-10 bg-gray-300 rounded w-3/4 mb-6"></div>
                <div className="animate-pulse h-4 bg-gray-300 rounded w-full mb-4"></div>
                <div className="animate-pulse h-8 bg-gray-300 rounded w-48 mb-8"></div>
                <div className="animate-pulse h-64 bg-gray-300 rounded w-full"></div>
              </div>
              {/* Right side loading */}
              <div className="w-full lg:w-1/2">
                <div className="animate-pulse h-80 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load contact information: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="w-full h-48 bg-blue-900">
        <div className="h-full w-full flex flex-col items-center justify-center py-10">
          <h2 className="text-white text-4xl mb-5 font-bold">Contact Us</h2>
          <p className="text-white mb-2 text-lg">
            We love questions and feedback - and we're always happy to help!
          </p>
          <p className="text-white mb-2 text-lg">
            Here are some ways to contact us.
          </p>
        </div>
      </div>

      <Breadcrumb page="contact" />

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Company Info */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Rich System Solution Pvt.Ltd
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                {contactData[0]?.address}
              </p>

              {/* Social Links */}
              <div className="flex flex-row justify-start mb-8">
                <Link
                  to={contactData[0]?.social_links[0]?.value || "#"}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <RiFacebookCircleFill className="text-4xl me-4" />
                </Link>
                <Link
                  to={contactData[0]?.social_links[1]?.value || "#"}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <AiFillLinkedin className="text-4xl mx-4" />
                </Link>
                <Link
                  to={"https://www.youtube.com/@RICHSystemSolutions"}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <AiFillYoutube className="text-4xl mx-4" />
                </Link>
                <Link
                  to={contactData[0]?.social_links[2]?.value || "#"}
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <AiFillInstagram className="text-4xl mx-4" />
                </Link>
              </div>

              <hr className="my-8" />

              {/* Working Hours and Support */}
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-xl font-bold my-3 text-gray-900">
                    Working Hours
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex flex-row items-center text-gray-700">
                      <AiOutlineCalendar className="me-3 text-black" />
                      Monday - Saturday
                    </li>
                    <li className="flex flex-row items-center text-gray-700">
                      <AiOutlineClockCircle className="me-3 text-black" />
                      9:30am - 6:30pm
                    </li>
                  </ul>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold my-3 text-gray-900">
                    For Support Assistance
                  </h2>
                  <ul className="space-y-3">
                    {contactData[0]?.support_enquiry?.map((sales, index) => (
                      <li
                        className="flex flex-row items-center text-gray-700"
                        key={index}
                      >
                        <MdOutlineSupportAgent className="me-3 text-black" />
                        +91 {sales.support_enquiry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="my-8" />

              {/* Map */}
              <div className="my-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.242272312533!2d73.77775407427671!3d19.998344022372525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb084d22ff73%3A0xe3e70a169bf7cb1b!2sRICH%20System%20Solutions%20Pvt.%20Ltd.%20%7C%20Digital%20Marketing%20%7C%20Bulk%20SMS%20%7C%20Website%20Development!5e0!3m2!1sen!2sin!4v1725346020421!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="Rich System Solutions Location"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="font-bold text-2xl mb-8 text-gray-900 capitalize">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
