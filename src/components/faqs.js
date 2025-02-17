import React, { useState, useRef, useEffect } from "react";
import "../styles/index.css";

const faqs = [
  {
    question: "What is Therapa?",
    answer:
      "Therapa is an empathetic AI therapist that listens and adapts, providing supportive conversation wherever you are.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "We offer a free trial. For extended usage, check out our Premium and Unlimited plans.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Absolutely. You can cancel any time in your account settings. Your subscription remains active until the end of the billing cycle.",
  },
  {
    question: "Does Therapa replace traditional therapy?",
    answer:
      "Therapa doesn't replace licensed professionals. It's a convenient supplement to help you cope and grow between appointments.",
  },
  {
    question: "How does data privacy work?",
    answer:
      "We follow strict data handling and encryption. Visit your settings to manage cookies, analytics, and data deletion.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section w-full max-w-2xl mx-auto py-12 px-6">
      <h2 className="faq-heading text-2xl font-bold text-center mb-8">frequently asked questions</h2>
      <div className="faq-accordion space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b border-gray-300 pb-4">
            <button
              className="faq-question w-full flex justify-between text-lg font-medium text-left py-2 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon text-xl text-gray-600">{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`faq-answer overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
