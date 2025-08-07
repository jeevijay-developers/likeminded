import React, { useEffect, useState } from "react";
import { data2 } from "./members.data.js"; 

const Members = () => {
  const [members, setMembers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setMembers(data2);
  }, []);

  return (
    <section id="members" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Meet Our <span className="text-amber-700">Members</span>
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.slice(0, visibleCount).map((member) => (
            <div
              key={member.id}
              className="bg-amber-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-3 sm:p-4 md:p-6 transition hover:shadow-2xl"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 sm:mb-4 rounded-full overflow-hidden border-4 border-amber-700 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/members/placeholder-profile.jpg";
                    e.target.onerror = null;
                  }}
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-gray-900 mb-1 sm:mb-2 text-center px-1">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-amber-700 font-medium text-center mb-1 ">
                {member.profession}
              </p>
            </div>
          ))}
        </div>

        {visibleCount < members.length && (
          <div className="flex justify-center mt-12">
            <button
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              onClick={() => setVisibleCount((prev) => prev + 8)}
            >
              View More Members
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;
