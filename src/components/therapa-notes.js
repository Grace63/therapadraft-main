import React, { useState } from "react";
import icon8 from "./assets/icons8-notes.svg";

const TherapaNotes = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("observations");
  const [currentObservations, setCurrentObservations] = useState("");
  const [currentAdvice, setCurrentAdvice] = useState("");

  const notes = [
    {
      title: "A brand new day",
      text: "The sun gently rises, warming the horizon. I feel renewed, hopeful.",
      date: "June 14, 2025",
      observations: "Observations about the day...",
      advice: "Advice for the day...",
    },
    {
      title: "Overcoming fear",
      text: "Fear can be a friend, telling us to pay attention. Embrace it with love.",
      date: "June 10, 2025",
      observations: "Obs: Overcoming fear can involve acknowledging it...",
      advice: "Adv: Try journaling about your fear...",
    },
    {
      title: "Tiny victories",
      text: "Today, I celebrated small steps forward. Each step is a gift.",
      date: "June 2, 2025",
      observations: "Obs: Tiny victories can be huge motivators...",
      advice: "Adv: Write a gratitude list each morning...",
    },
  ];

  const handleCardClick = (observations, advice) => {
    setCurrentObservations(observations);
    setCurrentAdvice(advice);
    setIsSheetOpen(true);
    setActiveTab("observations");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#bde2df] to-[#cfeae9] font-nunito text-gray-900 overflow-x-hidden relative">
      {/* Header */}
      <header className="text-center py-12 px-4 relative z-10">
        <h1 className="inline-flex items-center gap-2 font-serif text-4xl font-bold text-black">
          Therapa’s notes
          <img
            src={icon8}
            alt="Notes Icon"
            className="w-10 h-10 relative top-1.5"
          />
        </h1>
        <p className="mt-2 font-nunito text-base font-normal">
          Click on a card to see more details
        </p>
      </header>

      {/* Floating Orbs */}
      <div className="absolute top-24 -left-20 w-56 h-56 rounded-full bg-radial-gradient shadow-orb animate-floatOrb"></div>
      <div className="absolute top-48 -right-16 w-48 h-48 rounded-full bg-radial-gradient shadow-orb animate-floatOrb"></div>
      <div className="absolute bottom-32 left-1/2 w-52 h-52 rounded-full bg-radial-gradient shadow-orb animate-floatOrb"></div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <article
              key={index}
              className="bg-white/90 rounded-xl shadow-lg p-6 cursor-pointer hover:transform hover:-translate-y-1 hover:shadow-xl transition-all"
              onClick={() => handleCardClick(note.observations, note.advice)}
            >
              <h2 className="font-serif text-2xl font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-700 mb-4">{note.text}</p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-600">{note.date}</time>
                <div className="flex gap-4">
                  <span className="text-teal-600  border-b-2 border-transparent hover:border-teal-600 transition-all">
                    Observations
                  </span>
                  <span className="text-teal-600  border-b-2 border-transparent hover:border-teal-600 transition-all">
                    Advice
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Overlay */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={closeSheet}
        ></div>
      )}

      {/* Expanded Sheet */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[840px] bg-white rounded-xl shadow-2xl z-50 transition-all ${
          isSheetOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-center gap-8 py-4 border-b">
          <button
            className={`text-lg font-semibold ${
              activeTab === "observations"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600 hover:text-teal-600"
            }`}
            onClick={() => handleTabClick("observations")}
          >
            Observations
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "advice"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600 hover:text-teal-600"
            }`}
            onClick={() => handleTabClick("advice")}
          >
            Advice
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-60px)]">
          {activeTab === "observations" && (
            <p className="text-gray-700">{currentObservations}</p>
          )}
          {activeTab === "advice" && (
            <p className="text-gray-700">{currentAdvice}</p>
          )}
        </div>
        <button
          className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-black"
          onClick={closeSheet}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TherapaNotes;


