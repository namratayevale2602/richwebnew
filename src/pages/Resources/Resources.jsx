import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { useLocation } from "react-router-dom";
import { slugToSeoKeyMap } from "../../utils/seoMapping";

import Career from "./Career";
import Breadcrumb from "../../components/Breadcrumb";
import Blog from "../Home/Blog";
import HowToGuide from "./HowToGuide";
import FaqResource from "./FaqResource";

const Resources = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const resourceSlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'resources' for the main resources page
  const seoKey =
    resourceSlug && resourceSlug !== "resources"
      ? slugToSeoKeyMap[resourceSlug]
      : "resources";

  useSEO(seoKey || "notFound");

  // Render the appropriate component based on the slug
  const renderResourceContent = () => {
    switch (resourceSlug) {
      case "career":
        return <Career />;
      case "blog":
        return <Blog />;
      case "how-to-guide":
        return <HowToGuide />;
      case "faq":
        return <FaqResource />;
      // case "resources":
      //   return <ResourcesMain />;
      default:
        return <NotFound />;
    }
  };

  // Create subpage object for ServiceIntro
  const subpage = {
    details: resourceSlug && resourceSlug !== "resources" ? resourceSlug : null,
  };

  return (
    <div className="min-h-screen bg-white pt-40">
      <Breadcrumb page="Resources" subpage={subpage} />
      {renderResourceContent()}
    </div>
  );
};

// 404 Component for invalid routes
const NotFound = () => {
  return (
    <div className="pt-32 pb-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The resource you're looking for doesn't exist.
        </p>
        <a
          href="/resources"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Resources
        </a>
      </div>
    </div>
  );
};

export default Resources;
