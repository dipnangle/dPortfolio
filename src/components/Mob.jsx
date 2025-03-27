import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useAnimation, useMotionTemplate, useScroll } from "framer-motion";
import { none } from "@tsparticles/engine";
import coder from '../assets/coder.png';
import { code } from "framer-motion/client";

const Mob = () => {
    const [showDiv, setShowDiv] = useState(false);
    const controls = useAnimation();

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    const percentageText = useMotionTemplate`${rounded}%`
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const controls = animate(count, 100, { duration: 3 })
        const unsubscribe = rounded.onChange((latest) => {
            if (latest === 100) {
                setTimeout(() => setIsVisible(false), 500); // Hide after 0.5s
            }
        });

        return () => {
            controls.stop();
            unsubscribe();
        };

    }, [])

    // const timelineData = [
    //     { id: 1, title: "Event 1", description: "This is the first event.", date: "Jan 2020" },
    //     { id: 2, title: "Event 2", description: "Something happened here.", date: "Mar 2020" },
    //     { id: 3, title: "Event 3", description: "Another major event.", date: "Jul 2020" },
    //     { id: 4, title: "Event 4", description: "The final event.", date: "Dec 2020" },
    // ];

    const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"],
    // });

    const { scrollYProgress } = useScroll();
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const totalPoints = 10;
    const segmentHeight = 100; // Each segment's height in vh

    const lines = [];
    const blue_lines = [];
    const circlePoints = [];
    const blueCircles = [];

    for (let i = 0; i < totalPoints; i++) {
        let yStart = i * segmentHeight;
        let yEnd = (i + 1) * segmentHeight;

        let xPosition = i % 2 === 0 ? "10%" : "90%";
        let nextXPosition = i % 2 === 0 ? "90%" : "10%";

        // **Gray Path (Static)**
        lines.push({ x1: xPosition, y1: `${yStart}vh`, x2: xPosition, y2: `${yEnd}vh` });

        // **Blue Path (Scrolling Effect)**
        let startProgress = i / totalPoints;
        let endProgress = (i + 1) / totalPoints;

        // **Vertical Line Animation**
        let pathProgressV = useTransform(scrollYProgress, [startProgress, endProgress], [0, 1]);

        blue_lines.push({
            x1: xPosition, y1: `${yStart}vh`, x2: xPosition, y2: `${yEnd}vh`, progress: pathProgressV
        });

        // **Add Stations (Black Circles)**
        circlePoints.push({ x: xPosition, y: `${yStart + 50}vh` });

        // **Horizontal Line Starts AFTER Vertical Completes (100%)**
        if (i < totalPoints - 1) {
            lines.push({ x1: xPosition, y1: `${yEnd}vh`, x2: nextXPosition, y2: `${yEnd}vh` });

            let pathProgressH = useTransform(pathProgressV, [1, 1], [0, 1]); // **Changed from 80% to 100%**

            blue_lines.push({
                x1: xPosition, y1: `${yEnd}vh`, x2: nextXPosition, y2: `${yEnd}vh`, progress: pathProgressH
            });
        }
    }

    return (
        <div className="w-full space-y-4 dark:bg-[#060d1e] bg-sky-50/90">
            {/* Animated Number from 0 to 100 */}

            {isVisible ?
                (<div className="h-screen flex flex-col items-center justify-center">
                    <motion.pre className='text-black dark:text-white'>{percentageText}</motion.pre>
                </div>)
                :
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="relative w-full h-full bg-sky-50/90 dark:bg-[#060d1e] flex items-start pt-28 justify-center dark:text-white">
                        <div className="flex flex-col justify-center items-start">
                            <div className="w-52 h-52 relative flex items-center justify-center">
                                {/* Animated Circle */}
                                <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="48" // Ensure it fits within the viewBox
                                        stroke="blue"
                                        strokeWidth="3"
                                        fill="transparent"
                                        strokeDasharray="301.6" // Correct circumference (2 * π * 45)
                                        strokeDashoffset="301.6"
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    />
                                </svg>
                                {/* Centered Image */}
                                <img src={coder} alt="boy_coding" className="w-full h-full object-cover absolute" />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center w-full h-[100vh]">\
                        <svg className="absolute w-full h-full">
                            <motion.line
                                x1="50%"
                                y1="0vh"
                                x2="50%"
                                y2="30vh"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="square"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            />
                            <motion.line
                                x1="50%"
                                y1="30vh"
                                x2="20%"
                                y2="30vh"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="square"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                            />
                            <motion.line
                                x1="50%"
                                y1="30vh"
                                x2="80%"
                                y2="30vh"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="square"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                            />
                            <motion.line
                                x1="80%"
                                y1="30vh"
                                x2="80%"
                                y2="80vh"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="square"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                            />
                            <motion.line
                                x1="20%"
                                y1="30vh"
                                x2="20%"
                                y2="80vh"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="square"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                            />
                        </svg>
                    </div>
                </motion.div>
            }

        </div>
    );
};

export default Mob;

// const progressIcon: React.CSSProperties = {
//     transform: "translateX(-100px) rotate(-90deg)",
//     stroke: "#ff0088",
// }