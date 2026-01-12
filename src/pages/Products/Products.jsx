import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { useLocation } from "react-router-dom";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
import Quote from "./Quote";
import ServiceIntro from "./ServiceIntro";
import Digital from "./Digital";
import Benefits from "./Benefits";
import CaseStudies from "./CaseStudies";
import FlexBanner from "../Home/FlexBanner";
import Testimonials from "../../components/Fixed/Testimonials";
import Enquiry from "../../components/Form/Enquiry";
import EnquiryFlex from "../../components/Fixed/EnquiryFlex";
import Blog from "../Home/Blog";
import ProductFAQ from "./ProductFAQ";
import Breadcrumb from "../../components/Breadcrumb";

const Products = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const productSlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'products' for the main products page
  const seoKey =
    productSlug && productSlug !== "products"
      ? slugToSeoKeyMap[productSlug]
      : "products";

  useSEO(seoKey || "notFound");

  // Create subpage object for ServiceIntro
  const subpage = {
    details: productSlug && productSlug !== "products" ? productSlug : null,
  };

  return (
    <div className="min-h-screen bg-white pt-40">
      <Breadcrumb page="Products" subpage={subpage} />
      {/* Service Intro Section - Only show if we have a specific product */}
      {subpage.details && <ServiceIntro subpage={subpage} />}
      {subpage.details && <Digital subpage={subpage} />}
      {subpage.details && <Benefits subpage={subpage} />}
      {/* Case Studies Section */}
      <CaseStudies
        industry={0}
        product={0}
        subpage={subpage.details}
        industry_name=""
        service_name={subpage.details}
      />
      {/* Quote Section */}
      <Quote />
      <FlexBanner />
      <Testimonials />
      {subpage.details && <ProductFAQ subpage={subpage} />}
      <Blog />
      <Enquiry />
      <EnquiryFlex />
    </div>
  );
};

export default Products;
