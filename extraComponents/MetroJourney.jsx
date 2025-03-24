import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const journeyData = [
    { id: 1, title: "SSC", x: 50, y: 100, details: "Completed SSC with distinction" },
    { id: 2, title: "College", x: 200, y: 100, details: "Graduated with honors" },
    { id: 3, title: "Internship", x: 350, y: 100, details: "Worked on AI projects" },
    { id: 4, title: "Job", x: 500, y: 100, details: "Started first job at a tech company" },
    { id: 5, title: "Project A", x: 500, y: 200, details: "Developed a machine learning model" },
    { id: 6, title: "Project B", x: 350, y: 200, details: "Contributed to an open-source project" },
    { id: 7, title: "Certification", x: 200, y: 200, details: "Earned a cloud computing certificate" },
    { id: 8, title: "Promotion", x: 50, y: 200, details: "Promoted to Senior Developer" },
    { id: 9, title: "New Role", x: 50, y: 300, details: "Transitioned into a managerial role" },
    { id: 10, title: "Speaking Engagement", x: 200, y: 300, details: "Spoke at a tech conference" },
    { id: 11, title: "Award", x: 350, y: 300, details: "Won Best Innovator Award" },
    { id: 12, title: "Future Goals", x: 500, y: 300, details: "Aiming for a leadership role" }
];

const MetroJourney = () => {
    const [selectedStation, setSelectedStation] = useState(null);

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-900 text-white relative">
            <svg width="600" height="400" className="bg-gray-800 rounded-lg shadow-xl">
                {/* Metro Lines */}
                {journeyData.map((station, index) => {
                    if (index === 0) return null;
                    const prev = journeyData[index - 1];
                    return (
                        <line
                            key={station.id}
                            x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
                            stroke="#00ffcc" strokeWidth="5" strokeLinecap="round"
                            className="drop-shadow-glow"
                        />
                    );
                })}

                {/* Metro Stations */}
                {journeyData.map((station) => (
                    <g key={station.id} onClick={() => setSelectedStation(station)}>
                        <motion.circle
                            cx={station.x} cy={station.y} r="12"
                            fill="#ff4757" stroke="white" strokeWidth="3"
                            whileHover={{ scale: 1.4 }}
                            className="cursor-pointer transition-transform"
                        />
                        <text x={station.x + 15} y={station.y} className="text-sm">
                            {station.title}
                        </text>
                    </g>
                ))}
            </svg>

            {/* Animated Popup for Selected Station */}
            <AnimatePresence>
                {selectedStation && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-10 bg-white text-black p-4 rounded-lg shadow-xl"
                    >
                        <h3 className="font-bold text-lg">{selectedStation.title}</h3>
                        <p>{selectedStation.details}</p>
                        <button onClick={() => setSelectedStation(null)} className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MetroJourney;
