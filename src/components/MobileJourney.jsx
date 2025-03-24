import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import journeyDetails from "../assets/journeyData.json"; // Import JSON file

const MobileJourney = () => {
    const [activeStation, setActiveStation] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [tooltipIndex, setTooltipIndex] = useState(null); // Stores the active tooltip

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleStationClick = (index) => {
        setTooltipIndex(tooltipIndex === index ? null : index); // Toggle tooltip
    };

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-black overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center space-y-10 py-20">
                {journeyDetails.map((station, index) => (
                    station.title ? (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: scrollY > index * window.innerHeight * 0.3 ? 1 : 0.3, y: scrollY > index * window.innerHeight * 0.3 ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Metro Path Line */}
                            {index > 0 && (
                                <motion.div
                                    className={`w-1 h-20 ${index <= activeStation ? 'bg-green-400' : 'bg-purple-400'} transition-all`}
                                />
                            )}

                            {/* Station Icon */}
                            <div
                                className="cursor-pointer p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                                onClick={() => handleStationClick(index)}
                            >
                                <i className={`${station.icon} text-2xl text-blue-500 dark:text-white`} />
                            </div>

                            {/* Tooltip (Tap to Show on Mobile) */}
                            {tooltipIndex === index && (
                                <motion.div
                                    className="absolute top-12 px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {station.title}
                                </motion.div>
                            )}
                        </motion.div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default MobileJourney;
