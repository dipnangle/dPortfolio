import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoModal from "./InfoModal";
import journeyData from '../assets/journeyData.json';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tooltip from "./Tooltip";
import train from "../assets/train.gif";

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

		let title ;
		
		if(station.modalTitle){
			title = station.modalTitle
		}else{
			title = station.title
		}

		setIsModalOpen(true);
		setJourneyTitle(title);
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
		}
	};

	return (
		<div className='w-full h-screen max-h-screen mt-24 overflow-hidden flex justify-center overscroll-none transition-all duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(241,250,255,0.95)_10%,rgba(230,240,250,0.98)_40%,#F1FAFF_80%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(18,24,48,0.95)_10%,rgba(10,15,38,0.98)_40%,#060D1E_80%)] text-black dark:text-white relative'>
			<svg width="100%" height="100%" className='rounded-lg shadow-2xl overflow-hidden'>
				{journeyDetails.map((station, index) => {
					if (index === 0) return null;
					const prev = journeyDetails[index - 1];
					return (
						<g>	
							{/* this is for glow effect for line */}
							<motion.line
								x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
								strokeLinecap="round"
								strokeWidth="6"
								className={index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-green-400 opacity-50' : 'stroke-[#7C65F7] dark:stroke-[#7A62F7] opacity-50'}
								filter="blur(1.5px)"
								initial={{ strokeDasharray: "100%", strokeDashoffset: "100%" }}
								animate={{ strokeDashoffset: "0%" }}
								transition={{ duration: 1.5, ease: "easeInOut" }}
							/>

							{/* actual line which is drawn */}
							<motion.line
								key={station.id}
								x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
								strokeLinecap="round"
								className={`stroke-[4px] shadow-[0_0_10px_rgba(34,197,94,0.7)] ${index <= reachedStationIndex ? 'stroke-[#1D7A42] dark:stroke-[#2ba35b]' : 'stroke-[#6B7BBA] dark:stroke-[#344bae]'}`}
								initial={{ strokeDasharray: "100%", strokeDashoffset: "100%" }}
								animate={{ strokeDashoffset: "0%" }}
								transition={{ duration: 1.5, ease: "easeInOut" }}
							/>
							{station.id == 18 ? 
								(<foreignObject x="58%" y="7.5%" width="60" height="70">
									<img src={train} width="50" height="50" alt="Animation" />
								</foreignObject>)
							: null
							}
						</g>
					);
				})}
				
				{journeyDetails.map((station, index) => (
					<g key={station.id} onClick={() => handleStationClick(station)} >
						<motion.circle
							cx={station.x}
							cy={station.y}
							r={selectedStation?.id === station.id ? "20" : "18"}
							whileHover={{ scale: 1.3 }}
							className={`cursor-pointer drop-shadow-xl ${index < reachedStationIndex ? 'fill-[#2BA35B] dark:fill-[#2ba35b] hover:scale-110 transition-all' : index === reachedStationIndex ? 'fill-[#008CFF] stroke-[#ffffff] stroke-[2px]' : 'fill-[#4F5D95] dark:fill-[#344bae]'}`}
							initial={{ filter: "drop-shadow(0px 0px 10px #00F8C4)" }}
							animate={{ filter: ["drop-shadow(0px 0px 10px #00F8C4)", "drop-shadow(0px 0px 20px #00F8C4)"] }}
							transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
						/>
					</g>
				))}
			</svg>

			<div className='absolute inset-0'>
				{journeyDetails.map((station, index) => (
					station.title ? (
						<div key={index} onClick={() => handleStationClick(station)} className='cursor-pointer'>
							<div className='absolute' style={{ left: `${station.x}`, top: `${station.y}`, transform: "translate(-50%, -50%)" }}>
								<Tooltip tooltipTitle={station.title} onClick={() => handleStationClick(station, true)} icon={station.icon}>
									<i className={`${station.icon} text-[#F1FAFF] dark:text-white`} onClick={(e) => { e.stopPropagation(); handleStationClick(station) }}></i>
								</Tooltip>
							</div>
						</div>
					) : null
				))}
			</div>
			<div className='absolute inset-0 animate-[float_6s_infinite_alternate] blur-lg bg-white/10 w-2 h-2 rounded-full'></div>
			{isModalOpen && (
				<InfoModal
					close={modalClose}
					title={journeyTitle}
					message={journeyMessage}
					icon={journeyIcon}
					link={journeyLink}
				/>
			)}
			<motion.div
				animate={{ y: [0, -5, 0] }}
				transition={{duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}}
				className="journeyTip"
			>
				<div className="flex flex-col items-start space-y-1">
					<div className="flex items-center gap-2">
						<span className="text-lg">💡</span>
						<span><strong>Hover or click</strong> a station to see <strong>Station</strong> name</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-lg">🔍</span>
						<span><strong>Click</strong> on the <strong>tooltip</strong> to view more details</span>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MetroJourney2;