import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoModal from "./InfoModal";

const journeyData = [
	{ id: 1, title: "SSC", x: "5%", y: "20%", details: "Completed SSC with distinction" },
	{ id: 2, title: "College", x: "30%", y: "20%", details: "Graduated with honors" },
	{ id: 3, title: "Internship", x: "30%", y: "40%", details: "Worked on AI projects" },
	{ id: 4, title: "Job", x: "20%", y: "40%", details: "Started first job at a tech company" },
	{ id: 5, title: "Project A", x: "20%", y: "55%", details: "Developed a machine learning model" },
	{ id: 6, title: "Project B", x: "35%", y: "55%", details: "Contributed to an open-source project" },
	{ id: 7, title: "Certification", x: "35%", y: "90%", details: "Earned a cloud computing certificate" },
	{ id: 8, title: "Promotion", x: "45%", y: "90%", details: "Promoted to Senior Developer" },
	{ id: 9, title: "New Role", x: "45%", y: "47%", details: "Transitioned into a managerial role" },
	{ id: 10, title: "Speaking Engagement", x: "55%", y: "47%", details: "Spoke at a tech conference" },
	{ id: 12, title: "Award", x: "55%", y: "15%", details: "Won Best Innovator Award" },
	{ id: 13, title: "Award", x: "65%", y: "15%", details: "Won Best Innovator Award" },
	{ id: 14, title: "Award", x: "65%", y: "35%", details: "Won Best Innovator Award" },
	{ id: 15, title: "Award", x: "85%", y: "35%", details: "Won Best Innovator Award" },
	{ id: 16, title: "Award", x: "85%", y: "55%", details: "Won Best Innovator Award" },
	{ id: 17, title: "Award", x: "72%", y: "55%", details: "Won Best Innovator Award" },
	{ id: 18, title: "Award", x: "72%", y: "75%", details: "Won Best Innovator Award" },
	{ id: 19, title: "Future Goals", x: "95%", y: "75%", details: "Aiming for a leadership role" }
];


const MetroJourney2 = () => {
	const [selectedStation, setSelectedStation] = useState(null);
	const [reachedStationIndex, setReachedStationIndex] = useState(-1);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [journeyTitle, setJourneyTitle] = useState("");
	const [journeyMessage, setJourneyMessage] = useState("");

	const modalOpen = (title, message) => {
		setIsModalOpen(true);
		setJourneyTitle(title);
		setJourneyMessage(message);
	};

	const modalClose = () => {
		setIsModalOpen(false);
		setJourneyTitle("");
		setJourneyMessage("");
	};

	const handleStationClick = (station) => {
		const index = journeyData.findIndex((s) => s.id === station.id);
		setSelectedStation(station);
		setReachedStationIndex(index);
		modalOpen(station.title, station.details);
	};

	return (
		<div className="w-full h-screen flex justify-center items-center transition-all duration-500 bg-sky-50/90 dark:bg-[#060d1e] text-black dark:text-white relative">
			<svg width="100%" height="100%" className="rounded-lg shadow-2xl">
				{/* Metro Lines */}
				{journeyData.map((station, index) => {
					if (index === 0) return null;
					const prev = journeyData[index - 1];
					return (
						<line
							key={station.id}
							x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
							stroke={index <= reachedStationIndex ? "#00FF00" : "#0044FF"}
							strokeWidth="6"
							strokeLinecap="round"
							className={index > reachedStationIndex ? "fill-[#1F51FF] animate-glow" : "animate-transition"}
						/>
					);
				})}

				{/* Metro Stations */}
				{journeyData.map((station, index) => (
					<g key={station.id} onClick={() => handleStationClick(station)}>
						<motion.circle
							cx={station.x} cy={station.y} r={selectedStation?.id === station.id ? "12" : "10"}
							fill={index <= reachedStationIndex ? "#00FF00" : "#FF0080"}
							stroke="#FFD700" strokeWidth="3"
							whileHover={{ scale: 1.5 }}
							transition={{ duration: 0.2 }}
							className="cursor-pointer transition-transform drop-shadow-xl"
						/>
						<text
							x={`${parseFloat(station.x) + 2}%`}
							y={`${parseFloat(station.y) + 2}%`}
							fontSize="12"
							fontWeight="bold"
							textAnchor="middle"
							fill="currentColor"
						>
							{station.title}
						</text>
					</g>
				))}
			</svg>

			{/* Modal */}
			{isModalOpen && (
				<InfoModal
					close={modalClose}
					title={journeyTitle}
					message={journeyMessage}
				/>
			)}
		</div>
	);
};

export default MetroJourney2;