import React, { useEffect, useRef } from "react";
import "../styles/index.css";

const testimonials = [
  { text: "Therapa helped me cope with anxiety in a way I never thought possible.", author: "– Cassidy, 29" },
  { text: "I love the Gen Z mode. It's the perfect mix of fun and comfort.", author: "– Xander, 21" },
  { text: "A real game-changer for my stress management.", author: "– Sarah, 34" },
  { text: "Therapa just gets me… it's like talking to a friend who’s also super wise.", author: "– Jamal, 25" },
  { text: "I was skeptical at first, but it genuinely feels empathetic!", author: "– Priya, 31" },
  { text: "So easy to pick up where I left off. Best AI companion out there.", author: "– Lucia, 27" },
  { text: "Therapa has become my daily mental check-in buddy.", author: "– David, 38" },
];

const Reviews = () => {
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
    <section className="carousel-section w-full mt-16 px-8 mb-16">
      <h2 className="carousel-heading text-2xl text-center font-semibold leading-tight mb-16">
        What people are saying<br />
        <span className="second-line text-teal-500">about their Therapa experience</span>
      </h2>
      <div className="carousel-container max-w-5xl mx-auto overflow-hidden flex flex-col relative h-80">
        <div className="carousel-fade-left absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="carousel-fade-right absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="carousel-row first-row flex mb-5 space-x-5 overflow-hidden" ref={topRowRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item quote-card w-96 h-48 bg-white border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-start p-4">
              <p className="quote-text text-sm font-normal text-gray-700 italic mb-2">{testimonial.text}</p>
              <span className="quote-author text-xs text-gray-600">{testimonial.author}</span>
            </div>
          ))}
        </div>
        
        <div className="carousel-row second-row flex space-x-5 overflow-hidden" ref={bottomRowRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item quote-card w-96 h-48 bg-white border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-start p-4">
              <p className="quote-text text-sm font-normal text-gray-700 italic mb-2">{testimonial.text}</p>
              <span className="quote-author text-xs text-gray-600">{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

