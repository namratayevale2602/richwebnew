import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useSEO } from "../../hooks/useSEO";

// Options data
const collegeOptions = [
  "Select College",
  "Government Polytechnic, Nashik",
  "K. K. Wagh Polytechnic",
  "Guru Gobind Singh Polytechnic",
  "MET Polytechnic",
  "MVP's RSM Polytechnic",
  "Sandip Polytechnic",
  "SHHJB Polytechnic",
  "Mahavir Polytechnic",
  "Gurukul Polytechnic",
  "JMCT Polytechnic",
  "SND Polytechnic Yeola",
  "M. S. Gosavi Polytechnic",
  "KBH Polytechnic, Malegaon",
  "KVN Naik Polytechnic",
  "Matoshri Polytechnic, Nashik",
  "MIT Polytechnic Yeola",
  "Brahma Valley Polytechnic",
  "Kadva Polytechnic",
  "NIT Polytechnic, Nashik",
  "Shatabdi Polytechnic, Nashik",
  "Shri Kapildhara Polytechnic, Nashik",
  "Sunsuba Polytechnic, Igatpuri",
  "Potdar Polytechnic, Malegaon",
];

const branchOptions = ["Computer", "IT", "AIDS", "AIML"];
const yearOptions = ["Second Year", "Third Year", "Other"];
const technologyOptions = [
  "Full Stack Development using Python",
  "Full Stack Development Using JAVA",
  "Data Science and AI",
  "Artificial Intelligance & Automation",
  "Design Engineering with UI/UX ",
  "Web Development",
  "Amazon Web Services (AWS)",
  "Digital Marketing",
  "Android App Development Internship",
  "Other",
];
const modeOptions = ["Offline", "Online"];
const locationOptions = ["Nashik"];
const genderOptions = ["Male", "Female"];

// Internship content for hero section
const internshipContent = [
  {
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Full Stack Development - Python",
    description:
      "Master Flask/Django, React.js, REST APIs, and Cloud Deployment with 12 weeks of hands-on learning.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwamF2YSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Full Stack Development - Java",
    description:
      "Learn Spring Boot, React.js, Microservices, and CI/CD pipelines with real-world projects.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    title: "Data Science & Applications",
    description:
      "Gain expertise in Machine Learning, Deep Learning, and Big Data Analytics using Python.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Artificial Intelligence & Automation",
    description:
      "Develop AI models, build chatbots, and work on RPA solutions with cutting-edge tools.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    title: "Web Development",
    description:
      "Become proficient in React.js, Node.js, MongoDB, and Cloud Deployment for scalable web apps.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
    title: "Digital Marketing",
    description:
      "Master SEO, Social Media Marketing, Google Ads, and Analytics-driven strategies.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwamF2YSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Android App Development",
    description:
      "Comprehensive training in Android app development, covering UI/UX design, Kotlin & Java programming, database management, API integration, background services, app security, and deployment on the Google Play Store.",
  },
];

// Internship data for details section
const internshipData = {
  "Full Stack Development using Python": {
    description:
      "Comprehensive program covering front-end, backend, and cloud deployment.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Front-end Development: HTML, CSS, JavaScript, Bootstrap",
      "JavaScript & React.js: Component-based architecture, Hooks, API calls",
      "Backend Development with Python: Flask/Django, REST API Development",
      "Database Management: PostgreSQL/MySQL, MongoDB",
      "Authentication & Security: OAuth, JWT, CSRF protection",
      "Version Control & CI/CD: Git, GitHub, Docker",
      "Cloud Deployment: AWS, DigitalOcean, or Heroku",
    ],
  },
  "Full Stack Development using Java": {
    description:
      "Hands-on training in Java, Spring Boot, and Microservices architecture.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Core Java & Object-Oriented Programming",
      "Spring Boot & REST API Development",
      "Database Management: MySQL, Hibernate ORM",
      "Frontend Technologies: HTML, CSS, JavaScript, React.js",
      "Microservices Architecture: Spring Cloud, Kubernetes",
      "Security & Authentication: OAuth 2.0, JWT, Role-based Access Control",
      "DevOps & Cloud Deployment: AWS, Jenkins, Docker",
    ],
  },
  "Data Science and Its Applications using Python": {
    description:
      "Advanced data analytics, machine learning, and cloud-based big data solutions.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Python Basics & Data Handling: Pandas, NumPy",
      "Data Visualization: Matplotlib, Seaborn",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning: Regression, Classification, Clustering (Scikit-learn)",
      "Deep Learning & Neural Networks: TensorFlow, Keras",
      "Big Data & Cloud Analytics: Apache Spark, AWS Data Services",
      "Model Deployment: Flask API, Streamlit, FastAPI",
    ],
  },
  "Artificial Intelligence and Automation": {
    description: "NLP, computer vision, and AI-driven automation.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to AI & ML: Supervised & Unsupervised Learning",
      "Natural Language Processing (NLP): Text Preprocessing, Sentiment Analysis",
      "Computer Vision: OpenCV, Image Recognition",
      "AI Chatbot Development: Rasa, Dialogflow",
      "Robotic Process Automation (RPA): UiPath, Automation Anywhere",
      "AutoML & AI Cloud Services: Google AutoML, AWS Sagemaker",
      "Model Optimization & Deployment: ONNX, TensorFlow Lite",
    ],
  },
  "Web Development": {
    description:
      "Front-end and backend web technologies with DevOps and cloud deployment.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Frontend Technologies: HTML, CSS, JavaScript, Bootstrap",
      "React.js: Components, Props, State Management, API Integration",
      "Backend Development: Node.js, Express.js, MongoDB",
      "Authentication & Authorization: JWT, OAuth2",
      "Performance Optimization & Security: CORS, CSRF, WebSockets",
      "DevOps for Web Apps: CI/CD, Docker, Kubernetes",
      "Cloud & Serverless Deployment: AWS Lambda, Netlify, Firebase",
    ],
  },
  "Digital Marketing": {
    description: "SEO, social media marketing, and AI-driven analytics.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "SEO & SEM: On-page, Off-page, Google Ads",
      "Content Marketing & Copywriting: Blogging, Video Marketing",
      "Social Media Marketing: Facebook, LinkedIn, Instagram, Twitter Ads",
      "Email & Affiliate Marketing: Mailchimp, Drip Campaigns",
      "Google Analytics & Data-Driven Marketing",
      "Marketing Automation: HubSpot, Zapier",
      "AI in Digital Marketing: Chatbots, Predictive Analytics",
    ],
  },
  "UI/UX Design": {
    description:
      "Comprehensive UI/UX training covering research, prototyping, usability testing, and frontend collaboration.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to UI/UX Design",
      "User Research & Analysis",
      "Visual Design Principles",
      "Wireframing & Prototyping",
      "UI Design for Web & Mobile",
      "Usability Testing & Feedback",
      "Design Systems & UI Components",
      "UX Writing & Micro-interactions",
      "Frontend Collaboration & Handoff",
      "Portfolio & Career Guidance",
    ],
  },
  "Amazon Web Services": {
    description:
      "In-depth AWS training, covering cloud computing, DevOps, security, serverless computing, and machine learning.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to Cloud Computing & AWS",
      "AWS Storage Services",
      "AWS Compute Services",
      "Networking & Security",
      "Database Management in AWS",
      "AWS DevOps & Automation",
      "Monitoring & Logging",
      "AWS Machine Learning & AI Services",
      "Serverless & Microservices with AWS",
      "CI/CD & Deployment in AWS",
    ],
  },
  "Android App Development Internship": {
    description:
      "Comprehensive training in Android app development, covering UI/UX design, Kotlin & Java programming, database management, API integration, background services, app security, and deployment on the Google Play Store.",
    duration: "12 weeks",
    fees: "Rs. 7500/-",
    paymentOptions: [
      "Rs. 7000/- (One-time)",
      "Rs. 4000/- + Rs. 3500/- (Installments)",
    ],
    modules: [
      "Introduction to Android Development",
      "Programming with Kotlin & Java",
      "Android UI/UX Design & Components",
      "User Interaction & Navigation",
      "Working with Data & Storage",
      "Networking & API Integration",
      "Background Services & Threading",
      "Android Sensors & Hardware Access",
      "App Security & Optimization",
      "Publishing & Deployment",
    ],
  },
};

// Card data for modules section
const cardData = [
  {
    id: 1,
    lobDisplayText: "Internship - Full Stack Development using Python",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pTl: "Python Full Stack Development",
    pTx: "Learn frontend, backend, database management, and cloud deployment with Python.",
  },
  {
    id: 2,
    lobDisplayText: "Internship - Full Stack Development using Java",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVsbCUyMHN0YWNrJTIwamF2YSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
    pTl: "Java Full Stack Development",
    pTx: "Master core Java, Spring Boot, and microservices architecture with cloud deployment.",
  },
  {
    id: 3,
    lobDisplayText:
      "Internship - Data Science and Its Applications using Python",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop",
    pTl: "Data Science with Python",
    pTx: "Explore machine learning, deep learning, and big data analytics with Python.",
  },
  {
    id: 4,
    lobDisplayText: "Internship - Artificial Intelligence and Automation",
    newHeroOfferCardUrl:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pTl: "AI and Automation",
    pTx: "Dive into NLP, computer vision, and RPA with advanced AI tools.",
  },
  {
    id: 5,
    lobDisplayText: "Internship - Web Development",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    pTl: "Web Development",
    pTx: "Build dynamic web apps with React, Node.js, and cloud deployment.",
  },
  {
    id: 6,
    lobDisplayText: "Internship - Digital Marketing",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
    pTl: "Digital Marketing",
    pTx: "Master SEO, SEM, social media, and AI-driven marketing strategies.",
  },
  {
    id: 7,
    lobDisplayText: "Internship - UI/UX Design",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2070&auto=format&fit=crop",
    pTl: "UI/UX Design",
    pTx: "Learn UI/UX principles, wireframing, prototyping, and usability testing.",
  },
  {
    id: 8,
    lobDisplayText: "Internship - Amazon Web Services",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pTx: "Master AWS cloud services, security, automation, and deployment strategies.",
  },
  {
    id: 9,
    lobDisplayText: "Internship - Android App Development",
    newHeroOfferCardUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
    pTx: "Comprehensive training in Android app development, covering UI/UX design, Kotlin & Java programming and deployment on the Google Play Store.",
  },
];

// Hero Section Component
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image, title, description } = internshipContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % internshipContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + internshipContent.length) % internshipContent.length
    );
  };

  const handleApplyNow = () => {
    const formSection = document.getElementById("internship-form");
    if (formSection) {
      const yOffset = -100;
      const y =
        formSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%]">
      {/* Background Image with Overlay */}
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: `url(${image})` }}
      ></motion.div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleApplyNow}
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            APPLY FOR INTERNSHIP
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Internship Section Component
const InternshipSection = () => {
  const [expandedInternships, setExpandedInternships] = useState([]);

  const toggleInternship = (key) => {
    setExpandedInternships((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <div className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-4 flex flex-col md:w-[86%] md:p-8 text-center">
      <h1 className="text-3xl font-extrabold mb-6">Internship Programs</h1>

      <div className="space-y-4">
        {Object.keys(internshipData).map((key) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="p-4 shadow-lg rounded cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => toggleInternship(key)}
            >
              <span className="font-semibold">{key}</span>
              {expandedInternships.includes(key) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            {expandedInternships.includes(key) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 rounded bg-gray-50 shadow-lg text-left"
              >
                <h2 className="text-xl font-semibold">{key}</h2>
                <p className="mt-2 text-gray-600">
                  {internshipData[key].description}
                </p>
                <p className="mt-2 text-gray-500">
                  <strong>Duration:</strong> {internshipData[key].duration}
                </p>
                <p className="mt-2 text-gray-500">
                  <strong>Fees:</strong> {internshipData[key].fees}
                </p>
                <p className="mt-2 text-gray-500 font-semibold">
                  Payment Options:
                </p>
                <ul className="mt-2 list-disc ml-5 text-gray-600">
                  {internshipData[key].paymentOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-500 font-semibold">
                  Module Details:
                </p>
                <ul className="mt-2 list-disc ml-5 text-gray-600">
                  {internshipData[key].modules.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Form Component
const FormInternship = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbxij8OoNnH1wZbj3V_W5aDWcjNnePQw7OOpNwhfOZJrUttNrU_WsZNR3AgB39eR0PgTKA/exec";

      const submissionData = {
        ...formData,
        college:
          formData.college === "Other"
            ? formData.other_college
            : formData.college,
        location:
          formData.location === "Other"
            ? formData.other_location
            : formData.location,
      };

      console.log("Submitting Data:", submissionData);
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      alert("Form submitted successfully!");
      setFormData({});
      setCurrentStep(0);
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  const steps = [
    {
      title: "Personal Details",
      content: (
        <div className="my-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.whatsapp || ""}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.dob || ""}
              onChange={(e) => handleChange("dob", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <option value="">Select Gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
            >
              <option value="">Select Location</option>
              {[...locationOptions, "Other"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {formData.location === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Other Location
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.other_location || ""}
                onChange={(e) => handleChange("other_location", e.target.value)}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Academic Details",
      content: (
        <div className="my-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.college || ""}
              onChange={(e) => handleChange("college", e.target.value)}
            >
              <option value="">Select College</option>
              {[...collegeOptions, "Other"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {formData.college === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Other College
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.other_college || ""}
                onChange={(e) => handleChange("other_college", e.target.value)}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.branch || ""}
              onChange={(e) => handleChange("branch", e.target.value)}
            >
              <option value="">Select Branch</option>
              {branchOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.year || ""}
              onChange={(e) => handleChange("year", e.target.value)}
            >
              <option value="">Select Year</option>
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technology
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.technology || ""}
              onChange={(e) => handleChange("technology", e.target.value)}
            >
              <option value="">Select Technology</option>
              {technologyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mode
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.mode || ""}
              onChange={(e) => handleChange("mode", e.target.value)}
            >
              <option value="">Select Mode</option>
              {modeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="internship-form" className="max-w-3xl mx-auto">
      {/* Steps Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col items-center ${
                  index <= currentStep ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    index <= currentStep
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs mt-1">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    index < currentStep ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="m-5 border rounded-3xl p-5 md:p-10"
      >
        {steps[currentStep].content}
        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// Card Component for Modules
const CarouselCard = ({ lobDisplayText, newHeroOfferCardUrl, pTl, pTx }) => {
  return (
    <article className="max-w-[375px] w-[375px] md:w-[476px] md:max-w-[476px] h-[200px] m-2 shadow-md rounded-lg hover:shadow-2xl hover:scale-101 shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300">
      <div className="max-w-full w-full m-2 flex">
        <img
          src={newHeroOfferCardUrl}
          alt={pTl}
          className="w-24 h-24 m-2 rounded-md bg-gray-100 flex-grow-0 aspect-square object-cover"
        />
        <div className="details p-2 text-left w-full text-ellipsis overflow-hidden">
          <h2 className="font-medium capitalize text-slate-400 text-md md:text-base pb-1">
            {lobDisplayText?.toLowerCase()}
          </h2>
          <h3 className="font-medium text-xs md:text-lg text-wrap truncate pb-1">
            {pTl}
          </h3>
          <p className="text-slate-500 text-wrap text-xs md:text-lg text-clip pt-1">
            {pTx}
          </p>
        </div>
      </div>
    </article>
  );
};

// About Detail Section Component
const AboutDetailSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center">
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)] mb-6">
        Our Internship Modules
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {!loading
          ? cardData.map((item) => <CarouselCard key={item.id} {...item} />)
          : [1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-full max-w-[375px] h-[220px] p-4 m-2 rounded-lg hover:shadow-all bg-white overflow-hidden cursor-pointer transition-all duration-300 animate-pulse bg-gray-200"
              >
                Loading...
              </div>
            ))}
      </div>
    </section>
  );
};

// Main Internship Page Component
const InternshipPage = () => {
  useSEO("career");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="">
        <HeroSection />
      </div>
      {/* Apply Now Section */}
      <div className="mt-10">
        <h1 className="text-center font-extrabold uppercase my-4 p-2 text-2xl">
          Apply Now for Internship
        </h1>
        <FormInternship />
      </div>
      {/* Internship Programs Section */}
      <div className="mt-10">
        <InternshipSection />
      </div>

      {/* Modules Section */}
      <div className="mt-10">
        <AboutDetailSection />
      </div>
    </div>
  );
};

export default InternshipPage;
