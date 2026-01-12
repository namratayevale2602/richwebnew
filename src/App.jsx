import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Products from "./pages/Products/Products";
import Industries from "./pages/Industries/Industries";
import Resources from "./pages/Resources/Resources";
import Contact from "./pages/Contact/Contact";
import AutomationPage from "./pages/Automation/Automation";
import InternshipPage from "./pages/Internship/Internship";
import LoginPage from "./pages/Login/Login";
import BlogDetail from "./pages/Home/BlogDetail";
import Demo from "./components/Schedule-demo/Demo";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import SoftDev from "./pages/software/SoftDev";
import DigitalMarketing from "./pages/digitalmarketing/DigitalMarketing";
import SoftDevList from "./pages/software/SoftDevList";
import DigitalMarketingList from "./pages/digitalmarketing/DigitalMarketingList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:productSlug" element={<Products />} />
        <Route path="/industries/:industrySlug" element={<Industries />} />
        <Route path="/resources/:resourceSlug" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-automation" element={<AutomationPage />} />
        <Route path="/career" element={<InternshipPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources/blogs/:id" element={<BlogDetail />} />
        <Route path="/schedule-a-demo" element={<Demo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/software-it-services/:slug" element={<SoftDev />} />
        <Route
          path="/digital-marketing-services/:slug"
          element={<DigitalMarketing />}
        />
        <Route path="/software-it-services" element={<SoftDevList />} />
        <Route
          path="/digital-marketing-services"
          element={<DigitalMarketingList />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
