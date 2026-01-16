import { useEffect } from "react";
import { aboutus } from "../../assets/index";

const AboutUs = () => {
  useEffect(() => {
    // Simple fade-in animation on load
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Main About Section */}
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#b8c7e0] mb-4 leading-tight">
                  About Us
                </h1>
              </div>

              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#0bc0df] mb-6 leading-snug">
                The Journey Of Rich System Solution
              </h1>

              <div className="space-y-4 text-[#e5edfc] text-lg leading-relaxed">
                <p>
                  At Rich System Solution, we are Nashik's leading digital
                  marketing agency, transforming businesses since 2009 with
                  impactful strategies that drive growth.
                </p>
                <p>
                  Having partnered with over 400 brands, we specialize in a full
                  suite of services, including content creation, web design,
                  social media management, Google Ads, programmatic marketing,
                  and email marketing.
                </p>
                <p>
                  Our unique blend of stability and flexibility allows us to
                  cater to startups and established brands alike. With
                  transparent reporting, direct access to our core team, and
                  secure data handling, we're the trusted partner for businesses
                  seeking measurable results and lasting success in the digital
                  world.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 fade-in opacity-0 translate-y-4 transition-all duration-500 delay-200">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutus}
                    alt="Rich System Solution Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
