import React ,{useRef,useEffect} from "react";
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
    const carouselRef = useRef(null);

    useEffect(() => {
      const scroll = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 1;
          if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      };
      const interval = setInterval(scroll, 20);
      return () => clearInterval(interval);
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
          <div ref={carouselRef} className="carousel-row flex mb-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="carousel-item quote-card w-96 h-48 mr-5 bg-white border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-start p-4">
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
