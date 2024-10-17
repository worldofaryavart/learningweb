import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const VideoGallerySlider = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-4 text-[#8B0000]">Our Video Gallery</h2>
      <div className="relative flex items-center overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>
        <div className="flex justify-between items-center w-full">
          {[currentIndex - 1, currentIndex, currentIndex + 1].map((index, i) => {
            const normalizedIndex = (index + videos.length) % videos.length;
            const video = videos[normalizedIndex];
            return (
              <div
                key={normalizedIndex}
                className={`relative px-2 ${i === 1 ? 'w-[677]' : 'w-[50%]'
                  } transition-all duration-300 ease-in-out ${i === 0 ? '-ml-[25%]' : i === 2 ? '-mr-[25%]' : ''
                  }`}
              >
                <img
                  src={video.image}
                  alt={video.label}
                  className="w-full h-[400px] object-cover"
                />
                {i === 1 && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="text-white w-16 h-16" />
                    </div>
                    <p className="absolute bottom-10 left-20 right-0 text-white p-2 text-lg font-bold">
                      {video.date} | {video.label}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`h-1 ${index === currentIndex ? 'w-8 bg-[#8B0000]' : 'w-4 bg-gray-300'
              } transition-all duration-300 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
};

VideoGallerySlider.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoGallerySlider;