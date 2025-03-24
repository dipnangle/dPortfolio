import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const timelineData = [
    { title: "Graduated in Engineering", details: "Completed Mechanical Engineering with a strong foundation.", icon: "bi bi-mortarboard-fill" },
    { title: "First Job in Mechanical Field", details: "Worked for 2.5 years in mechanical engineering, gaining industrial experience.", icon: "bi bi-briefcase-fill" },
    { title: "Transition to Web Development", details: "Started learning and working on web technologies like HTML, CSS, JS.", icon: "bi bi-code-slash" },
    { title: "Joined Softaculous", details: "Began working on Virtualizor, enhancing backend & frontend skills.", icon: "bi bi-laptop" },
    { title: "Started Master's in Data Science", details: "Pursuing further studies to deepen expertise in AI & Machine Learning.", icon: "bi bi-bar-chart-fill" }
];

export default function Mob() {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollY = window.scrollY;
                const sectionHeight = window.innerHeight;
                const newIndex = Math.min(
                    Math.max(Math.floor(scrollY / sectionHeight), 0),
                    timelineData.length - 1
                );
                setActiveIndex(newIndex);
                setScrollProgress(scrollY / (sectionHeight * (timelineData.length - 1)));
                setParallaxOffset(scrollY * 0.3);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center w-full h-[100vh*10] overflow-y-auto">
            {/* SVG Curved Path for Timeline */}
            <svg className="absolute left-1/3 w-1 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M50,0 C50,25 50,75 50,100" stroke="gray" strokeWidth="4" fill="none" className="transition-all duration-500" 
                    style={{ stroke: scrollProgress > 0 ? "blue" : "gray" }} />
            </svg>

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex items-center justify-center h-screen relative"
                >
                    {/* Milestone Dot & Icon */}
                    <div className="absolute left-1/3 transform -translate-x-1/2 flex flex-col items-center">
                        <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg">
                            <i className={item.icon}></i>
                        </div>
                    </div>
                    
                    {/* Title & Details */}
                    <motion.div 
                        className="w-full max-w-md flex items-center justify-between px-4"
                        style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
                    >
                        <div className="w-1/3 text-right pr-5 font-bold text-lg text-blue-600 dark:text-white">{item.title}</div>
                        <div className="w-2/3 pl-4 text-base text-gray-700 dark:text-gray-300">{item.details}</div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
