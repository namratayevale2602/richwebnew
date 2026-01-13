// components/HeroBackground.jsx
import React from "react";
import bgvideo from "../assets/bg/bg4.mp4";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
    </div>
  );
};

export default HeroBackground;
