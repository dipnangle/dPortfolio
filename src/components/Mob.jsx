import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Mob = () => {
	const totalPoints = 10;
	const segmentHeight = 100; // Each segment's height in vh
	const { scrollYProgress } = useScroll();

	const lines = [];
	const blue_lines = [];
	const circlePoints = [];
	const blueCircles = [];

	for (let i = 0; i < totalPoints; i++) {
		let yStart = i * segmentHeight;
		let yEnd = (i + 1) * segmentHeight;

		// Alternate line positions (Left or Right)
		let xPosition = i % 2 === 0 ? "33.33%" : "66.66%";
		let nextXPosition = i % 2 === 0 ? "66.66%" : "33.33%";

		// **Static Gray Path**
		lines.push({ x1: xPosition, y1: `${yStart}vh`, x2: xPosition, y2: `${yEnd}vh` });

		// **Step 1: Vertical Line Animation**
		let pathProgressV = useTransform(scrollYProgress, [i / totalPoints, (i + 1) / totalPoints], [0, 1]);

		blue_lines.push({
			x1: xPosition,
			y1: `${yStart}vh`,
			x2: xPosition,
			y2: `${yEnd}vh`,
			progress: pathProgressV,
		});

		// **Add station circles (black)**
		circlePoints.push({ x: xPosition, y: `${yStart + 50}vh` });

		// **Blue Circle at the End of Vertical Line**
		blueCircles.push({ x: xPosition, y: `${yEnd}vh`, progress: pathProgressV });

		// **Step 2: Horizontal Line Starts After Vertical**
		if (i < totalPoints - 1) {
			lines.push({ x1: xPosition, y1: `${yEnd}vh`, x2: nextXPosition, y2: `${yEnd}vh` });

			// Delay horizontal animation until vertical is mostly complete
			let pathProgressH = useTransform(pathProgressV, [0.99, 1], [0, 1]);

			blue_lines.push({
				x1: xPosition,
				y1: `${yEnd}vh`,
				x2: nextXPosition,
				y2: `${yEnd}vh`,
				progress: pathProgressH,
			});

			// **Blue Circle at the End of Horizontal Line**
			blueCircles.push({ x: nextXPosition, y: `${yEnd}vh`, progress: pathProgressH });
		}
	}

	return (
		<div className="relative w-full h-[1000vh] bg-sky-50/90 dark:bg-[#060d1e] flex items-center justify-center">
			<motion.svg className="absolute top-0 h-full">
				{/* Static Gray Path */}
				{lines.map((line, index) => (
					<motion.line
						key={index}
						x1={line.x1}
						y1={line.y1}
						x2={line.x2}
						y2={line.y2}
						stroke="#575757"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				))}

				{/* Animated Blue Path (Follows Scroll) */}
				{blue_lines.map((line, index) => (
					<motion.line
						key={index}
						x1={line.x1}
						y1={line.y1}
						x2={line.x2}
						y2={line.y2}
						stroke="#2735ff"
						strokeWidth="3"
						strokeLinecap="round"
						initial={{ pathLength: 0 }}
						style={{ pathLength: line.progress }}
						transition={{ duration: 0.4 }}
					/>
				))}

				{/* Station Points (Black) */}
				{circlePoints.map((station, index) => (
					<motion.circle
						key={index}
						cx={station.x}
						cy={station.y}
						r={"10"}
						whileHover={{ scale: 1.3 }}
						className={"fill-[#000]"}
						transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
					/>
				))}
			</motion.svg>
		</div>
		
	);
};

export default Mob;


// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Mob = () => {
//     const totalPoints = 10;
//     const segmentHeight = 100; // Each segment's height in vh
//     const { scrollYProgress } = useScroll();

//     const lines = [];
//     const blue_lines = [];
//     let movingCircle = { x: "33.33%", y: "0vh", progress: useTransform(scrollYProgress, [0, 1], [0, 1]) };

//     for (let i = 0; i < totalPoints; i++) {
//         let yStart = i * segmentHeight;
//         let yEnd = (i + 1) * segmentHeight;

//         // Alternate line positions (Left or Right)
//         let xPosition = i % 2 === 0 ? "33.33%" : "66.66%";
//         let nextXPosition = i % 2 === 0 ? "66.66%" : "33.33%";

//         // **Static Gray Path**
//         lines.push({ x1: xPosition, y1: `${yStart}vh`, x2: xPosition, y2: `${yEnd}vh` });

//         // **Step 1: Vertical Line Animation**
//         let pathProgressV = useTransform(scrollYProgress, [i / totalPoints, (i + 1) / totalPoints], [0, 1]);

//         blue_lines.push({
//             x1: xPosition,
//             y1: `${yStart}vh`,
//             x2: xPosition,
//             y2: `${yEnd}vh`,
//             progress: pathProgressV,
//         });

//         // Update moving circle position (for vertical line)
//         if (i === totalPoints - 1) {
//             movingCircle = { x: xPosition, y: `${yEnd}vh`, progress: pathProgressV };
//         }

//         // **Step 2: Horizontal Line Starts After Vertical**
//         if (i < totalPoints - 1) {
//             lines.push({ x1: xPosition, y1: `${yEnd}vh`, x2: nextXPosition, y2: `${yEnd}vh` });

//             // Delay horizontal animation until vertical is mostly complete
//             let pathProgressH = useTransform(pathProgressV, [0.99, 1], [0, 1]);

//             blue_lines.push({
//                 x1: xPosition,
//                 y1: `${yEnd}vh`,
//                 x2: nextXPosition,
//                 y2: `${yEnd}vh`,
//                 progress: pathProgressH,
//             });

//             // Update moving circle position (for horizontal line)
//             movingCircle = { x: nextXPosition, y: `${yEnd}vh`, progress: pathProgressH };
//         }
//     }

//     return (
//         <div className="relative w-full h-[1000vh] bg-sky-50/90 dark:bg-[#060d1e] flex items-center justify-center">
//             <motion.svg className="absolute top-0 h-full">
//                 {/* Static Gray Path */}
//                 {lines.map((line, index) => (
//                     <motion.line
//                         key={index}
//                         x1={line.x1}
//                         y1={line.y1}
//                         x2={line.x2}
//                         y2={line.y2}
//                         stroke="#575757"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                     />
//                 ))}

//                 {/* Animated Blue Path (Follows Scroll) */}
//                 {blue_lines.map((line, index) => (
//                     <motion.line
//                         key={index}
//                         x1={line.x1}
//                         y1={line.y1}
//                         x2={line.x2}
//                         y2={line.y2}
//                         stroke="#2735ff"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         style={{ pathLength: line.progress }}
//                         transition={{ duration: 0.4 }}
//                     />
//                 ))}

//                 {/* Moving Blue Circle at Path End */}
//                 <motion.circle
//                     cx={movingCircle.x}
//                     cy={movingCircle.y}
//                     r={"7"}
//                     className={"fill-[#2735ff]"}
//                     style={{ scale: movingCircle.progress }}
//                 />
//             </motion.svg>
//         </div>
//     );
// };

// export default Mob;