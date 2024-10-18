import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LearningWeekBanner = ({ cards }) => {
  const [showMascot, setShowMascot] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMascot(false);
    }, 1000); // Adjust this value to change when the mascot starts to disappear

    return () => clearTimeout(timer);
  }, []);

  const bannerVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 50,
        duration: 2,
        ease: 'easeInOut'
      }
    }
  };

  const mascotVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 10,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 50,
        duration: 3,
        ease: 'easeInOut'
      }
    },
    exit: {
      x: '300%',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 40,
        duration: 3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="relative bg-[#571937] p-6  px-10flex items-center mx-40"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
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
            backgroundPosition: '0 0, 10px 10px',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center">
          <div className="bg-white p-4 rounded-lg mr-6 flex-shrink-0">
            <div className="flex items-center">
              <img
                src="images/LearningWeek.png"
                alt="Learning Fest 2024 Logo"
                className="h-[273px] w-[273px] mr-4"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-orange-400 mb-2">
              Level up your learning <span className="text-white">-where fun meets knowledge!</span>
            </h2>
            <p className="text-3xl text-white">
              Join us for a week of interactive challenges and knowledge-boosting fun that unlocks your potential!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Animated Mascot */}
      {/* <AnimatePresence>
        {showMascot && (
          <motion.div
            className="absolute top-0 right-0 bottom-0 flex items-center z-20"
            variants={mascotVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              src="images/card1.png"
              alt="Mascot"
              className="h-full w-auto"
            />
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="flex justify-center mt-8 space-x-4 mx-40">
        {cards.map((card, index) => (
          <div key={index} className="p-2 text-center text-xs">
            <img
              src={card.image}
              alt={card.label}
              className="h-[214px] w-[270px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningWeekBanner;