import { code } from "framer-motion/client";
import MetroJourney2 from "./MetroJourney2";

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

{/* <div className="absolute inset-0" style={detailstyle}>
				{journeyDetails.map((station, index) => (

					station.title ?
						<div onClick={() => handleStationClick(station)}
							key={index}
							className={`${station.title ? 'absolute flex items-center gap-2 px-3 cursor-pointer py-2 rounded-lg shadow-lg border border-green-400/40 backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-500' : ''}`}
							style={{
								left: `${station.titlex}`,
								top: `${station.titley}`,
								transform: "translate(-50%, -50%)", // Centers the text properly
								whiteSpace: "nowrap", // Prevents text from wrapping
							}}
						>
							<div className="">
								<i className={`${station.icon} text-blue-500 dark:text-green-400`}></i>
							</div>
							<span className="text-[14px] font-medium whitespace-nowrap">{station.title}</span>
							<div
								className={`absolute w-0 h-0 border-transparent`}
								style={{
									...(station.direction === "bottom" && {
										bottom: "-8px",
										left: "50%",
										transform: "translateX(-50%)",
										borderLeft: "6px solid transparent",
										borderRight: "6px solid transparent",
										borderTop: "6px solid #7C65F7",
									}),
									...(station.direction === "top" && {
										top: "-8px",
										left: "50%",
										transform: "translateX(-50%)",
										borderLeft: "6px solid transparent",
										borderRight: "6px solid transparent",
										borderBottom: "6px solid #7C65F7",
									}),
									...(station.direction === "left" && {
										left: "-8px",
										top: "50%",
										transform: "translateY(-50%)",
										borderTop: "6px solid transparent",
										borderBottom: "6px solid transparent",
										borderRight: "6px solid #7C65F7",
									}),
									...(station.direction === "right" && {
										right: "-px",
										top: "50%",
										transform: "translateY(-50%)",
										borderTop: "6px solid transparent",
										borderBottom: "6px solid transparent",
										borderLeft: "6px solid #7C65F7",
									}),
								}}
							></div>
						</div>
						:
						''
				))}
			</div>1 */}

kind of tooltip for MetroJourney2 component
            {/* Station Detail Card (Only Visible on Hover) */ }
							{/* {hoveredStationIndex === index && (
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
							)} */}

// star tailwind code
<div class="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#0ea5e9] shadow-[0_0_40px_rgba(14,165,233,0.9)] before:absolute before:w-24 before:h-24 before:rounded-full before:bg-[#0ea5e9] before:opacity-50 before:blur-2xl after:absolute after:w-32 after:h-32 after:rounded-full after:bg-[#0ea5e9] after:opacity-20 after:blur-[80px] animate-pulse"></div>


this code in metrojourney2 where svg path makes the curved sahpes and all

{/* <div className="w-screen h-full bg-sky-50/90 px-10 flex justify-between items-center dark:bg-[#060d1e]">
                <div className=" w-full relative">
                    <JourneyPath className="relative w-full"/>
                    <div className="absolute top-[16%] left-[8%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                        <Bus />
                    </div>
                    <div className="absolute top-[32%] left-[8%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("SSC", "2006 - 2013")}>
                            📌 (SSC) (2006 - 2013)
                        </div>
                    </div>
                    <div className="absolute top-[48%] left-[20%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Diploma in Engg", "2013 - 2016")}>
                            📌 Diploma in Engg (2013 - 2016)
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[15%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Bachelor of Engg", "2016-2019")}>
                            📌 Bachelor of Engg (2016-2019)
                        </div>
                    </div>
                    <div className="absolute top-[77%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("M.SC (Data Science)", "2023 - 2025")}>
                            📌 M.SC (Data Science) (2023 - 2025)
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[35%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                        <Career />
                    </div>
                    <div className="absolute top-[57%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Lithotech Food (2019-2021)")}>
                            📌 <a className="hover:text-indigo-400" target="_blank" href="https://www.lithotechfoodspicemachinery.com/">Lithotech Food </a> (2019-2021)
                        </div>
                    </div>
                    <div className="absolute top-[37%] left-[41%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Grade & Grind Technologies (2021)")}>
                            <a className="hover:text-indigo-400" target="_blank" href="http://ggtpl.com/">Grade & Grind Technologies 📌</a>(2021)
                        </div>
                    </div>
                    <div className="absolute top-[30%] right-[5%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="journeyCard" onClick={() => modalOpen("Work Experience", "Softaculous.ltd (2021 - Current)")}>
                            📌<a className="hover:text-indigo-400" target="_blank" href="http://softaculous.com/">Softaculous.ltd</a> (2021 - Current)
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <InfoModal 
                    close={modalClose} 
                    title={journeyTitle} 
                    message={journeyMessage} 
                />
            )}
            <JourneyParallax /> */}
{/* <Newspaper/>
            {/* <MetroJourney/> */}


line code
// <line
// 	key={station.id}
// 	x1={prev.x} y1={prev.y} x2={station.x} y2={station.y}
// 	strokeLinecap="round"
// 	className={`stroke-[4px] ${index <= reachedStationIndex ? 'stroke-[#00F8C4] dark:stroke-green-400' : 'stroke-[#7C65F7] dark:stroke-[#7A62F7]'}`}
// />

circle code 

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

background codes
{/* <div className='absolute' style={{ left: "55%", top: "8%", width:"50px"}}>
	<img src={train} alt="Animation" />
</div> */}
{/* start kind of heartbeat css */}
{/* <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse"></div> */}

modal for mobile 

{isModalOpen && (
	<div className="fixed inset-0 flex items-end justify-center z-50 bg-black/50 backdrop-blur-md">
	  <motion.div 
		initial={{ y: "100%" }} 
		animate={{ y: 0 }} 
		exit={{ y: "100%" }} 
		transition={{ duration: 0.3, ease: "easeInOut" }}
		className="w-full bg-white dark:bg-gray-800 rounded-t-xl p-6 shadow-lg"
	  >
		<button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 dark:text-gray-300">✖</button>
		<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Modal Title</h2>
		<p className="mt-2 text-gray-600 dark:text-gray-300">Your modal content goes here...</p>
	  </motion.div>
	</div>
  )}
  