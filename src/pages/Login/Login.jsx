import React from "react";
import { useSEO } from "../../hooks/useSEO";
import LoginService from "./LoginService";
import Breadcrumb from "../../components/Breadcrumb";

const LoginPage = () => {
  useSEO("login");

  return (
    <div className="pt-40">
      <Breadcrumb page="Login" />
      <LoginService />
    </div>
  );
};

export default LoginPage;
