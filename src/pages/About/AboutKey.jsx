import { useEffect, useState } from "react";

const AboutKey = () => {
  const [aboutData] = useState([
    {
      type: "About",
      img: "/images/about-us.jpg",
      title: "Who We Are",
      subtitle: "Our Story",
      description:
        "Founded with a vision to revolutionize the industry, we have grown from a small startup to a trusted partner for businesses worldwide. Our journey is marked by innovation, quality, and customer satisfaction.",
    },
    {
      type: "Vision",
      img: "/images/vision.jpg",
      title: "Our Vision",
      subtitle: "",
      description:
        "To be the global leader in our field, setting new standards of excellence and innovation while creating sustainable value for our stakeholders and communities we serve.",
    },
    {
      type: "Mission",
      img: "/images/mission.jpg",
      title: "Our Mission",
      subtitle: "",
      description:
        "To deliver exceptional products and services that exceed customer expectations through continuous innovation, operational excellence, and a commitment to quality that never compromises.",
    },
    {
      type: "Offer",
      img: "/images/what-we-do.jpg",
      title: "What We Do",
      subtitle: "Our Services",
      description:
        "We offer a comprehensive range of services including consulting, development, and support. Our solutions are tailored to meet the unique needs of each client, ensuring optimal results and maximum value.",
    },
  ]);

  useEffect(() => {
    // Simple fade-in animation on load
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
    });
  }, []);

  const introduction = aboutData.find((item) => item.type === "Introduction");
  const about = aboutData.find((item) => item.type === "About");
  const vision = aboutData.find((item) => item.type === "Vision");
  const mission = aboutData.find((item) => item.type === "Mission");
  const offer = aboutData.find((item) => item.type === "Offer");

  return (
    <div className="min-h-screen">
      {/* Introduction Section */}
      {introduction && (
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 fade-in opacity-0 translate-y-4 transition-all duration-500">
              <h1 className="text-blue-900 text-5xl lg:text-6xl font-bold mb-4">
                {introduction.title}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-6">
                {introduction.subtitle}
              </p>
            </div>
            <div className="flex justify-center mb-12 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
              <img
                src={introduction.img}
                alt={introduction.title}
                className="rounded-xl shadow-2xl max-w-4xl w-full"
              />
            </div>
            <div className="max-w-4xl mx-auto fade-in opacity-0 translate-y-4 transition-all duration-500 delay-300">
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-center">
                {introduction.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {about && (
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500">
                <h2 className="text-[#e5edfc] text-4xl lg:text-6xl font-semibold mb-3">
                  {about.title}
                </h2>
                <h3 className="text-xl lg:text-2xl text-[#0bc0df] mb-4">
                  {about.subtitle}
                </h3>
                <p className="text-[#e5edfc] text-lg leading-relaxed">
                  {about.description}
                </p>
              </div>
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
                <div className="flex justify-center">
                  <img
                    src={about.img}
                    alt={about.title}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision Section */}
      {vision && (
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500">
                <h2 className="text-[#e5edfc] text-4xl lg:text-6xl font-semibold mb-3 text-center">
                  {vision.title}
                </h2>
                <p className="text-[#e5edfc] text-lg leading-relaxed">
                  {vision.description}
                </p>
              </div>
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
                <div className="flex justify-center">
                  <img
                    src={vision.img}
                    alt={vision.title}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission Section */}
      {mission && (
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500">
                <h2 className="text-[#e5edfc] text-4xl lg:text-6xl font-semibold mb-3">
                  {mission.title}
                </h2>
                <p className="text-[#e5edfc] text-lg leading-relaxed">
                  {mission.description}
                </p>
              </div>
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
                <div className="flex justify-center">
                  <img
                    src={mission.img}
                    alt={mission.title}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What We Do Section */}
      {offer && (
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500">
                <h2 className="text-[#e5edfc] text-4xl lg:text-6xl font-semibold mb-3">
                  {offer.title}
                </h2>
                <h3 className="text-xl lg:text-2xl text-[#0bc0df] mb-4">
                  {offer.subtitle}
                </h3>
                <p className="text-[#e5edfc] text-lg leading-relaxed">
                  {offer.description}
                </p>
              </div>
              <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
                <div className="flex justify-center">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Floating Enquiry Button */}
      <EnquiryFlexButton />
    </div>
  );
};

// Floating Enquiry Button Component
const EnquiryFlexButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <button className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AboutKey;
