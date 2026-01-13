import React, { useEffect, useState } from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  pramotionalSMS,
  transactionalSMS,
} from "../../assets/index";

import data from "../../data/productsData.json";
import imageMapping from "../../data/imageMapping";

// Dummy data for subtypes

const subtypesData = data.subtypesData;
const dummySubtypesData = {
  subtypes: [
    {
      id: 1,
      product_name: "bulk-sms",
      title: "Promotional SMS",
      description:
        "Promotional SMS are sent with the objective of promoting a product or service, and this category includes any sales and marketing messages, whether solicited by the recipient or not. These messages can only be sent to non-DND (Do Not Disturb) numbers between 9 AM and 9 PM. Additionally, the SMS will appear on the recipient's mobile as a numeric number. The character limit for SMS is 160 characters in English and 70 characters in Marathi. The service also supports database integration and provides an API for easy application integration. The validity of the promotional SMS service is one year",
      image: pramotionalSMS,
    },
    {
      id: 1,
      product_name: "bulk-sms",
      title: "Transactional SMS",
      description:
        "Transactional SMS are messages sent to customers to provide necessary information for using a product or service. For example, a bank might send an SMS to an account holder regarding their available account balance, or a company might send an SMS to a client about their invoice amount. These SMS are delivered 100% to both DND and non-DND numbers. The service allows multiple sender IDs and supports SMS character limits of 160 characters in English and 70 characters in Marathi. It also provides an API for development and has a one-year validity period. A services agreement is compulsory for using the service.",
      image: transactionalSMS,
    },
    {
      id: 1,
      product_name: "bulk-sms",
      title: "OTP SMS (One-Time Password SMS)",
      description:
        "OTP (One-Time Password) messages are secure, time-sensitive SMS used for authentication and verification. They are commonly used to confirm a user's identity during login or transactions, providing an extra layer of security. OTPs ensure safe access to online services by requiring users to enter a unique code sent to their mobile device. This prevents unauthorized access and protects sensitive information. Our OTP service guarantees timely and secure delivery, helping businesses enhance security and ensure a smooth user experience for their customers.",
      image: transactionalSMS,
    },
    {
      id: 7,
      product_name: "graphic-design",
      title: "Logo Design",
      description:
        "Our Logo Design service creates unique, memorable logos that reflect your brand's identity. Tailored to your vision, we design logos that make a lasting impression, ensuring your brand stands out and is easily recognizable across all platforms.",
      image: img1,
    },
    {
      id: 8,
      product_name: "graphic-design",
      title: "Infographic Design",
      description:
        "Transform complex information into visually engaging infographics that simplify communication. Our Infographic Design service helps present data and concepts in a way that's easy to understand, making your content more engaging and shareable.",
      image: img10,
    },
    {
      id: 9,
      product_name: "graphic-design",
      title: "PowerPoint Design",
      description:
        "Elevate your presentations with custom PowerPoint designs that captivate and engage your audience. We create visually striking slides that complement your message, ensuring your presentations leave a professional and lasting impact.",
      image: img1,
    },
    {
      id: 9,
      product_name: "graphic-design",
      title: "Catalogue Design",
      description:
        "Create stunning product catalogues that showcase your offerings in a visually appealing and organized manner. Our Catalogue Design service ensures your products are presented in a way that captures attention and drives conversions.",
      image: img1,
    },
    {
      id: 9,
      product_name: "graphic-design",
      title: "Business Card Design",
      description:
        "Make a strong first impression with custom-designed business cards that reflect your professional brand. We design sleek, creative business cards that leave a lasting mark, ensuring your contact details stand out in a competitive market.",
      image: img11,
    },
    {
      id: 9,
      product_name: "graphic-design",
      title: "Web Banner Design",
      description:
        "Capture attention with eye-catching web banners designed to promote your brand or special offers. Our Web Banner Design service creates visually compelling banners that attract clicks and drive traffic to your website.",
      image: img12,
    },
    {
      id: 9,
      product_name: "whatsapp-service",
      title: "Bulk WhatsApp Messaging",
      description:
        "Effortlessly reach a wider audience with our Bulk WhatsApp Messaging solution. Send text, images, videos, and PDFs to thousands of users at once. Perfect for promotions, updates, and customer engagement. Experience faster delivery, enhanced reach, and unparalleled efficiency.",
      image: img1,
    },
    {
      id: 9,
      product_name: "whatsapp-service",
      title: "Blue Tick Verified WhatsApp",
      description:
        "Boost trust and credibility with a Blue Tick Verified WhatsApp account. Showcase your brand as authentic and reliable with WhatsApp’s verified badge. Ideal for businesses seeking to strengthen customer relationships and enhance brand recognition.",
      image: img2,
    },
    {
      id: 9,
      product_name: "whatsapp-service",
      title: "WhatsApp Business API",
      description:
        "Streamline customer communication with the powerful WhatsApp Business API. Automate responses, integrate with CRMs, and send personalized notifications. Perfect for scaling businesses looking to deliver exceptional customer experiences.",
      image: img2,
    },
    {
      id: 9,
      product_name: "digital-auto",
      title: "Customer Relationship Management (CRM)",
      description:
        "Optimize your customer interactions with our advanced CRM solutions. Track leads, manage customer data, and automate follow-ups to boost sales and improve client retention. Perfect for businesses aiming to strengthen customer relationships and drive growth.",
      image: img4,
    },
    {
      id: 9,
      product_name: "digital-auto",
      title: "Content Management System (CMS)",
      description:
        "Simplify content creation and management with our intuitive CMS platform. Easily update your website, organize media, and ensure seamless user experiences. Ideal for businesses looking to maintain dynamic, content-rich online platforms effortlessly.",
      image: img5,
    },
    {
      id: 9,
      product_name: "digital-auto",
      title: "Workflow Automation",
      description:
        "Transform your processes with Workflow Automation. Streamline repetitive tasks, improve team collaboration, and boost productivity with tailored solutions for your business needs. Perfect for companies seeking to save time and focus on strategic growth.",
      image: img6,
    },
  ],
};

// Mock fetch function
const fetchSubtypes = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (id) {
          const filterData = subtypesData.subtypes.filter(
            (item) => item.product_name === id
          );
          resolve(filterData);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(new Error(error));
      }
    }, 400);
  });
};

const Digital = ({ subpage }) => {
  const [subtypeData, setSubtypeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSubtypeData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSubtypes(subpage?.details);
        setSubtypeData(data);
      } catch (err) {
        setError(err.message);
        setSubtypeData([]);
      } finally {
        setLoading(false);
      }
    };

    if (subpage?.details) {
      getSubtypeData();
    } else {
      setLoading(false);
    }
  }, [subpage]);

  // Show nothing if no data or loading/error for specific cases
  if (loading) {
    return (
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="animate-pulse h-10 bg-gray-300 rounded w-64 mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-96 mb-8"></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="grid gap-6 rounded-md p-8 md:p-10 bg-sky-100 shadow-md"
              >
                <div className="animate-pulse w-24 h-24 bg-gray-300 rounded-full"></div>
                <div className="animate-pulse h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
                  <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const hasData = Array.isArray(subtypeData) && subtypeData.length !== 0;

  if (!hasData) {
    return null;
  }

  if (error) {
    return (
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load services: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ display: hasData ? "block" : "none" }}>
      <div
        className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20"
        style={{ display: hasData ? "block" : "none" }}
      >
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl text-[#b8c7e0] font-bold md:text-5xl capitalize">
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Services That We Provide
          </h2>
          <p className="mb-8 mt-4 max-w-xl text-base text-[#0bc0df] md:mb-12 md:text-lg lg:mb-16">
            We are one of the best{" "}
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Agency and can take care of all your{" "}
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Needs
          </p>
        </div>

        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {subtypeData.map((subtype) => (
            <DigitalCard
              key={subtype.id}
              title={subtype.title}
              subtitle={subtype.subtitle}
              image={subtype.image}
              description={subtype.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export function DigitalCard({ title, subtitle, image, description }) {
  return (
    <div className="grid gap-6 rounded-md p-8 md:p-10 bg-white/12 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageMapping[image]}
        width={100}
        height={100}
        alt={title}
        className="rounded-full object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold text-[#0895d9] mb-1">{title}</h3>
      </div>
      <p className="text-sm text-[#e5edfc] text-justify leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Digital;
