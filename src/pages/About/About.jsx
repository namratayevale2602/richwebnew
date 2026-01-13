import React from "react";
import { useSEO } from "../../hooks/useSEO";
import AboutKey from "./AboutKey";
import AboutHero from "./AboutHero";
import Breadcrumb from "../../components/Breadcrumb";
import AboutUs from "./AboutUs";
import Counter from "../../components/Fixed/Counter";
import Testimonials from "../../components/Fixed/Testimonials";
import Enquiry from "../../components/Form/Enquiry";
import EnquiryFlex from "../../components/Fixed/EnquiryFlex";

const AboutPage = () => {
  useSEO("about");

  return (
    <div className="pt-40">
      {/* Breadcrumb */}
      {/* <Breadcrumb page="About" /> */}
      <AboutHero />
      <Counter />
      <AboutUs />
      <AboutKey />
      <Testimonials />
      <Enquiry />
      <EnquiryFlex />
    </div>
  );
};

export default AboutPage;
