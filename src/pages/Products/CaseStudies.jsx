import React, { useEffect, useState } from "react";
import Case from "./Case";
import Download from "./Download";
import Title from "./Title";
import {
  automobile,
  banking,
  brodcasting,
  ecommerce,
  education,
  entertainment,
  finance,
  fitness,
  hospital,
  insurance,
  realestate,
  travel,
} from "../../assets/index";
import data from "../../data/productsData.json";
import imageMapping from "../../data/imageMapping";

//  data with product_name mapping
const caseStudiesData = data.caseStudiesData;
const dummyCaseStudiesData = {
  "industry-subarea": [
    {
      id: 1,
      title: "Hospital",
      image: hospital,
      industry_id: 1,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 2,
      title: "Banking",
      image: banking,
      industry_id: 2,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 3,
      title: "Insurance",
      image: insurance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 4,
      title: "Finance",
      image: finance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 5,
      title: "Real Estate",
      image: realestate,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 6,
      title: "Travels",
      image: travel,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 7,
      title: "E-Commerce",
      image: ecommerce,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 8,
      title: "Education",
      image: education,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 9,
      title: "Automobile",
      image: automobile,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 10,
      title: "Entertainment",
      image: entertainment,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 11,
      title: "Brodcasting",
      image: brodcasting,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 12,
      title: "Fitness",
      image: fitness,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-sms",
    },
    {
      id: 1,
      title: "Hospital",
      image: hospital,
      industry_id: 1,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 2,
      title: "Banking",
      image: banking,
      industry_id: 2,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 3,
      title: "Insurance",
      image: insurance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 4,
      title: "Finance",
      image: finance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 5,
      title: "Real Estate",
      image: realestate,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 6,
      title: "Travels",
      image: travel,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 7,
      title: "E-Commerce",
      image: ecommerce,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 8,
      title: "Education",
      image: education,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 9,
      title: "Automobile",
      image: automobile,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 10,
      title: "Entertainment",
      image: entertainment,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 11,
      title: "Brodcasting",
      image: brodcasting,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 12,
      title: "Fitness",
      image: fitness,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "bulk-voice",
    },
    {
      id: 1,
      title: "Hospital",
      image: hospital,
      industry_id: 1,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 2,
      title: "Banking",
      image: banking,
      industry_id: 2,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 3,
      title: "Insurance",
      image: insurance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 4,
      title: "Finance",
      image: finance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 5,
      title: "Real Estate",
      image: realestate,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 6,
      title: "Travels",
      image: travel,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 7,
      title: "E-Commerce",
      image: ecommerce,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 8,
      title: "Education",
      image: education,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 9,
      title: "Automobile",
      image: automobile,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 10,
      title: "Entertainment",
      image: entertainment,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 11,
      title: "Brodcasting",
      image: brodcasting,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 12,
      title: "Fitness",
      image: fitness,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "graphic-design",
    },
    {
      id: 1,
      title: "Hospital",
      image: hospital,
      industry_id: 1,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 2,
      title: "Banking",
      image: banking,
      industry_id: 2,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 3,
      title: "Insurance",
      image: insurance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 4,
      title: "Finance",
      image: finance,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 5,
      title: "Real Estate",
      image: realestate,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 6,
      title: "Travels",
      image: travel,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 7,
      title: "E-Commerce",
      image: ecommerce,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 8,
      title: "Education",
      image: education,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 9,
      title: "Automobile",
      image: automobile,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 10,
      title: "Entertainment",
      image: entertainment,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 11,
      title: "Brodcasting",
      image: brodcasting,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 12,
      title: "Fitness",
      image: fitness,
      industry_id: 3,
      product_id: [{ product_id: 1 }],
      product_name: "whatsapp-service",
    },
    {
      id: 13,
      title: "IVR for Customer Support",
      image: "/images/ivr-case.jpg",
      industry_id: 1,
      product_id: [{ product_id: 2 }],
      product_name: "ivr-system",
    },
    {
      id: 14,
      title: "Digital Marketing Campaigns",
      image: "/images/digital-case.jpg",
      industry_id: 1,
      product_id: [{ product_id: 3 }],
      product_name: "digital-marketing",
    },
  ],
  products: [
    {
      id: 1,
      title: "Bulk SMS",
      name: "Bulk SMS Service",
      slug: "bulk-sms",
    },
    {
      id: 2,
      title: "IVR System",
      name: "IVR System",
      slug: "ivr-system",
    },
    {
      id: 3,
      title: "Digital Marketing",
      name: "Digital Marketing",
      slug: "digital-marketing",
    },
    {
      id: 4,
      title: "WhatsApp Service",
      name: "WhatsApp Business",
      slug: "whatsapp-service",
    },
    {
      id: 5,
      title: "Bulk Voice",
      name: "Bulk Voice",
      slug: "bulk-voice",
    },
    {
      id: 6,
      title: "WhatsApp Chatbot",
      name: "WhatsApp Chatbot",
      slug: "whats-chatbot",
    },
    {
      id: 7,
      title: "Digital Automation",
      name: "Digital Automation",
      slug: "digital-auto",
    },
    {
      id: 8,
      title: "Design Development",
      name: "Design Development",
      slug: "design-develop",
    },
    {
      id: 9,
      title: "Graphic Design",
      name: "Graphic Design",
      slug: "graphic-design",
    },
    {
      id: 10,
      title: "Alert System",
      name: "Alert System",
      slug: "alert-system",
    },
    {
      id: 11,
      title: "Bulk Email",
      name: "Bulk Email",
      slug: "bulk-email",
    },
    {
      id: 12,
      title: "Outdoor Marketing",
      name: "Outdoor Marketing",
      slug: "outdoor-marketing",
    },
  ],
};

// Product slug to ID mapping
const productSlugToId = {
  "bulk-sms": 1,
  "ivr-system": 2,
  "digital-marketing": 3,
  "whatsapp-service": 4,
  "bulk-voice": 5,
  "whats-chatbot": 6,
  "digital-auto": 7,
  "design-develop": 8,
  "graphic-design": 9,
  "alert-system": 10,
  "bulk-email": 11,
  "outdoor-marketing": 12,
};

// Mock fetch function
const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(caseStudiesData["industry-subarea"]);
      } catch (error) {
        reject(new Error(error));
      }
    }, 400);
  });
};

const CaseStudies = ({
  industry = 0,
  product = 0,
  subpage,
  industry_name,
  service_name,
}) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData();
        setResult(data);
      } catch (err) {
        setError(err.message);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Debug logging
  console.log("CaseStudies Debug:", {
    subpage,
    industry,
    product,
    allData: result,
    productId: productSlugToId[subpage],
  });

  // Get product ID from slug
  const currentProductId = productSlugToId[subpage] || 0;

  let filteredData = [];

  if (result.length > 0) {
    // Simple filtering by product_name
    filteredData = result.filter((item) => item.product_name === subpage);

    console.log("Filtered Data:", filteredData);
  }

  if (loading) {
    return (
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-20">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-10"></div>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-sky-100 w-[350px] shadow-md p-6">
              <div className="flex justify-between items-center">
                <div className="w-full ps-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center my-10">
          <div className="h-4 bg-gray-300 rounded w-64 mb-3"></div>
          <div className="h-12 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-20 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load case studies: {error}
        </div>
      </div>
    );
  }

  // Show message if no case studies found
  if (filteredData.length === 0) {
    return (
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-20">
        <Title
          industry_id={0}
          product_id={0}
          subpage={subpage}
          industry_name={industry_name}
          service_name={service_name}
        />

        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No case studies available for {subpage} at the moment.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Check back later for updated case studies.
          </p>
        </div>

        <Download industry_id={0} product_id={0} />
      </div>
    );
  }

  return (
    <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-20">
      <Title
        industry_id={0}
        product_id={0}
        subpage={subpage}
        industry_name={industry_name}
        service_name={service_name}
      />

      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {filteredData.map((record, index) => (
          <Case
            key={record.id}
            title={record.title}
            icon={imageMapping[record.image]}
            industry_id={record.industry_id}
            product_id={currentProductId}
          />
        ))}
      </div>
      <Download industry_id={0} product_id={0} />
    </div>
  );
};

export default CaseStudies;
