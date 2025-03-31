import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useAnimation, useMotionTemplate, useScroll } from "framer-motion";
import coder from '../assets/coder.png';
import codeGear from '../assets/codegear.gif';
import { React } from './Inc'

const Mob = () => {

	const count = useMotionValue(0)
	const rounded = useTransform(() => Math.round(count.get()))
	const percentageText = useMotionTemplate`${rounded}%`
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const controls = animate(count, 100, { duration: 1 })
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

	const journeyPathDetails = [
		{ id: 1, x1: "50%", y1: "0vh", x2: "50%", y2: "30vh", duration: 1, delay: 1 },
		{ id: 2, x1: "50%", y1: "30vh", x2: "10%", y2: "30vh", duration: 0.2, delay: 2 },
		{ id: 3, x1: "50%", y1: "30vh", x2: "90%", y2: "30vh", duration: 0.2, delay: 2 },
		{ id: 4, x1: "10%", y1: "30vh", x2: "10%", y2: "40vh", duration: 0.2, delay: 2.2 },
		{ id: 5, x1: "90%", y1: "30vh", x2: "90%", y2: "40vh", duration: 0.2, delay: 2.4 },
		{ id: 6, x1: "10%", y1: "40vh", x2: "50%", y2: "40vh", duration: 0.2, delay: 2.6 },
		{ id: 7, x1: "90%", y1: "40vh", x2: "50%", y2: "40vh", duration: 0.2, delay: 2.6 },
		{ id: 8, x1: "50%", y1: "40vh", x2: "50%", y2: "60vh", duration: 0.2, delay: 2.8 },
		{ id: 9, x1: "50%", y1: "60vh", x2: "10%", y2: "60vh", duration: 0.2, delay: 3 },
		{ id: 10, x1: "10%", y1: "60vh", x2: "10%", y2: "80vh", duration: 0.2, delay: 3.2 },
		{ id: 11, x1: "10%", y1: "80vh", x2: "90%", y2: "80vh", duration: 0.2, delay: 3.4 },
		{ id: 12, x1: "90%", y1: "80vh", x2: "90%", y2: "100vh", duration: 0.2, delay: 3.6 },
		{ id: 13, x1: "90%", y1: "100vh", x2: "10%", y2: "100vh", duration: 0.2, delay: 3.8 },
		{ id: 14, x1: "10%", y1: "100vh", x2: "10%", y2: "115vh", duration: 0.2, delay: 4 },
		{ id: 15, x1: "10%", y1: "115vh", x2: "50%", y2: "115vh", duration: 0.2, delay: 4.2 },
		{ id: 16, x1: "50%", y1: "115vh", x2: "50%", y2: "125vh", duration: 0.2, delay: 4.4 },
		{ id: 17, x1: "50%", y1: "125vh", x2: "10%", y2: "125vh", duration: 0.2, delay: 4.6 },
		{ id: 18, x1: "50%", y1: "125vh", x2: "90%", y2: "125vh", duration: 0.2, delay: 4.6 },
		{ id: 19, x1: "10%", y1: "125vh", x2: "10%", y2: "175vh", duration: 0.2, delay: 4.8 },
		{ id: 20, x1: "90%", y1: "125vh", x2: "90%", y2: "175vh", duration: 0.2, delay: 4.8 },
		{ id: 21, x1: "10%", y1: "175vh", x2: "50%", y2: "175vh", duration: 0.2, delay: 5 },
		{ id: 22, x1: "90%", y1: "175vh", x2: "50%", y2: "175vh", duration: 0.2, delay: 5 },
		{ id: 23, x1: "50%", y1: "175vh", x2: "50%", y2: "185vh", duration: 0.2, delay: 5.2 },
		{ id: 24, x1: "30%", y1: "185vh", x2: "50%", y2: "185vh", duration: 0.2, delay: 5.4 },
		{ id: 25, x1: "30%", y1: "185vh", x2: "30%", y2: "200vh", duration: 0.2, delay: 5.6 },
		{ id: 26, x1: "30%", y1: "200vh", x2: "70%", y2: "200vh", duration: 0.2, delay: 5.8 },
		{ id: 27, x1: "70%", y1: "200vh", x2: "70%", y2: "215vh", duration: 0.2, delay: 6 },
		{ id: 28, x1: "70%", y1: "215vh", x2: "50%", y2: "215vh", duration: 0.2, delay: 6.2 },
		{ id: 29, x1: "50%", y1: "215vh", x2: "50%", y2: "225vh", duration: 0.2, delay: 6.4 },
		{ id: 30, x1: "50%", y1: "225vh", x2: "10%", y2: "225vh", duration: 0.2, delay: 6.6 },
		{ id: 31, x1: "50%", y1: "225vh", x2: "90%", y2: "225vh", duration: 0.2, delay: 6.6 },
		{ id: 32, x1: "10%", y1: "225vh", x2: "10%", y2: "280vh", duration: 0.2, delay: 6.8 },
		{ id: 33, x1: "90%", y1: "225vh", x2: "90%", y2: "280vh", duration: 0.2, delay: 6.8 },
		{ id: 34, x1: "10%", y1: "280vh", x2: "50%", y2: "280vh", duration: 0.2, delay: 7 },
		{ id: 35, x1: "90%", y1: "280vh", x2: "50%", y2: "280vh", duration: 0.2, delay: 7 },
		{ id: 36, x1: "50%", y1: "280vh", x2: "50%", y2: "295vh", duration: 0.2, delay: 7.2 },
		{ id: 37, x1: "50%", y1: "295vh", x2: "25%", y2: "295vh", duration: 0.2, delay: 7.4 },
		{ id: 38, x1: "25%", y1: "295vh", x2: "25%", y2: "315vh", duration: 0.2, delay: 7.6 },
		{ id: 39, x1: "25%", y1: "315vh", x2: "90%", y2: "315vh", duration: 0.2, delay: 7.8 },
		{ id: 40, x1: "90%", y1: "315vh", x2: "90%", y2: "350vh", duration: 0.2, delay: 8 },
		{ id: 41, x1: "90%", y1: "350vh", x2: "10%", y2: "350vh", duration: 0.2, delay: 8.2 },
		{ id: 42, x1: "10%", y1: "350vh", x2: "10%", y2: "360vh", duration: 0.2, delay: 8.4 },
		{ id: 43, x1: "10%", y1: "360vh", x2: "50%", y2: "360vh", duration: 0.2, delay: 8.6 },
		{ id: 44, x1: "50%", y1: "360vh", x2: "50%", y2: "365vh", duration: 0.2, delay: 8.8 },
		{ id: 45, x1: "50%", y1: "365vh", x2: "10%", y2: "365vh", duration: 0.2, delay: 9 },
		{ id: 46, x1: "50%", y1: "365vh", x2: "90%", y2: "365vh", duration: 0.2, delay: 9 },
		{ id: 47, x1: "10%", y1: "365vh", x2: "10%", y2: "400vh", duration: 0.2, delay: 9.2 },
		{ id: 48, x1: "90%", y1: "365vh", x2: "90%", y2: "400vh", duration: 0.2, delay: 9.2 },
		{ id: 49, x1: "10%", y1: "400vh", x2: "60%", y2: "400vh", duration: 0.2, delay: 9.4 },
		{ id: 50, x1: "90%", y1: "400vh", x2: "60%", y2: "400vh", duration: 0.2, delay: 9.4 },
		{ id: 51, x1: "60%", y1: "400vh", x2: "60%", y2: "415vh", duration: 0.2, delay: 9.6 },
		{ id: 52, x1: "60%", y1: "415vh", x2: "10%", y2: "415vh", duration: 0.2, delay: 9.8 },
		{ id: 53, x1: "10%", y1: "415vh", x2: "10%", y2: "430vh", duration: 0.2, delay: 10 },
		{ id: 54, x1: "10%", y1: "430vh", x2: "90%", y2: "430vh", duration: 0.2, delay: 10.2 },
		{ id: 55, x1: "90%", y1: "430vh", x2: "90%", y2: "455vh", duration: 0.2, delay: 10.4 },
		{ id: 56, x1: "90%", y1: "455vh", x2: "10%", y2: "455vh", duration: 0.2, delay: 10.6 },
		{ id: 57, x1: "10%", y1: "455vh", x2: "10%", y2: "480vh", duration: 0.2, delay: 10.8 },
		{ id: 58, x1: "10%", y1: "480vh", x2: "90%", y2: "480vh", duration: 0.2, delay: 11 },
		{ id: 59, x1: "90%", y1: "480vh", x2: "90%", y2: "495vh", duration: 0.2, delay: 11.2 },
		{ id: 60, x1: "90%", y1: "495vh", x2: "90%", y2: "495vh", duration: 0.2, delay: 11.2 },
		{ id: 61, x1: "90%", y1: "495vh", x2: "50%", y2: "495vh", duration: 0.2, delay: 11.4 },
		{ id: 62, x1: "50%", y1: "495vh", x2: "50%", y2: "500vh", duration: 0.2, delay: 11.6 },
		{ id: 63, x1: "50%", y1: "500vh", duration: 0.5, delay: 2 , end: true },
	];

	return (
		<div className="w-full space-y-4 dark:bg-[#060d1e] bg-sky-50/90 overflow-hidden">
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
										transform="rotate(90 50 50)"
									/>
								</svg>
								{/* Centered Image */}
								<img src={coder} alt="boy_coding" className="w-full h-full object-cover absolute" />
							</div>
						</div>
					</div>
					<div className="relative flex flex-col items-center w-full h-[510vh]">
						<svg className="absolute w-full h-full">
							{journeyPathDetails.map((line) => (
								line.end ? <motion.circle
									cx = {line.x1}
									cy = {line.y1}
									r = {"18"}
									className={`fill-black dark:fill-white`}
								/> :
								<motion.line
									key={line.id}
									id={`line-${line.id}`}
									x1={line.x1}
									y1={line.y1}
									x2={line.x2}
									y2={line.y2}
									strokeWidth="4"
									strokeLinecap="round"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 1 }}
									transition={{ duration: line.duration, ease: "easeInOut", delay: line.delay }}
									className="dark:stroke-white stroke-black"
								/>

							))}
						</svg>
						<div className="absolute top-[31.5vh] text-xl text-center textColor ">
							Welcome To My Journey
							<motion.span
								animate={{ rotate: [0, 25, 0, -25, 0] }} // Natural waving motion
								transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
								style={{ display: "inline-block", transformOrigin: "bottom center" }} // Fix pivot point
								className="text-4xl"
							>
								👋
							</motion.span>
						</div>
						<div className='text-left'>
							<div className='absolute top-[60vh] left-[10%] ml-2 text-lg dark:text-white translate-y-[-110%] mr-2 '>
								SSC | <a href='https://shailendradegreecollege.in/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
							</div>
							<div className='absolute top-[60vh] left-[10%] ml-2 text-sm text-gray-500 translate-y-[10%] mr-2'>
								Shailendra Education Society,<br/> Mumbai (2006-2013) | 83.09%
							</div>
						</div>
						<div className='text-right'>
							<div className='absolute top-[80vh] right-[10%] mr-2 text-lg dark:text-white translate-y-[-110%] '>
								Diploma in Engineering | <a href='https://www.prppolytechnic.com/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
							</div>
							<div className='absolute top-[80vh] right-[10%] mr-2 text-sm text-gray-500 translate-y-[10%] font-poppins'>
								PRP College,<br/> Mumbai (2013-2016) | 76.53%
							</div>
						</div>
						<div className=''>
							<div className='absolute top-[100vh] left-[10%] ml-2 text-lg dark:text-white translate-y-[-110%] '>
								Bachelor of Engineering | <a href='https://www.viva-technology.org/New/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
							</div>
							<div className='absolute top-[100vh] left-[10%] ml-2 text-sm text-gray-500 translate-y-[10%] font-poppins'>
								VIT College,<br/> Mumbai (2016-2019) | 7.31 CGPI
							</div>
						</div>
						<svg
							className="absolute right-[10%] w-12 top-[125vh] translate-y-[-100%] dark:fill-white fill-black"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 246"
							xml:space="preserve"
						>
							<g strokeWidth="0" />
							<g strokeLinecap="round" strokeLinejoin="round" />
							<path d="M254 150.588v93.343H53.545v-31.916h64.591v-28.727h60.744v-32.7zM113.175 18.875c0 9.282 7.524 16.806 16.806 16.806s16.806-7.524 16.806-16.806-7.524-16.806-16.806-16.806-16.806 7.524-16.806 16.806m76.74 81.295c-1.62 3.746-6.074 5.264-9.82 3.543l-31.182-14.68c-1.822-.81-3.341-2.43-3.948-4.353L139.7 69.798l-7.289 36.463 24.593.506c5.264.101 9.415 4.556 9.314 9.82l-1.316 50.999c-.101 5.264-4.454 9.415-9.618 9.415h-.203c-5.366-.101-9.516-4.556-9.415-9.82l1.114-41.483-30.668-.709-7.087 35.113c-.304 1.417-.911 2.936-1.721 4.151L81.18 201.974c-3.341 4.859-9.82 5.872-14.68 2.531-4.758-3.341-5.872-9.82-2.43-14.579l24.908-35.494 15.963-90.455-31.758 29.328a7.2 7.2 0 0 1-1.823 1.224l2.972 2.972-8.68 8.68 14.466 14.466-11.573 11.573-46.292-46.293 11.573-11.573L48.292 88.82l8.68-8.68 4.843 4.842a7.2 7.2 0 0 1 1.553-2.164l39.78-37.769c5.25-4.518 13.672-7.244 20.962-6.029l6.884 1.316c9.213 1.62 16.299 7.897 19.236 16.097l7.492 20.552 28.448 13.364c3.745 1.621 5.365 6.075 3.745 9.821M67.099 97.501 56.972 87.374l-5.063 5.063 10.127 10.127zm-10.127 28.932-2.893 2.893-5.786-5.787 2.893-2.893-17.36-17.36-2.893 2.893-5.787-5.787 2.893-2.893-8.68-8.68L2 106.18l46.293 46.293 17.36-17.36z" />
						</svg>
						<div className='absolute top-[125vh] left-[12%] text-lg dark:text-white translate-y-[0%] w-1/2'>
							<div className='mt-1'>
								Design engineer | <a href='https://www.lithotechfoodspicemachinery.com/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
								<hr className="border-gray-600"></hr>
							</div>
							<div className='text-sm text-gray-500 font-poppins'>
								Lithotech Food, Mumbai (2019-2021)
							</div>
						</div>
						<div className='absolute top-[175vh] right-[12%] text-right text-lg dark:text-white translate-y-[-110%] w-1/2'>
							<div className=''>
								Design engineer | <a href='http://ggtpl.com/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
								<hr className="border-gray-600"></hr>
							</div>
							<div className='text-sm mb-1 text-gray-500 font-poppins ml-auto'>
								Grade & Grind Technologies, Mumbai (2019-2021)
							</div>
						</div>
						<div className="absolute top-[150vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg dark:text-white">
							<img src={codeGear} width="85" alt="Animation" />
						</div>
						<div className="absolute top-[190vh] left-[30%] flex dark:text-white items-center">
							<i className="bi bi-file-earmark-code text-2xl translate-x-[-3rem]"></i>
							<div className="translate-x-[0.5rem] text-lg ">
								Coding Start
							</div>
						</div>
						<div className="absolute top-[200vh] left-[30%] dark:text-white text-2xl mt-1 translate-y-[-100%]">
							<i class="bi bi-graph-up-arrow"></i>
						</div>
						<div className="absolute top-[206vh] right-[30%] flex items-center dark:text-white text-black text-lg ">
							backend and database
							<div className="translate-x-[3rem]">
								<i className='bi bi-filetype-py text-2xl'></i>
							</div>
						</div>
						<div className='absolute top-[227vh] text-center dark:text-white text-lg'>
							Softaculous.ltd | <a href='https://www.softaculous.com/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
							<hr className="border-gray-600"></hr>
						</div>
						<div className='absolute top-[231vh] justify-center flex text-justify w-2/3 text-gray-500 text-sm'>
							After months of self-learning, I secured a Software Development Engineer role at Softaculous.Ltd, marking my transition to professional development. They valued my skills and problem-solving abilities over formal qualification. Working on real-world applications, I improved my understanding of software. This experience strengthened my passion for software engineering and set a strong foundation for my growth in the tech industry.
						</div>
						<div className='absolute top-[305vh] dark:text-white translate-y-[-50%] left-[30%] translate-x-[-5.5rem] text-3xl'>
							<i className='bi bi-mortarboard'></i>
						</div>
						<div className='absolute top-[305vh] dark:text-white left-[30%] translate-y-[-50%] translate-x-[0.5rem] text-lg'>
							<span>
								M.Sc <a className='text-sm text-blue-500' href='https://mu.ac.in/' target='_blank'>(Data Science)</a>
								<hr className='broder-gray-500'></hr>
							</span>
							<span className='text-sm text-gray-500'>
								University Of Mumbai <br />(2023-2025)
							</span>
						</div>
						<div className='absolute top-[333vh] w-2/3 dark:text-white translate-y-[-50%] text-lg'>
							<div>
								Softaculous | <a className='text-sm text-blue-500' href='https://www.virtualizor.com/' target='_blank'>Virtualizor</a>
								<hr className='broder-gray-500'></hr>
							</div>
							<div className='text-sm text-gray-500 text-justify'>
								At Softaculous, I worked with Virtualizor, gaining experience in KVM, Virtuozzo, and Proxmox while managing VMs. I optimized backend performance using shell scripting and deepened my Linux and networking skills. I also authored technical blogs, sharing insights on virtualization and automation.
							</div>
						</div>
						<div className='absolute top-[365vh] w-2/3 dark:text-white translate-y-[7%]'>
							<div className='text-center text-lg'>
								M.Sc
								<hr className='broder-gray-500'></hr>
							</div>
							<div className='text-sm text-gray-500 text-justify'>
							As I near the completion of my MSc in Data Science at Mumbai University <span className='font-semibold'>(Last SEM Remaining)</span>, I have gained expertise in machine learning, AI, and data analytics, along with strong skills in data visualization and statistical methods. This journey has strengthened my technical proficiency and adaptability in the evolving field of data science.
							</div>
						</div>
						<div className='absolute top-[415vh] left-[10%] dark:text-white transform translate-y-[-120%] ml-2'>
							Data Visualization | <a href='https://github.com/dipnangle/PowerBI-Dashboards'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
						</div>
						<div className='absolute top-[415vh] left-[10%] text-sm text-gray-500 transform translate-y-[10%] ml-2 text-left'>
							Used Power BI & Tableau Dashboards,<br/> shared on GitHub
						</div>
						<div className='absolute top-[430vh] right-[10%] dark:text-white transform translate-y-[-120%] translate-x-[-10px]'>
							Data Engineering Exploration
						</div>
						<div className='absolute top-[430vh] right-[10%] text-sm text-gray-500 transform translate-y-[10%] w-1/2 translate-x-[-10px] text-justify'>
							Explored Hadoop, HBase & Hive for big data processing, optimizing queries & managing large-scale datasets.
						</div>
						<div className='absolute top-[455vh] left-[10%] dark:text-white transform translate-y-[-120%] translate-x-[10px]'>
							Community and Blogging | <a href='https://www.virtualizor.com/blog/author/dipesh/'><i class="text-blue-500 text-xs bi bi-box-arrow-up-right"></i></a>
						</div>
						<div className='absolute top-[455vh] left-[10%] text-sm text-gray-500 transform translate-y-[10%] w-1/2 translate-x-[10px] text-justify'>
							Sharing tech insights via blogs & forums to foster learning and community engagement.
						</div>
						<div className='absolute top-[480vh] right-[10%] dark:text-white transform translate-y-[-120%] translate-x-[-10px]'>
							Leadership in Tech Initiatives
						</div>
						<div className='absolute top-[480vh] right-[10%] text-sm text-gray-500 transform translate-y-[10%] w-1/2 translate-x-[-10px] text-justify'>
							Aiming for leadership in tech, mentoring peers, leading hackathons, and driving innovation.
						</div>
						<div className='absolute top-[500vh] text-white dark:text-black text-xl transform translate-y-[-50%]'>
							<i class="bi bi-globe-central-south-asia"></i>
						</div>
					</div>
				</motion.div>
			}

		</div>
	);
};

export default Mob;