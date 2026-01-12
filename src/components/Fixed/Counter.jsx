import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import images directly
import usericon from "../../assets/homeimg/user.png";
import troffeicon from "../../assets/homeimg/troffe.png";
import graphicon from "../../assets/homeimg/graph.png";
import clockicon from "../../assets/homeimg/clock.png";

const factsData = {
  sectionTitle: "Facts & Figures",
  sectionDescription:
    "Understand the Powerful Insights and Metrics That Demonstrate Our Success and Future Potential",
  facts: [
    {
      id: 1,
      icon: troffeicon,
      number: 16,
      title: "Years",
      subtitle: "of learning as a marketer",
    },
    {
      id: 2,
      icon: usericon,
      number: 2000,
      title: "+",
      subtitle: "Satisfied Clients",
    },
    {
      id: 3,
      icon: graphicon,
      number: 10,
      title: "Million +",
      subtitle: "Text delivering capacity / year",
    },
    {
      id: 4,
      icon: clockicon,
      number: 99,
      title: "%",
      subtitle: "API Uptime",
    },
  ],
};

const Counter = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(factsData.facts);
  }, []);

  return (
    <div className="py-20 bg-transparent">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[#0bc0df] mb-4">
            {factsData.sectionTitle}
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-[#b8c7e0] ">
            {factsData.sectionDescription}
          </p>
        </motion.div>

        <div className="px-20 flex flex-col sm:flex-row justify-between items-center">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mt-10"
            >
              <img
                src={fact.icon}
                alt={fact.subtitle}
                className="w-16 h-16 filter invert mb-4"
              />
              <CounterNumber digit={fact.number} title={fact.title} />
              <p className="text-[#0895d9] text-center mt-2">{fact.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter Number Component
const CounterNumber = ({ digit, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < digit) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [count, digit]);

  return (
    <h2 className="text-3xl mt-4 text-[#b8c7e0] font-semibold text-center">
      {count} {title}
    </h2>
  );
};

export default Counter;
