import React from "react";

const Title = ({
  industry_id,
  product_id,
  subpage,
  industry_name = "",
  service_name = "",
}) => {
  const service = subpage
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <>
      {industry_name && service_name ? (
        <div>
          <h2 className="font-semibold text-4xl text-center mt-10">
            {service_name
              .split("-")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}{" "}
            Service For The{" "}
            {industry_name.charAt(0).toUpperCase() +
              industry_name.slice(1).toLowerCase()}
          </h2>
          <p className="text-justify sm:text-center mt-3 mb-10">
            We offer expert{" "}
            {service_name
              .split("-")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}{" "}
            services to the {industry_name} industry, Following are the
            sub-areas of {industry_name} we serve
          </p>
        </div>
      ) : !service && industry_name ? (
        <div>
          <h2 className="font-semibold text-4xl text-center mt-10">
            We Provide Our Services To The{" "}
            {industry_name.charAt(0).toUpperCase() +
              industry_name.slice(1).toLowerCase()}
          </h2>
          <p className="text-justify sm:text-center mt-3 mb-10">
            We offer digital marketing, web development, software solutions, and
            bulk SMS services to all sectors of the {industry_name}.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold text-4xl text-center mt-10">
            How {service ? service : "Your Service"} Can Drive Your Business
            Growth
          </h2>
          <p className="text-justify sm:text-center mt-3">
            At {service ? service : "Your Service"}, we provide tailored
            solutions to help businesses grow. Our services are designed to
            deliver maximum impact for each client.
          </p>
          <p className="text-justify sm:text-center mb-10">
            We proudly serve industries including:
          </p>
        </div>
      )}
    </>
  );
};

export default Title;
