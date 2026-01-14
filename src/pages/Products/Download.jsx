import React from "react";
import { Link } from "react-router-dom";

const Download = ({ industry_id, product_id }) => {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-slate-400 text-md mb-3">
        Download the use cases in PDF format
      </h1>
      <Link
        to="/resources/how-to-guide"
        className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-200"
      >
        Sample PDF for E-commerce
      </Link>
    </div>
  );
};

export default Download;
