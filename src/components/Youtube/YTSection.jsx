import React, { useEffect, useState } from "react";
import { data } from "./ytVideos";

const YTSection = () => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setVideos(data);
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const getYouTubeEmbedUrl = (url) => {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? `https://www.youtube.com/embed/${match[7]}` : url;
  };

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
              onClick={() => openModal(video)}
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
                  onClick={(e) => e.stopPropagation()}
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

        {/* Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ×
              </button>
              
              {/* Modal content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  {selectedVideo.title}
                </h3>
                
                {/* YouTube iframe */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideo.youtubeUrl)}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* External link */}
                <div className="mt-4 text-center">
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline text-sm"
                  >
                    Open on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YTSection;
