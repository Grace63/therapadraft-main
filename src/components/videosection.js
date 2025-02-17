import React, { useState } from "react";
import "../styles/index.css";
import video from '../components/demo/686368_Round Liquid Orbs Bubbles_By_MayaLab_Artlist_HD.mp4';

const VideoSection = () => {
    const [isMuted, setIsMuted] = useState(true);
  
    return (
      <div className="hero-video-container mt-8 w-4/5 max-w-4xl relative z-0" onClick={() => setIsMuted(!isMuted)}>
        <video
          className="hero-video w-full rounded-lg shadow-lg"
          src={video}
          autoPlay
          loop
          playsInline
          muted={isMuted}
        />
        <div className="mute-bubble absolute top-4 right-4 px-4 py-2 text-sm text-black border-2 border-teal-500 rounded-full bg-transparent shadow-lg opacity-0 transition-opacity duration-300 cursor-default">
          {isMuted ? "click to unmute" : "click to mute"}
        </div>
      </div>
    );
  };
  export default VideoSection;