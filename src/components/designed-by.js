
import React from "react";
import "../styles/index.css";
import markkhan from "./assets/markkhan.jpg";

const psychologists = [
  {
    name: "Mark Kahn",
    image: markkhan,
    degrees: "M.A. Clinical Psychology",
    excerpt:
      "Author of \"Love yourself for no reason!\" with 34 years of private practice. Mark’s transformative approach inspired Therapa’s empathetic style—revealing our innate genius, joy, and love.",
  },
  {
    name: "Jane Roe",
    image: "/assets/placeholder1.jpg",
    degrees: "Ph.D. Behavioral Science",
    excerpt:
      "Pioneered new avenues in cognitive therapy. Dr. Roe’s research ensures Therapa’s dynamic conversation model adapts in real time.",
  },
  {
    name: "John Smith",
    image: "/assets/placeholder2.jpg",
    degrees: "Ph.D. Neuropsychology",
    excerpt:
      "A leader in mental wellness AI, Dr. Smith guided Therapa’s safe and approachable environment for all users.",
  },
];

const DesignedBySection = () => {
  return (
    <div>
        <section className="designed-by-section text-center py-12">
            <h2 className="designed-by-heading text-2xl font-bold">
                Designed by world leading psychologists<br />
                <span className="second-line text-teal-500">with 30+ years of experience — each.</span>
            </h2>
            <div className="psychologists-row flex flex-wrap justify-center gap-6 mt-8">
                {psychologists.map((psych, index) => (
                <article key={index} className="psych-card bg-white rounded-lg shadow-lg p-6 max-w-xs">
                    <img src={psych.image} alt={psych.name} className="psych-photo w-24 h-24 rounded-full mx-auto mb-4" />
                    <div className="psych-details text-center">
                    <h3 className="psych-name text-xl font-semibold text-gray-900">{psych.name}</h3>
                    <p className="psych-degrees text-sm text-gray-600">{psych.degrees}</p>
                    <p className="psych-excerpt text-gray-700 mt-2">{psych.excerpt}</p>
                    </div>
                </article>
                ))}
            </div>
            <p className="psych-more text-teal-500 mt-6">+ many more</p>
            </section>
    </div>
   
  );
};

export default DesignedBySection;