import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
    { from: 10000, to: 20000, label: "Employees Engaged" },
    { from: 1, to: 10, label: "Locations Reached" },
    { from: 50, to: 150, label: "Workshops Completed" },
];

const locations = [
    { city: "Delhi", top: "25%", left: "29%" },
    { city: "Mumbai", top: "60%", left: "17%" },
    { city: "Hyderabad", top: "65%", left: "35%" },
    { city: "Surat", top: "50%", left: "15%" },
    { city: "Pune", top: "64%", left: "25%" },
];

const useAnimatedNumber = (from, to) => {
    const [number, setNumber] = useState(from);

    useEffect(() => {
        const duration = 2000;
        const steps = 60; 
        const stepDuration = duration / steps;
        const increment = (to - from) / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep < steps) {
                setNumber(prev => Math.min(prev + increment, to));
                currentStep++;
            } else {
                clearInterval(interval);
                setNumber(to);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [from, to]);

    return Math.floor(number);
};

const AnimatedStat = ({ from, to, label }) => {
    const animatedNumber = useAnimatedNumber(from, to);
    
    return (
        <div className="bg-green-800 text-white p-6 rounded-md shadow-md flex flex-col items-center">
            <p className="text-2xl font-bold">
                {animatedNumber}+
            </p>
            <p className="text-lg">{label}</p>
        </div>
    );
};

const MasalTravelHistory = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
            <h2 className="text-center text-4xl font-bold mb-12 text-[#8B0000]">
                Our Mashal&apos;s Travel History
            </h2>

            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
                <div className="relative w-[400px] md:w-[500px]">
                    <img src="images/map.png" alt="India Map" className="w-full" />
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="absolute"
                            style={{ top: location.top, left: location.left }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="relative group"
                            >
                                <img
                                    src="images/masal.png"
                                    alt={location.city}
                                    className="w-4 h-8 cursor-pointer z-10"
                                />
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 hidden group-hover:block">
                                    <div className="bg-white text-black text-sm px-5 py-2 shadow-lg border border-gray-200 relative">
                                        <p className="font-semibold text-[#8B0000] text-xl">{location.city}</p>
                                        <a href="#" className="text-gray-500 hover:underline text-sm">View</a>
                                    </div>
                                    <div className="w-3 h-3 bg-white border-l border-b border-gray-200 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5"></div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    {stats.map((stat, index) => (
                        <AnimatedStat key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MasalTravelHistory;