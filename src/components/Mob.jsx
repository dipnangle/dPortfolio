import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useAnimation, useMotionTemplate, useScroll } from "framer-motion";
import { none } from "@tsparticles/engine";

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

    const totalPoints = 10;
    const segmentHeight = 100;
    const { scrollYProgress } = useScroll();

    const lines = [];
    const blue_lines = [];
    const circlePoints = [];

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
                    transition={{ duration: 0.5 }}
                >
                    🎉 Animation Complete! This div is now visible.

                    <div className="relative w-full h-[1000vh] bg-sky-50/90 dark:bg-[#060d1e] flex items-center justify-center">
                        <motion.svg className="absolute top-0 left-0 w-full h-full">
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
                                    strokeLinecap="butt" // **Removes unwanted dots**
                                />
                            ))}

                            {/* Animated Blue Path */}

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
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    style={{ pathLength: line.progress, opacity: 1}}
                                    // style={{ pathLength: line.progress, opacity: (line.y1 <= line.y2 ? 0 : 1)}}
                                    transition={{ duration: 0.1 }}
                                />
                            ))}

                            {/* Station Points */}
                            {circlePoints.map((station, index) => (
                                <motion.circle
                                    key={index}
                                    cx={station.x}
                                    cy={station.y}
                                    r={"16"}
                                    whileHover={{ scale: 1.3 }}
                                    className={"fill-[#000]"}
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                />
                            ))}
                        </motion.svg>
                    </div>

                </motion.div>
            }

        </div>
    );
};

export default Mob;