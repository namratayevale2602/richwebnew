// Industries component with proper SEO handling
import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
import { useLocation } from "react-router-dom";
import IndustriBenifits from "./IndustriBenifits";
import Breadcrumb from "../../components/Breadcrumb";
import FlexBanner from "../Home/FlexBanner";
import Enquiry from "../../components/Form/Enquiry";
import EnquiryFlex from "../../components/Fixed/EnquiryFlex";

const Industries = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const industrySlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'industries' for the main industries page
  const seoKey =
    industrySlug && industrySlug !== "industries"
      ? slugToSeoKeyMap[industrySlug]
      : "industries";

  useSEO(seoKey || "notFound");

  // Create subpage object for ServiceIntro
  const subpage = {
    details:
      industrySlug && industrySlug !== "industries" ? industrySlug : null,
  };

  return (
    <div className="pt-40">
      <Breadcrumb page="Industries" subpage={subpage} />
      {subpage.details && <IndustriBenifits subpage={subpage} />}
      <FlexBanner />
      <Enquiry />
      <EnquiryFlex />
      {/* Your industries content here */}
    </div>
  );
};

export default Industries;
