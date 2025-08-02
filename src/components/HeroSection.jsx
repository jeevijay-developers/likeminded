import React from "react";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-50 to-orange-50">
      {/* Background pattern - inspired by Indian classical motifs */}
      <div className="absolute inset-0 opacity-10 pattern-bg"></div>
      
      <div className="container mx-auto px-8 py-24 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="bricolage-grotesque md:w-1/2 text-center md:text-left">
            <h4 className="text-amber-800 font-serif italic mb-2 md:mb-3">Presenting</h4>
            
            <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              Like <span className="text-amber-700">Minded</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 mb-4 md:mb-6 leading-relaxed">
              A harmonious journey through the classical traditions of Indian music,
              where ancient melodies meet contemporary expressions
            </h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Experience the transcendent beauty of ragas, the intricate rhythm of talas, 
              and the spiritual essence of centuries-old musical traditions brought to life 
              by passionate artists united by their reverence for classical arts.
            </p>
            
            <div className="flex md:flex-wrap gap-4 mt-2">
              <a href="#members">
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300">
               Meet our members
              </button>
              </a>
              <a href="">
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 font-medium py-3 px-8 rounded-md transition duration-300">
                Explore Our Music
              </button>
              </a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-700 rounded-lg"></div>
              <img 
                src="/hero/hero-img.png" 
                alt="Like Minded classical music ensemble" 
                className="w-full rounded-lg shadow-lg object-fit h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px]"
              />
              <div className="absolute -bottom-3 -right-3 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-amber-700 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - inspired by Indian classical instruments */}
      <div className="hidden md:block absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 opacity-20 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-full h-full rounded-full border-4 border-amber-700"></div>
      </div>
    </div>
  );
};

export default HeroSection;
    