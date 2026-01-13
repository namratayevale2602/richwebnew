import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Quote = () => {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <FaDownload className="mx-auto w-14 h-14 text-[#e5edfc]" />
          <h2 className="mt-10 text-3xl font-bold leading-tight text-[#b8c7e0] sm:text-4xl lg:text-5xl">
            Get Quote Instantly
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#0bc0df]">
            Form submission made easy – get your quote right away!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center px-4 py-4 text-[#e5edfc] transition-all duration-200 border-2 border-[#e5edfc] rounded-md hover:bg-white hover:text-[#073379] focus:bg-black focus:text-white"
            role="button"
          >
            Get Quote
          </Link>
        </div>

        <p className="mt-6 text-base text-center text-gray-600">
          Download Your Quote
        </p>
      </div>
    </section>
  );
};

export default Quote;
