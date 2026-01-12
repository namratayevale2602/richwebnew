import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mock fetch function for URL generation
const get_url = async (industry = 0, product = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (industry !== 0 && product !== 0) {
          const industries = [
            { id: 1, title: "ecommerce" },
            { id: 2, title: "healthcare" },
            { id: 3, title: "education" },
          ];

          const products = [
            { id: 1, title: "Bulk SMS" },
            { id: 2, title: "IVR System" },
            { id: 3, title: "Digital Marketing" },
            { id: 4, title: "WhatsApp Service" },
          ];

          const filter_industry = industries.filter(
            (item) => item.id === industry
          );

          const filter_product = products.filter((item) => item.id === product);

          if (filter_industry.length > 0 && filter_product.length > 0) {
            const url = `/industries/${filter_industry[0].title.toLowerCase()}/${filter_product[0].title
              .replace(/\s+/g, "-")
              .replace(/[^\w\-]+/g, "")
              .replace(/\-\-+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "")
              .toLowerCase()}`;
            resolve(url);
          }
        }

        resolve("#");
      } catch (error) {
        reject(new Error(error));
      }
    }, 200);
  });
};

const Case = ({ title, icon, industry_id, product_id }) => {
  const [url, setUrl] = useState("#");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const result = await get_url(industry_id, product_id);
        setUrl(result);
      } catch (error) {
        setUrl("#");
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [industry_id, product_id]);

  return (
    <Link to={url}>
      <div className="group card bg-sky-100 hover:bg-blue-950 hover:text-white w-[350px] shadow-md hover:shadow-sm cursor-pointer transition-all duration-300">
        <div className="card-body flex flex-row-reverse justify-between items-center p-4">
          <div className="w-full ps-16">
            <h2 className="card-title text-xl font-semibold">{title}</h2>
          </div>
          <img
            src={icon}
            width={25}
            height={25}
            alt={"case study"}
            className="transition duration-300 group-hover:invert"
          />
        </div>
      </div>
    </Link>
  );
};

export default Case;
