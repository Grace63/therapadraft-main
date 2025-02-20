import React, { useEffect, useRef } from "react";

const Plans = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const speed = 1.0; // px per frame

  useEffect(() => {
    const animateRow = (rowElement, direction) => {
      let offset = direction === "left" ? -1920 : 0;

      function animate() {
        offset += speed;
        if ((direction === "left" && offset >= 0) || (direction === "right" && offset >= 1920)) {
          offset -= 1920;
        }
        rowElement.style.transform = `translateX(${direction === "left" ? offset : -offset}px)`;
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    };

    if (topRowRef.current) animateRow(topRowRef.current, "left");
    if (bottomRowRef.current) animateRow(bottomRowRef.current, "right");
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-900 font-nunito">
      {/* Header */}
      <header className="text-center mt-16 mb-6">
        <h1 className="text-4xl font-playfair font-bold">Choose your plan</h1>
        <p className="text-gray-600 text-lg mt-2">World-class therapy at an affordable price. Cancel anytime.</p>
      </header>

      {/* Plans Container */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 px-4">
        {/* Premium Plan */}
        <div className="relative bg-white shadow-lg rounded-lg flex-1 overflow-hidden p-6 border border-gray-200">
          <div className="h-2 bg-gradient-to-r from-teal-600 to-teal-400"></div>
          <h2 className="text-xl font-playfair font-bold mt-4">Premium</h2>
          <p className="text-lg text-teal-600 font-semibold">$49<span className="text-gray-600 text-sm">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ <strong>4 hours</strong> of therapy per month</li>
            <li>✅ Therapy on demand (<strong>24/7</strong>)</li>
            <li>✅ Therapa shares <strong>written observations</strong> each session</li>
            <li>✅ Therapa <strong>writes actionable advice</strong></li>
            <li>✅ Therapa <strong>remembers everything</strong></li>
          </ul>
          <button className="mt-4 large-cta bg-white text-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition">Upgrade</button>
        </div>

        {/* Unlimited Plan */}
        <div className="relative bg-white shadow-lg rounded-lg flex-1 overflow-hidden p-6 border border-gray-200">
          <div className="h-2 bg-gradient-to-r from-teal-600 to-pink-400"></div>
          <h2 className="text-xl font-playfair font-bold mt-4">Unlimited</h2>
          <p className="text-lg text-teal-600 font-semibold">$99<span className="text-gray-600 text-sm">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ All Premium features</li>
            <li>✅ <strong>Unlimited</strong> hours of therapy</li>
            <li>✅ Access to new features first</li>
            <li>✅ <strong>Direct support</strong> from the Therapa team</li>
          </ul>
          <button className="mt-4 large-cta bg-white text-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition">Upgrade</button>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="mt-16 w-full max-w-6xl px-4">
        <h2 className="text-center text-2xl font-poppins font-semibold mb-6">
          Designed by world-leading psychologists<br />
          <span className="text-teal-600">with 30+ years of experience — each.</span>
        </h2>
        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent"></div>

          {/* First Row */}
          <div ref={topRowRef} className="flex w-[3840px] space-x-4 mb-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[300px] h-[100px] bg-white border border-gray-300 rounded-lg shadow-md"></div>
            ))}
          </div>

          {/* Second Row */}
          <div ref={bottomRowRef} className="flex w-[3840px] space-x-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[300px] h-[100px] bg-white border border-gray-300 rounded-lg shadow-md"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
