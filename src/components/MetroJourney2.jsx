import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoModal from "./InfoModal";
import journeyData from '../assets/journeyData.json';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tooltip from "./Tooltip";


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
	const [journeyIcon, setJourneyIcon] = useState("");
	const [journeyLink, setJourneyLink] = useState("");

	const modalOpen = (station) => {
		setIsModalOpen(true);
		setJourneyTitle(station.title);
		setJourneyMessage(station.details);
		setJourneyIcon(station.icon);
		setJourneyLink(station.link);
	};

	const modalClose = () => {
		setIsModalOpen(false);
		setJourneyTitle("");
		setJourneyMessage("");
		setJourneyIcon("");
		setJourneyLink("");
	};

	const handleStationClick = (station, modalCheck = false) => {
		const index = journeyData.findIndex((s) => s.id === station.id);
		setSelectedStation(station);
		setReachedStationIndex(index);

		if (modalCheck == true) {
			modalOpen(station);
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
		<div className="w-full h-screen flex justify-center items-center mt-10 overscroll-none overflow-hidden transition-all duration-500 bg-sky-50/90 shadow_background text-black dark:text-white relative">
			<svg width="100%" height="100%" className="rounded-lg shadow-2xl">
				{journeyDetails.map((station, index) => {
					if (index === 0) return null;
					const prev = journeyDetails[index - 1];
					return (
						// <line
						// 	key={station.id}
						// 	x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
						// 	strokeLinecap="round"
						// 	className={`stroke-[4px] ${index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-green-400' : 'stroke-[#7C65F7] dark:stroke-[#7A62F7]'}`}
						// />

						<motion.line
							key={station.id}
							x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
							strokeLinecap="round"
							// className={`stroke-[4px] ${index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-green-400' : 'stroke-[#7C65F7] dark:stroke-[#7A62F7]'}`}
							className={`stroke-[4px] ${index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-[#2ba35b]' : 'stroke-[#7C65F7] dark:stroke-[#344bae]'}`}
							initial={{ strokeDasharray: "100%", strokeDashoffset: "100%" }}
							animate={{ strokeDashoffset: "0%" }}
							transition={{ duration: 1.5, ease: "easeInOut" }}
						/>
					);
				})}

				{journeyDetails.map((station, index) => (
					<g key={station.id} onClick={() => handleStationClick(station)} >
						{/* <motion.circle
							cx={station.x} cy={station.y} r={selectedStation?.id === station.id ? "20" : "18"}
							whileHover={{ scale: 1.3 }}
							className={`cursor-pointer drop-shadow-xl ${index < reachedStationIndex ? 'fill-[#00F8C4]' : index === reachedStationIndex ? 'fill-[#00D1FF]' : 'fill-[#7A62F7]'}`}
						/> */}
						{/* <motion.circle
							cx={station.x}
							cy={station.y}
							r="18"
							whileHover={{
								scale: 1.3,
								filter: "drop-shadow(0px 0px 30px #00D1FF)"
							}}
							transition={{ duration: 0.3 }}
							className="cursor-pointer fill-[#00F8C4] drop-shadow-lg"
						/> */}
						<motion.circle
							cx={station.x}
							cy={station.y}
							r={selectedStation?.id === station.id ? "20" : "18"}
							whileHover={{ scale: 1.3 }}
							// className={`cursor-pointer drop-shadow-xl ${index < reachedStationIndex ? 'fill-[#00F8C4]' : index === reachedStationIndex ? 'fill-[#00D1FF]' : 'fill-[#7A62F7]'}`}
							className={`cursor-pointer shadow-[#fff] drop-shadow-xl ${index < reachedStationIndex ? 'fill-[#2ba35b]' : index === reachedStationIndex ? 'fill-[#00D1FF]' : 'fill-[#344bae]'}`}
							initial={{ filter: "drop-shadow(0px 0px 10px #00F8C4)" }}
							animate={{ filter: ["drop-shadow(0px 0px 10px #00F8C4)", "drop-shadow(0px 0px 20px #00F8C4)"] }}
							transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
						/>
						{/* <motion.circle
							cx={journeyDetails[0].x}
							cy={journeyDetails[0].y}
							r="6"
							fill="#00F8C4"
							animate={{
								x: [journeyDetails[0].x, journeyDetails[1].x, journeyDetails[2].x, journeyDetails[3].x],
								y: [journeyDetails[0].y, journeyDetails[1].y, journeyDetails[2].y, journeyDetails[3].y]
							}}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						/> */}
					</g>
				))}
			</svg>

			<div className="absolute inset-0">
				{journeyDetails.map((station, index) => (
					station.title ? (
						<div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleStationClick(station)} className="cursor-pointer">
							<div className="absolute" style={{ left: `${station.x}`, top: `${station.y}`, transform: "translate(-50%, -50%)" }}>
								<Tooltip tooltipTitle={station.title} onClick={() => handleStationClick(station, true)}>
									<i className={`${station.icon} text-blue-500 dark:text-white`} onClick={(e) => { e.stopPropagation(); handleStationClick(station) }}></i>
								</Tooltip>
							</div>
						</div>
					) : null
				))}
			</div>
			{/* start kind of heartbeat css */}
			{/* <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse"></div> */}
			<div class="absolute inset-0 animate-[float_6s_infinite_alternate] blur-lg bg-white/10 w-2 h-2 rounded-full"></div>
			{isModalOpen && (
				<InfoModal
					close={modalClose}
					title={journeyTitle}
					message={journeyMessage}
					icon={journeyIcon}
					link={journeyLink}
				/>
			)}
		</div>
	);
};

export default MetroJourney2;