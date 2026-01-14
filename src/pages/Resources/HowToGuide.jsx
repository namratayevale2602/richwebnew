import React, { useEffect, useState } from "react";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa";
import Testimonials from "../../components/Fixed/Testimonials";
import Enquiry from "../../components/Form/Enquiry";

// Skeleton component for loading states
const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);

const SampleSms = [
  {
    id: 1,
    title: "Promotional SMS Templates",
    description:
      "Enhance your marketing campaigns with our curated Promotional SMS templates. Designed for maximum impact, these templates help you craft engaging messages for product launches, sales, and exclusive offers. Perfect for driving customer engagement and boosting results across industries!",
    link: "",
  },
  {
    id: 2,
    title: "Transactional SMS Templates",
    description:
      "Simplify your transactional communications with our ready-to-use Transactional SMS templates. Whether for order confirmations, payment alerts, account updates, or appointment reminders, these templates ensure clear, professional, and timely messages to keep your customers informed and engaged. Perfect for seamless customer service across industries.",
    link: "",
  },
  {
    id: 3,
    title: "OTP SMS Templates",
    description:
      "Secure your user interactions with our ready-to-use OTP SMS templates. Designed for delivering One-Time Passwords securely and efficiently, these templates ensure fast, reliable, and clear communication for user authentication and account security across various platforms and industries.",
    link: "",
  },
];

// Dummy data for when API is not available
const dummyData = {
  brochures: [
    {
      id: 1,
      introduction:
        "Explore our comprehensive collection of resources designed to help your business grow. From detailed guides to industry-specific templates, we provide everything you need to succeed in your digital marketing efforts.",
    },
  ],
  magzines: [
    {
      id: 1,
      title: "Digital Marketing Guide 2024",
      subtitle: "Complete Guide to Digital Success",
      description:
        "A comprehensive guide covering all aspects of digital marketing including SEO, social media, email marketing, and more. Perfect for businesses looking to enhance their online presence.",
      document: "/sample.pdf",
      image: "https://picsum.photos/200/250?random=1",
    },
    {
      id: 2,
      title: "Bulk SMS Marketing Handbook",
      subtitle: "Master SMS Marketing Strategies",
      description:
        "Learn how to effectively use bulk SMS for your marketing campaigns. This guide covers best practices, compliance guidelines, and successful case studies.",
      document: "/sample.pdf",
      image: "https://picsum.photos/200/250?random=2",
    },
  ],
};

const HowToGuide = () => {
  const [introduction, setIntroduction] = useState([]);
  const [magzines, setMagzines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Try to fetch from API, fallback to dummy data if fails
        try {
          const [brochuresRes, magzinesRes] = await Promise.all([
            fetch("https://richadmin.demovoting.com/api/brochures"),
            fetch("https://richadmin.demovoting.com/api/magzines"),
          ]);

          if (brochuresRes.ok && magzinesRes.ok) {
            const brochuresData = await brochuresRes.json();
            const magzinesData = await magzinesRes.json();
            setIntroduction(brochuresData.data);
            setMagzines(magzinesData.data);
          } else {
            throw new Error("API not available");
          }
        } catch (error) {
          // Fallback to dummy data
          console.log("Using dummy data:", error.message);
          setIntroduction(dummyData.brochures);
          setMagzines(dummyData.magzines);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to dummy data
        setIntroduction(dummyData.brochures);
        setMagzines(dummyData.magzines);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-semibold text-3xl sm:text-4xl text-[#b8c7e0] mt-10 mb-6">
            Our Resources
          </h1>

          {loading ? (
            <div className="flex justify-center">
              <div className="space-y-3 w-full max-w-4xl">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
                <Skeleton className="h-4 w-4/6 mx-auto" />
              </div>
            </div>
          ) : (
            <p className="text-[#e5edfc] text-lg leading-relaxed max-w-4xl mx-auto">
              {introduction[0]
                ? introduction[0].introduction
                : "Explore our comprehensive resources to help your business grow and succeed."}
            </p>
          )}
        </div>

        {/* Magazines/Downloads Section */}
        <div className="space-y-12 mb-16">
          {magzines.map((magzine, index) => (
            <Download
              key={magzine.id || index}
              title={magzine.title}
              subtitle={magzine.subtitle}
              description={magzine.description}
              document={magzine.document}
              image={magzine.image}
            />
          ))}
        </div>

        {/* SMS Templates Section */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="font-semibold text-3xl sm:text-4xl text-[#b8c7e0] mb-6">
              Ready-to-Use Bulk SMS Templates for Every Industry
            </h1>
            <p className="text-[#e5edfc] text-lg leading-relaxed max-w-4xl mx-auto">
              Our templates simplify the process of creating impactful messages,
              saving you time and effort while ensuring your campaigns resonate
              with your target audience. Whether you're running a marketing
              campaign, sending updates, or managing customer relationships, our
              industry-specific SMS templates help you communicate effectively,
              enhancing engagement and driving results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SampleSms.map((plan) => (
              <Sample
                key={plan.id}
                title={plan.title}
                description={plan.description}
                link={plan.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Testimonials />;
      <Enquiry />;
    </div>
  );
};

export default HowToGuide;

// Download Component
export function Download({ title, subtitle, description, document, image }) {
  return (
    <div className="bg-transparent rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src={image}
            width={200}
            height={250}
            alt={title}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#b8c7e0] mb-2">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl text-[#0bc0df] font-semibold mb-4">
              {subtitle}
            </h2>
          )}
          <p className="text-[#e5edfc] text-lg leading-relaxed mb-6">
            {description}
          </p>
          <a
            href={document}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <FaRegFilePdf className="text-lg" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

// Sample Component
export function Sample({ title, description, link }) {
  return (
    <div className="bg-white/12 hover:from-blue-950 hover:to-blue-900 hover:text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-blue-200 hover:border-blue-800 cursor-pointer group">
      <div className="flex flex-col h-full">
        <h2 className="card-title text-xl font-bold text-[#b8c7e0] mb-4">
          {title}
        </h2>
        <p className="text-[#e5edfc] leading-relaxed flex-grow mb-6">
          {description}
        </p>

        <div className="flex flex-col items-center space-y-4 mt-auto">
          <HiOutlineArrowDown className="text-2xl text-blue-600 group-hover:text-white animate-bounce" />
          <button className="w-full bg-sky-700 hover:bg-sky-800 group-hover:bg-white group-hover:text-blue-900 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
            <FaRegFilePdf />
            Download Sample PDF
          </button>
        </div>
      </div>
    </div>
  );
}
