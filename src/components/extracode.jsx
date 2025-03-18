const journeyData = [
	{ id: 1, title: "SSC", x: "10%", y: "20%", details: "Completed SSC with distinction" },
	{ id: 2, title: "College", x: "35%", y: "20%", details: "Graduated with honors" },
	{ id: 3, title: "Internship", x: "62%", y: "20%", details: "Worked on AI projects" },
	{ id: 4, title: "Job", x: "90%", y: "20%", details: "Started first job at a tech company" },
	{ id: 5, title: "Project A", x: "90%", y: "55%", details: "Developed a machine learning model" },
	{ id: 6, title: "Project B", x: "62%", y: "55%", details: "Contributed to an open-source project" },
	{ id: 7, title: "Certification", x: "35%", y: "55%", details: "Earned a cloud computing certificate" },
	{ id: 8, title: "Promotion", x: "10%", y: "55%", details: "Promoted to Senior Developer" },
	{ id: 9, title: "New Role", x: "10%", y: "90%", details: "Transitioned into a managerial role" },
	{ id: 10, title: "Speaking Engagement", x: "35%", y: "90%", details: "Spoke at a tech conference" },
	{ id: 11, title: "Award", x: "62%", y: "90%", details: "Won Best Innovator Award" },
	{ id: 12, title: "Future Goals", x: "90%", y: "90%", details: "Aiming for a leadership role" }
];

<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative">
    <svg width="100%" height="100%" className="bg-gray-800 rounded-lg shadow-2xl">
        {/* Metro Lines */}
        {journeyData.map((station, index) => {
            if (index === 0) return null;
            const prev = journeyData[index - 1];
            return (
                <line
                    key={station.id}
                    x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
                    stroke="#00ffcc" strokeWidth="6" strokeLinecap="round"
                    className="drop-shadow-lg animate-pulse"
                />
            );
        })}

        {/* Metro Stations */}
        {journeyData.map((station) => (
            <g key={station.id} onClick={() => handleStationClick(station)}>
                <motion.circle
                    cx={station.x} cy={station.y} r="14"
                    fill="#ff4757" stroke="#ffcc00" strokeWidth="3"
                    whileHover={{ scale: 1.5 }}
                    className="cursor-pointer transition-transform drop-shadow-xl"
                />
                <text x={`calc(${station.x} + 2%)`} y={station.y} className="text-sm font-bold fill-yellow-300">
                    {/* {station.title} */}
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
                className="absolute bottom-10 bg-white text-black p-6 rounded-lg shadow-2xl border-2 border-yellow-400"
            >
                <h3 className="font-bold text-lg text-blue-700">{selectedStation.title}</h3>
                <p className="text-gray-800">{selectedStation.details}</p>
                <button onClick={() => setSelectedStation(null)} className="mt-3 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                    Close
                </button>
            </motion.div>
        )}
    </AnimatePresence>


</div>