// import React from 'react';

const LearningWeekBanner = () => {
  return (
    <div className="relative bg-[#571937] p-6 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: `linear-gradient(
      60deg,
      rgba(234, 184, 209, 0.3) 3px,
      transparent 3px
    ),
    linear-gradient(
      60deg,
      rgba(234, 184, 209, 0.3) 3px,
      transparent 3px
    )`,
    backgroundSize: '50px 50px',
    backgroundPosition: '0 0, 10px 10px', // Adjusts the position of the lines
  }}
></div>

      {/* Content */}
      <div className="relative z-10 flex items-center">
        <div className="bg-white p-4 rounded-lg mr-6 flex-shrink-0">
          <div className="flex items-center">
            <img
              src="images/LearningWeek.png"
              alt="Learning Fest 2024 Logo"
              className="h-[273px] w-[273px] mr-4" // Adjust margin for positioning
            />
          </div>
        </div>
        <div>
          <h2 className="text-6xl font-bold text-orange-400 mb-2">Level up your learning <span className="text-white"> -where fun meets knowledge!</span></h2>
          <p className="text-3xl text-white">Join us for a week of interactive challenges and knowledge-boosting fun that unlocks your potential!</p>
        </div>
      </div>
    </div>
  );
};

export default LearningWeekBanner;