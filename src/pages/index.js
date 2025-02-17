import React from 'react';
import Home from '../components/home';
import DesignedBySection from '../components/designed-by';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Reviews from '../components/reviews';
import FAQSection from '../components/faqs';
import HomeFooter from '../components/home-footer';

const HomePage= () => {
  return (
    <>
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
    <Navbar />
    <Hero />
    <Home/>
    <DesignedBySection/>
    <Reviews/>
    <FAQSection/>
    <HomeFooter/>
    </div>
    </>
   
  );
};

export default HomePage;