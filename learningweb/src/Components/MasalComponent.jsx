import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedMasalComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} className="bg-[#571937] min-h-[550px] flex flex-col text-white text-center relative overflow-hidden px-4 py-8 md:px-8 md:py-12">
            <div className="flex flex-col justify-start items-center mb-8 md:mb-12">
                <p className="text-sm md:text-base lg:text-lg mb-2">
                    Explore our app to keep the
                </p>
                <p className="text-yellow-400 text-xl md:text-3xl lg:text-4xl font-bold mb-2">
                    mashaal of knowledge burning bright
                </p>
                <p className="text-xs md:text-sm lg:text-base max-w-xs md:max-w-lg lg:max-w-2xl mx-auto">
                    as you discover other features that enhance your learning journey and ignite your passion for growth!
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { y: 0, opacity: 1, transition: { duration: 2 } },
                        hidden: { y: "100%", opacity: 0 },
                    }}
                    className="relative flex flex-col justify-center items-center mb-8 md:mb-12"
                >
                    {/* <motion.img
                        variants={{
                            visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1.5 } },
                            hidden: { opacity: 0, scale: 0.5 },
                        }}
                        src="animation.gif"
                        alt="Flame"
                        className="absolute w-[300px] h-[70px] md:w-[600px] md:h-[250px] lg:w-[800px] lg:h-[450px] bottom-full mb-[-100px] md:mb-[-200px] lg:mb-[-300px] transform -translate-x-1/2"
                    /> */}

                    <img
                        src="images/masal.png"
                        alt="Flame body"
                        className="w-32 md:w-28 lg:w-34 mb-[-100px] md:mb-[-200px] lg:mb-[-300px] -z-10"
                    />
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between w-full max-w-xs md:max-w-2xl lg:max-w-3xl mt-4 md:mt-8">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 2 } },
                            hidden: { x: "-100%", opacity: 0 }
                        }}
                        className="flex flex-col items-center md:items-start mb-4 md:mb-0"
                    >
                        <Button className="mb-2 ml-4 md:mb-4">Our Hero&apos;s</Button>
                        <Button>PIFA</Button>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 2 } },
                            hidden: { x: "100%", opacity: 0 }
                        }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <Button className="mb-2 mr-10 md:mb-4">Digital Transformation</Button>
                        <Button className="mb-2 mr-5 md:mb-4">Our Brands</Button>
                        <Button>DSG</Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const Button = ({ children, className = "" }) => (
    <button className={`bg-[#BE3A84] text-white py-2 px-4 rounded-full text-sm md:text-base lg:text-lg whitespace-nowrap ${className}`}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default AnimatedMasalComponent;