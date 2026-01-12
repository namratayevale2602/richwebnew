import React from "react";
import { useSEO } from "../../hooks/useSEO";
import ContactPage from "./ContactPage";
import EnquiryFlex from "../../components/Fixed/EnquiryFlex";

const Contact = () => {
  useSEO("contact");

  return (
    <div className="pt-40">
      <ContactPage />
      <EnquiryFlex />
    </div>
  );
};

export default Contact;
