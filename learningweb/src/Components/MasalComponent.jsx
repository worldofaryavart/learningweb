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
        <div ref={ref} className="bg-[#571937] h-[550px] flex flex-col text-white text-center relative overflow-hidden">
            <div className="flex flex-col justify-start items-center">

                <p className="text-sm md:text-md mb-2">
                    Explore our app to keep the
                </p>
                <p className="text-yellow-400 text-2xl md:text-4xl font-bold mb-2">
                    mashaal of knowledge burning bright
                </p>
                <p className="text-xs md:text-lg max-w-2xl">
                    as you discover other features that enhance your learning journey and ignite your passion for growth!
                </p>
            </div>
            <div className="flex flex-col justify-center items-center p-10">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { y: 0, opacity: 1, transition: { duration: 2 } },
                        hidden: { y: "100%", opacity: 0 },
                    }}
                    className="relative flex flex-col justify-center items-center"
                >
                    <motion.img
                        variants={{
                            visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1.5 } },
                            hidden: { opacity: 0, scale: 0.5 },
                        }}
                        src="animation.gif"
                        alt="Flame"
                        className="absolute w-[1200px] h-[800px] bottom-full mb-[-300px] transform -translate-x-1/2 md:w-[600px] md:h-[400px]"
                    />

                    <img
                        src="/api/placeholder/100/200"
                        alt="Flame body"
                        className="w-64 md:w-80 mb-[-800px]"
                    />
                </motion.div>


                <div className="flex justify-between w-full max-w-3xl mt-8">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 2 } },
                            hidden: { x: "-100%", opacity: 0 }
                        }}
                        className="flex flex-col items-start"
                    >
                        <Button className="m-5 mt-10">Our Hero&apos;s</Button>
                        <Button className='mt-10'>PIFA</Button>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1, transition: { duration: 2, delay: 2 } },
                            hidden: { x: "100%", opacity: 0 }
                        }}
                        className="flex flex-col items-end"
                    >
                        <Button className="my-5 mr-20">Digital Transformation</Button>
                        <Button className="my-5 mr-4 mb-5">Our Brands</Button>
                        <Button className='mt-3'>DSG</Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const Button = ({ children, className = "" }) => (
    <button className={`bg-[#BE3A84] text-white py-2 px-4 rounded-full text-xl md:text-lg whitespace-nowrap ${className}`}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default AnimatedMasalComponent;