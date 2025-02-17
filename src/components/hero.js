import React,{ useState, useEffect } from "react";
import "../styles/index.css";
import VideoSection from "./videosection";

const Hero = () => {
  const words = [
    "cares",
    "nurtures",
    "guides",
    "loves",
    "understands",
    "empathizes",
    "speaks",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="hero flex flex-col items-center relative pt-44 px-8 overflow-hidden">
      <div className="orb"></div>
      <div className="hero-content text-center z-10">
        <h1 className="hero-title text-4xl font-bold text-gray-900 leading-tight mb-4">
          <span className="therapa-color text-teal-500">therapa</span> is the AI<br />
          therapist that <span id="rotatingWord">{words[wordIndex]}</span>
        </h1>
        <p className="hero-subtitle text-lg text-gray-600 max-w-lg mx-auto mb-6">
          A safe space for your heart and mind, therapa is here to walk with you
          through life’s moments.
        </p>
        <button
          className="cta-button bg-gradient-to-r from-teal-600 to-teal-400 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
          onClick={() => (window.location.href = "signup.html")}
        >
          try therapa
        </button>
      </div>
      <VideoSection />
    </main>
  );
};

export default Hero;

