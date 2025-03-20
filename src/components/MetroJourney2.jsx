import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoModal from "./InfoModal";
import journeyData from '../assets/journeyData.json';
import "bootstrap-icons/font/bootstrap-icons.css";


const MetroJourney2 = () => {
	const [selectedStation, setSelectedStation] = useState(null);
	const [reachedStationIndex, setReachedStationIndex] = useState(10);
	const [journeyDetails, setJourneyDetails] = useState([]);

	useEffect(() => {
		setJourneyDetails(journeyData);
	}, []);

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

	const handleStationClick = (station, modalCheck = false) => {
		const index = journeyData.findIndex((s) => s.id === station.id);
		setSelectedStation(station);
		setReachedStationIndex(index);

		if (modalCheck == true) {
			modalOpen(station.title, station.details);
			console.log("yaha he")
		}
	};

	const [hoveredStationIndex, setHoveredStationIndex] = useState(null);
	const timeoutRef = useRef(null);

	const handleMouseEnter = (index) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		console.log(index);
		setHoveredStationIndex(index);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHoveredStationIndex(null);
		}, 500);
	};

	return (
		<div className="w-full h-screen flex justify-center items-center mt-10 overscroll-none overflow-hidden transition-all duration-500 bg-sky-50/90 dark:bg-[#060d1e] text-black dark:text-white relative">
			<svg width="100%" height="100%" className="rounded-lg shadow-2xl">
				{journeyDetails.map((station, index) => {
					if (index === 0) return null;
					const prev = journeyDetails[index - 1];
					return (
						<line
							key={station.id}
							x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
							strokeLinecap="round"
							className={`stroke-[4px] ${index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-green-400' : 'stroke-[#7C65F7] dark:stroke-[#7A62F7]'}`}
						/>
					);
				})}

				{journeyDetails.map((station, index) => (
					<g key={station.id} onClick={() => handleStationClick(station)} >
						<motion.circle
							cx={station.x} cy={station.y} r={selectedStation?.id === station.id ? "20" : "18"}
							whileHover={{ scale: 1.3 }}
							className={`cursor-pointer drop-shadow-xl ${index < reachedStationIndex ? 'fill-[#00F8C4]' : index === reachedStationIndex ? 'fill-[#00D1FF]' : 'fill-[#7A62F7]'}`}
						/>
					</g>
				))}
			</svg>

			<div className="absolute inset-0">
				{journeyDetails.map((station, index) => (
					station.title ? (
						<div
							key={index}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
							onClick={() => handleStationClick(station)}
							className="cursor-pointer"
						>
							{/* Station Circle (Clickable Point) */}
							<div className="absolute" 
								style={{
									left: `${station.x}`,
									top: `${station.y}`,
									transform: "translate(-50%, -50%)",
								}}
							>
								<i className={`${station.icon} text-blue-500 dark:text-green-400`}></i>
							</div>

							{/* Station Detail Card (Only Visible on Hover) */}
							{hoveredStationIndex === index && (
								<div
									className="absolute cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg shadow-lg border border-green-400/40 backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-500"
									style={{
										whiteSpace: "nowrap",
										left: `${parseFloat(station.x)}%`,
										top: `${parseFloat(station.y) - 7}%`,
										transform: "translate(-50%, -50%)",
										position: "absolute"
									}}
									onClick={() => handleStationClick(station, true)}
								>
									<i className={`${station.icon} text-blue-500 dark:text-green-400`}></i>
									<span className="text-[14px] font-medium">{station.title}</span>
									<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#7C65F7] dark:border-t-[#7A62F7]"></div>
								</div>
							)}
						</div>
					) : null
				))}
			</div>

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