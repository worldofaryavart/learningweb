import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LearningWeekBanner = ({ cards }) => {
  const [showMascot, setShowMascot] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const isDesktopView = window.innerWidth >= 1024; 
      setIsDesktop(isDesktopView);
      setShowMascot(isDesktopView);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    let timer;
    if (isDesktop) {
      timer = setTimeout(() => {
        setShowMascot(false);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('resize', checkDesktop);
    };
  }, [isDesktop]);

  const bannerVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 40,
        duration: 7,
        ease: 'easeInOut'
      }
    }
  };

  const mascotVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: "40%",
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 40,
        duration: 7,
        ease: 'easeInOut'
      }
    },
    exit: {
      x: '300%',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 40,
        duration: 2,
        ease: 'easeInOut',
        delay: 1
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="relative bg-[#571937] p-4 sm:p-6 lg:px-10 flex flex-col lg:flex-row items-center mx-4 sm:mx-8 lg:mx-40"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 0%, transparent 25%, rgba(234, 184, 209, 0.1) 25%, rgba(234, 184, 209, 0.1) 50%, transparent 50%, transparent 75%, rgba(234, 184, 209, 0.1) 75%, rgba(234, 184, 209, 0.1) 100%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px',
            backgroundPosition: '0 0, 20px 20px, 10px 10px'
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center w-full">
          <div className="bg-white p-4 rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0">
            <div className="flex items-center justify-center">
              <img
                src="images/LearningWeek.png"
                alt="Learning Fest 2024 Logo"
                className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] lg:h-[273px] lg:w-[273px]"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
              Level up your learning <span className="text-white">-where fun meets knowledge!</span>
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white">
              Join us for a week of interactive challenges and knowledge-boosting fun that unlocks your potential!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Animated Mascot */}
      {isDesktop && (
        <AnimatePresence>
          {showMascot && (
            <motion.div
              className="absolute top-0 bottom-0 right-0 flex items-center z-20 h-[350px] w-[350px]"
              variants={mascotVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img
                src="walk.gif"
                alt="Mascot"
                className="h-full w-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div
        className="grid grid-cols-1 gap-4 mt-8 mx-2 sm:mx-4 lg:mx-5 
             sm:flex sm:flex-wrap sm:justify-center sm:space-x-1"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-2 text-center text-xs w-full sm:w-auto"
          >
            <img
              src={card.image}
              alt={card.label}
              className="h-[150px] w-1/2 sm:h-[214px] sm:w-[200px] object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningWeekBanner;