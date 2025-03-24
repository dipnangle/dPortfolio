import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import journeyDetails from '../assets/journeyData.json';

const MobJourney = () => {
    const [activeStation, setActiveStation] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleStationClick = (index) => {
        setActiveStation(index);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000); // Auto-hide after 3s
    };

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-black overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center space-y-20 py-20">
                {journeyDetails.map((station, index) => (
                    station.title ? (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: scrollY > index * 150 ? 1 : 0.3, y: scrollY > index * 150 ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Animated Path Line */}
                            {index > 0 && (
                                <motion.div
                                    className={`w-1 h-24 ${index <= activeStation ? 'bg-green-500' : 'bg-purple-500'} transition-all duration-500`}
                                />
                            )}
                            
                            {/* Station Icon with Click Interaction */}
                            <div
                                className="cursor-pointer p-5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                                onClick={() => handleStationClick(index)}
                            >
                                <i className={`${station.icon} text-3xl text-blue-600 dark:text-white`} />
                            </div>

                            {/* Tooltip on Click */}
                            {showTooltip && activeStation === index && (
                                <motion.div
                                    className="absolute top-14 px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-xl text-sm w-max"
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

export default MobJourney;