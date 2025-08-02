import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="relative bg-white py-16 md:py-24">
      {/* Decorative element - top left */}
      <div className="hidden md:block absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-amber-700"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            About <span className="text-amber-700">Like Minded</span>
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Left column - image collage/group photo */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Border decoration */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-amber-700 rounded-lg"></div>
              
              {/* Main image */}
              <img 
                src="/hero/about.jpg" 
                alt="Like Minded musicians performing together" 
                className="w-full rounded-lg shadow-lg object-cover h-[300px] sm:h-[400px]"
              />
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-16 md:w-20 h-16 md:h-20 bg-amber-700 rounded-full opacity-20"></div>
            </div>
          </div>
          
          {/* Right column - text content */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl md:text-3xl font-serif text-amber-800 mb-6">Classic Harmony, Unique Stories</h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Like Minded unites musicians from every walk of life—politicians, social servants, CAs, and more—bound by a love for Indian classical music. Diverse minds, one soulful sound.
            </p>
            
            {/* Key aspects with icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-medium text-gray-800 mb-2">Musical Excellence</h4>
                  <p className="text-gray-600">Dedicated to the highest standards of classical performance and technique.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-medium text-gray-800 mb-2">Diverse Expertise</h4>
                  <p className="text-gray-600">Our members bring unique perspectives from their professional domains.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-medium text-gray-800 mb-2">Cultural Preservation</h4>
                  <p className="text-gray-600">Committed to preserving and sharing traditional musical heritage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-medium text-gray-800 mb-2">Community Outreach</h4>
                  <p className="text-gray-600">Sharing the transformative power of classical music with wider audiences.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 inline-flex items-center">
                <span>Meet Our Artists</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element - bottom right */}
      <div className="hidden md:block absolute bottom-0 right-0 w-20 md:w-28 h-20 md:h-28 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-amber-700"></div>
      </div>
    </div>
  );
};

export default AboutSection;
