import React, { useEffect, useState } from "react";

const YTSection = () => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("/src/components/Youtube/ytVideos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our <span className="text-amber-700">Stage Performances</span> 
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.slice(0, visibleCount).map((video) => (
            <div
              key={video.id}
              className="bg-amber-50 rounded-lg shadow-md overflow-hidden cursor-pointer transition hover:shadow-lg"
              onClick={() => window.open(video.youtubeUrl, "_blank")}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline text-sm"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < videos.length && (
          <div className="flex justify-center mt-10">
            <button
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-8 rounded-md shadow-md transition duration-300"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default YTSection;
