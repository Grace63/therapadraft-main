
import React from "react";
import "../styles/index.css";


const BigFeature = ({ title, subtitle, videoSrc, points, reverse }) => (
    <div className={`big-feature-row flex items-center gap-10 max-w-6xl mx-auto flex-wrap ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="feature-media flex-1 min-w-[300px]">
        <video src={videoSrc} className="feature-video w-full rounded-lg shadow-md" autoPlay muted loop playsInline></video>
      </div>
      <div className="feature-info flex-1 flex flex-col gap-2">
        <h3 className="feature-info-title text-2xl font-semibold text-black">{title}</h3>
        <p className="feature-info-subtitle text-lg text-gray-700">{subtitle}</p>
        <ul className="feature-info-list space-y-2 text-gray-600">
          {points.map((point, index) => (
            <li key={index} className="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-teal-500">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  const Home = () => {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        
        <section className="big-features-section space-y-12 py-12 px-8">
          <BigFeature
            title="Therapy anywhere, anytime"
            subtitle="World class voice-based therapy whenever you need it"
            videoSrc="demo/genz_demo.mp4"
            points={["Available late at night", "Never gets tired", "Always eager to help"]}
          />
          <BigFeature
            title="Always remembers what you're going through"
            subtitle="Therapa recalls everything you tell it"
            videoSrc="demo/personalized_growth.mp4"
            points={["Recalls past experiences", "Adapts techniques", "Helps you heal"]}
            reverse
          />
          <BigFeature
            title="Creates actionable advice from each session"
            subtitle="Because therapy doesn't end when the session does"
            videoSrc="demo/safe_and_sound.mp4"
            points={["Creates advice", "Shows different perspectives", "Observations from sessions"]}
          />
        </section>
      </div>
    );
  };
  
  export default Home;