import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  alertsystems,
  bulkemails,
  bulksmss,
  bulkvoicee,
  designdevelopementt,
  digitalautomationn,
  graphicDesignn,
  ivrr,
  outdoormarketingg,
  whatsappchatbots,
  whatsappservices,
  designmarketingg,
  digitalmarketing,
  digitalautomation,
  graphicdesign,
  alertsystem,
  ivrsystem,
  bulkemail,
  outdoormarketing,
} from "../../assets/index";
import data from "../../data/productsData.json";
import imageMapping from "../../data/imageMapping";

// Dummy data
const productsData = data.productsData;

// Mock fetch function
const fetchIntro = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (id) {
          const filterID = productsData.products.filter(
            (item) => item.product_name === id
          );

          if (filterID.length > 0) {
            resolve({
              id: filterID[0].id,
              title: filterID[0].title,
              subtitle: filterID[0].subtitle,
              description: filterID[0].description,
              image: filterID[0].image,
            });
          } else {
            reject(new Error("Product not found"));
          }
        } else {
          reject(new Error("No product ID provided"));
        }
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

const ServiceIntro = ({ subpage }) => {
  const [introduction, setIntroduction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIntroData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchIntro(subpage?.details);
        setIntroduction(data);
      } catch (err) {
        setError(err.message);
        setIntroduction(null);
      } finally {
        setLoading(false);
      }
    };

    if (subpage?.details) {
      getIntroData();
    } else {
      setLoading(false);
    }
  }, [subpage]);

  if (loading) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 flex items-center">
        <div className="card bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-xl flex flex-col sm:flex-row items-center ser-intro px-5 w-full">
          <div className="w-full sm:w-2/5">
            <div className="animate-pulse w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-full sm:w-3/5 p-5">
            <div className="animate-pulse h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="animate-pulse h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="space-y-2 mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
            <div className="flex flex-row mt-5 flex-wrap gap-2">
              <div className="animate-pulse h-10 bg-gray-300 rounded w-40 mr-2"></div>
              <div className="animate-pulse h-10 bg-gray-300 rounded w-36"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !introduction) {
    if (!subpage?.details) {
      return null;
    }
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Product not found: {subpage?.details}
        </div>
      </div>
    );
  }

  const formatTitle = (title) => {
    if (title === "Ivr System") return "IVR System";
    if (title === "Bulk Sms") return "Bulk SMS";
    if (title === "Digita Marketing") return "Digital Marketing";
    if (title === "Whatsapp Chatbot") return "WhatsApp Chatbot";
    return title;
  };

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 flex items-center">
      <div className="card bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-xl flex flex-col sm:flex-row items-center ser-intro px-5 w-full">
        <div className="w-full sm:w-2/5">
          <img
            src={imageMapping[introduction.image]}
            width={500}
            height={100}
            alt={"service-intro"}
            className="w-full h-64 object-contain rounded-lg"
          />
        </div>

        <div className="w-full sm:w-3/5 p-5">
          <h2 className="text-4xl font-bold capitalize">
            {formatTitle(introduction.title)}
          </h2>
          <h2 className="text-2xl my-3 font-semibold">
            {introduction.subtitle}
          </h2>
          <p className="text-sm text-justify antialiased pe-5">
            {introduction.description}
          </p>
          <div className="my-3 sm:my-5 flex flex-row flex-wrap gap-2">
            <Link
              to="/schedule-a-demo"
              className="btn rounded-full border-2 border-sky-500 bg-white text-sky-500 px-5 sm:px-10 me-2 sm:me-5 hover:bg-sky-500 hover:text-white transition-colors duration-200 py-2"
            >
              Schedule A Demo
            </Link>
            <Link
              to="/contact"
              className="btn bg-blue-950 px-5 sm:px-10 rounded-full text-white border-2 hover:bg-blue-800 transition-colors duration-200 py-2"
            >
              Talk To Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
