import React from 'react';
import python from '../assets/python.svg';
import javascript from '../assets/js.svg';
import php from '../assets/php.svg';
import nodeJs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import tailwind from '../assets/tailwind.svg';
import linux from '../assets/linux.svg';
import bootstrap from '../assets/bootstrap.svg';
import mongodb from '../assets/mongodb.svg';
import mysql from '../assets/mysql.svg';
import kvm from '../assets/kvm.svg';
import virtuozzo from '../assets/virtuozzo.svg';
import proxmox from '../assets/proxmox.svg';
import canva from '../assets/canva.svg';
import photoshop from '../assets/photoshop.svg';
import coreldraw from '../assets/coreldraw.svg';
import premierpro from '../assets/premierpro.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
// importing png because i did not found the svg for winscp as well as for for beyond compare
import tortoisesvn from '../assets/tortoisesvn.png';
import winscp from '../assets/winscp.png';
import beyondcompare from '../assets/beyondcompare.png';
import putty from '../assets/putty.svg';
import powerbi from '../assets/powerbi.svg';
import tableau from '../assets/tableau.svg';
import hadoop from '../assets/hadoop.svg';
import numpy from '../assets/numpy.svg';
import pandas from '../assets/pandas.svg';
import matplotlib from '../assets/matplotlib.svg';
import scikitlearn from '../assets/scikitlearn.svg';
import tensorflow from '../assets/tensorflow.svg';
import aiml from '../assets/aiml.svg';
import SkillCard from './SkillCard';

const skillIcons = [python, javascript, php, nodeJs, react, html, css, tailwind, bootstrap, linux, mongodb, mysql, kvm, virtuozzo, proxmox, canva, photoshop, coreldraw, premierpro, tortoisesvn, git, github, winscp, beyondcompare, putty, powerbi, tableau, hadoop, numpy, pandas, matplotlib, scikitlearn, tensorflow, aiml];
const skillNames = ['Python', 'JavaScript', 'PHP', 'NodeJs', 'React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Linux', 'MongoDB', 'MySQL', 'KVM', 'Virtuozzo', 'Proxmox', 'Canva', 'Photoshop', 'CorelDraw', 'Premier Pro', 'TortoiseSVN', 'Git', 'GitHub', 'WinSCP', 'Compare', 'Putty', 'Power BI', 'Tableau', 'Hadoop', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'TensorFlow', 'AIML'];

const Skills = () => {
	return (
		<>
			<div className='skillsDiv'>
				{/* Developement Skills */}
				<div className='development'>
					<div className='lg:w-1/2 md:w-1/2'>
						<h3 className=''>Development Skills</h3>
						<hr className='my-2 border border-gray-500'></hr>
						<p className='developmentText'>
							' I am a passionate full-stack developer with expertise in technologies like Python, JavaScript, PHP, Node.js, and React. From building dynamic web applications to managing server infrastructure with Linux, Virtuozzo, and Proxmox, I love crafting scalable and efficient solutions. My skills extend to front-end development with HTML, CSS, Tailwind, and Bootstrap, ensuring modern and responsive designs. On the backend, I work with databases like MongoDB and MySQL, delivering data-driven applications. Always eager to learn and grow, I thrive on solving complex challenges and optimizing performance.'
						</p>
					</div>
					<div className='w-full mt-5 md:m-0 lg:m-0 md:w-1/2 lg:w-1/2 gap-4'>
						<div className='skillImg'>
							{skillIcons.slice(0, 15).map((icon, index) => (
								<SkillCard
									key={index}
									id={`skill-${index}`}
									title={skillNames[index]} 
									icon={icon} 
								/>
							))}
						</div>
					</div>
				</div>
				<hr className='skillDivBorder'></hr>
				<div className='developmentReverse'>
					<div className='lg:w-1/2 w-full'>
						<h3 className=''>Web & Graphic Design Skills</h3>
						<hr className='border my-2 border-gray-500'></hr>
						<p className='developmentText'>
							' I specialize in creating high-quality visuals using Canva for quick design mockups and social media content. For advanced image editing and retouching, I rely on Photoshop, ensuring precision and detail. CorelDRAW helps me with vector-based designs, making logos, illustrations, and branding elements sharp and scalable. When it comes to video editing, Premiere Pro allows me to produce smooth, professional-grade content. Combining these tools, I design engaging graphics, edit high-quality visuals, and enhance multimedia projects with efficiency and creativity.'
						</p>
					</div>
					<div className='lg:w-1/2 w-full'>
						<div className='skillImg'>
							{skillIcons.slice(15, 19).map((icon, index) => (
								<SkillCard 
									key={index + 15}
									id={`skill-${index + 15}`}
									title={skillNames[index + 15]}
									icon={icon} 
								/>
							))}
						</div>
					</div>
				</div>
				<hr className='skillDivBorder'></hr>
				<div className='development'>
					<div className='lg:w-1/2 w-full'>
						<h3 className=''>Development & Version Control</h3>
						<hr className='my-2 border border-gray-500'></hr>
						<p className='developmentText'>
							' I leverage Git and GitHub to ensure seamless version control, efficient branching strategies, and smooth collaboration across development teams. For projects requiring centralized version control, I utilize TortoiseSVN, simplifying repository management with an intuitive interface. When it comes to secure server access and remote management, I rely on PuTTY for SSH connections and WinSCP for file transfers, ensuring smooth deployment and maintenance. By integrating these tools, I streamline development workflows, enhance code stability, and maintain secure, well-organized project environments.'
						</p>
					</div>
					<div className='lg:w-1/2 w-full'>
						<div className='skillImg'>
							{skillIcons.slice(19, 25).map((icon, index) => (
								<SkillCard 
									key={index + 19}
									id={`skill-${index + 19}`}
									title={skillNames[index + 19]}
									icon={icon}
								/>
							))}
						</div>
					</div>
				</div>
				<hr className='skillDivBorder'></hr>
				<div className='developmentReverse'>
					<div className='lg:w-1/2 w-full'>
						<h3 className=''>Data Analytics & Big Data</h3>
						<hr className='border my-2 border-gray-500'></hr>
						<p className='developmentText'>
							' I leverage Power BI to transform raw data into interactive dashboards, enabling data-driven decision-making with real-time insights. With Tableau, I craft visually compelling reports, simplifying complex datasets into intuitive visualizations for deeper analysis. For handling large-scale data, I work with Hadoop, utilizing its distributed computing power to process massive datasets efficiently. By combining these tools, I ensure seamless data integration, visualization, and analysis, helping businesses uncover trends, optimize strategies, and make informed decisions.'
						</p>
					</div>
					<div className='lg:w-1/2 w-full'>
						<div className='skillImg'>
							{skillIcons.slice(25, 33).map((icon, index) => (
								<SkillCard
									key={index + 25}
									id={`skill-${index + 25}`}
								 	title={skillNames[index + 25]}
									icon={icon} 
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
