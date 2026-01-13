// components/VideoBackground.jsx
import React from "react";
import bgvideo from "../assets/bg/bg1.mp4";
import bgvideo1 from "../assets/bg/bgslowmo.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Darker overlay for better text readability on all pages */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
    </div>
  );
};

export default VideoBackground;
