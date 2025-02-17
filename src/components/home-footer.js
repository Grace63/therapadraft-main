import React from "react";

const HomeFooter = () => {
  return (
    <section className="bg-gray-100 bw-full bg-teal-600 text-black text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Ready to begin?</h2>
      <p className="text-lg mb-6">
        Let Therapa guide your mental wellness, one step at a time.
      </p>
      <button 
        className="large-cta bg-white text-white text-teal-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={() => window.location.href='signup.html'}
      >
        Sign up now
      </button>
    </section>
  );
};

export default HomeFooter;