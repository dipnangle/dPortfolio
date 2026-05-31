// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';

// /* ─── Data ─────────────────────────────────────────────────────────────── */

// const personalProjects = [
// 	{
// 		title: 'CRM Platform',
// 		description: 'Production multi-tenant CRM with 16 modules — Leads, Deals pipeline, Tasks, Calendar, Team Board, and Reports. Features 6-role RBAC, dual-mode JWT auth with 2FA, async notification pipeline via Celery, and S3-integrated database backups.',
// 		liveUrl: 'https://crm.dipnangle.com',
// 		githubUrl: null,
// 		tech: ['Django', 'DRF', 'React', 'PostgreSQL', 'Redis', 'Celery'],
// 		status: 'Live',
// 	},
// 	{
// 		title: 'AeroWell',
// 		description: 'Predictive analytics platform for air quality and respiratory health risk. XGBoost and Random Forest models achieving 87% accuracy, processing 10,000+ real-time data points daily with live visualization dashboards.',
// 		liveUrl: 'https://aerowell.dipnangle.com',
// 		githubUrl: null,
// 		tech: ['Python', 'XGBoost', 'Random Forest', 'scikit-learn', 'REST API'],
// 		status: 'Live',
// 	},
// 	{
// 		title: 'Portfolio',
// 		description: 'This portfolio — built with React and Vite. Features a metro-map journey visualization, dark/light theme with localStorage persistence, animated skill cards, and lazy-loaded routes.',
// 		liveUrl: 'https://dipnangle.com',
// 		githubUrl: 'https://github.com/dipnangle',
// 		tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
// 		status: 'Live',
// 	},
// ];

// const clientWebsites = [
// 	{
// 		title: 'Indocom Solutions',
// 		description: 'Business website for a DSA loan services firm partnered with leading Banks & NBFCs. Includes loan product pages, EMI Calculator, Eligibility Checker, and WhatsApp contact integration.',
// 		liveUrl: 'https://indocom.dipnangle.com',
// 		githubUrl: null,
// 		tech: ['React', 'Tailwind CSS', 'Vite'],
// 		status: 'Live',
// 	},
// 	{
// 		title: 'Transtechnix Engineering',
// 		description: 'Corporate website for an industrial grinding plant engineering firm. Showcases turnkey grinding solutions for spice, pharmaceutical, food, and chemical processing industries.',
// 		liveUrl: 'https://transtechnix.dipnangle.com',
// 		githubUrl: null,
// 		tech: ['React', 'Tailwind CSS', 'Vite'],
// 		status: 'Live',
// 	},
// 	{
// 		title: 'Swami Samarth Packing',
// 		description: 'Corporate website for a UN certified dangerous goods (DG) packaging company. Specialises in 4G/4GV certified industrial packaging solutions with expert logistics support for safe hazardous material shipping.',
// 		liveUrl: null,
// 		githubUrl: null,
// 		tech: ['React', 'Tailwind CSS', 'Vite'],
// 		status: 'In Development',
// 	},
// ];

// const blogs = [
// 	{
// 		title: 'Virtualizor 3.2.9 Launched',
// 		url: 'https://www.virtualizor.com/blog/virtualizor-3-2-9-launched/',
// 		date: 'May 2026',
// 		summary: 'Full Virtual Private Cloud (VPC) networking support, baremetal server management, secure LDAP authentication, and various networking fixes.',
// 	},
// 	{
// 		title: 'Virtualizor 3.2.6 RC Patch 1',
// 		url: 'https://www.virtualizor.com/blog/virtualizor-3-2-6-release-candidate-patch-1/',
// 		date: 'Sep 2025',
// 		summary: 'Bug fixes for WHMCS KYC errors and IP pool selection, plus new backup task retry functionality and firewall cloning support.',
// 	},
// 	{
// 		title: 'Virtualizor 3.2.6',
// 		url: 'https://www.virtualizor.com/blog/virtualizor-3-2-6/',
// 		date: 'Sep 2025',
// 		summary: 'Nine-patch release featuring a Cloud Setup Wizard for self-service portal setup, improved backup capabilities, and dashboard bug fixes.',
// 	},
// 	{
// 		title: 'Admin ACL',
// 		url: 'https://www.virtualizor.com/blog/admin-acl/',
// 		date: 'Mar 2025',
// 		summary: 'Access Control List feature letting root users define granular admin panel permissions with structured categories and subcategories.',
// 	},
// 	{
// 		title: 'CPU Threshold',
// 		url: 'https://www.virtualizor.com/blog/cpu-threshold-virtualizor/',
// 		date: 'Jul 2023',
// 		summary: 'New feature enabling administrators to set maximum CPU usage limits per VPS, with automatic suspension of instances that exceed thresholds.',
// 	},
// ];

// /* ─── Project Card ──────────────────────────────────────────────────────── */

// const ProjectCard = ({ project, index }) => {
// 	const [imgError, setImgError] = useState(false);
// 	const isInDev = project.status === 'In Development';
// 	const screenshotUrl = !isInDev && project.liveUrl
// 		? `https://image.thum.io/get/width/600/crop/380/${project.liveUrl}`
// 		: null;

// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 20 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.4, delay: index * 0.08 }}
// 			className="group flex flex-col h-full rounded-xl overflow-hidden bg-white dark:bg-[#0d1526] border border-gray-200 dark:border-gray-800/80 shadow-sm hover:shadow-lg dark:hover:shadow-blue-950/40 hover:-translate-y-1 transition-all duration-300"
// 		>
// 			{/* Screenshot */}
// 			<div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#080f1e] shrink-0">
// 				{isInDev ? (
// 					<div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-amber-50 dark:bg-[#120d00]">
// 						<div className="w-11 h-11 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// 								<path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
// 							</svg>
// 						</div>
// 						<p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase">Under Construction</p>
// 					</div>
// 				) : !imgError && screenshotUrl ? (
// 					<>
// 						<img
// 							src={screenshotUrl}
// 							alt={project.title}
// 							className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
// 							onError={() => setImgError(true)}
// 						/>
// 						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
// 					</>
// 				) : (
// 					<div className="w-full h-full flex items-center justify-center">
// 						<span className="text-6xl font-black text-gray-200 dark:text-gray-800/60 select-none">
// 							{project.title.charAt(0)}
// 						</span>
// 					</div>
// 				)}

// 				{/* Status badge */}
// 				<div className="absolute top-3 right-3">
// 					{project.status === 'Live' ? (
// 						<span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
// 							<span className="relative flex h-1.5 w-1.5">
// 								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
// 								<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
// 							</span>
// 							Live
// 						</span>
// 					) : (
// 						<span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
// 							In Dev
// 						</span>
// 					)}
// 				</div>
// 			</div>

// 			{/* Content */}
// 			<div className="flex flex-col flex-1 p-5 gap-3">
// 				<h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
// 					{project.title}
// 				</h3>

// 				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
// 					{project.description}
// 				</p>

// 				<div className="flex flex-wrap gap-1.5">
// 					{project.tech.map((t) => (
// 						<span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700/60">
// 							{t}
// 						</span>
// 					))}
// 				</div>

// 				<div className="flex items-center gap-2 pt-1">
// 					{isInDev ? (
// 						<span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700/60 cursor-default select-none">
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// 								<path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// 							</svg>
// 							Coming Soon
// 						</span>
// 					) : project.liveUrl ? (
// 						<a
// 							href={project.liveUrl}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white transition-all duration-150 shadow-sm"
// 						>
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// 								<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// 							</svg>
// 							Live Site
// 						</a>
// 					) : null}
// 					{project.githubUrl && (
// 						<a
// 							href={project.githubUrl}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							title="GitHub"
// 							className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150"
// 						>
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
// 								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
// 							</svg>
// 						</a>
// 					)}
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// };

// /* ─── Section Header ────────────────────────────────────────────────────── */

// const SectionHeader = ({ label, title, count }) => (
// 	<motion.div
// 		initial={{ opacity: 0, x: -16 }}
// 		whileInView={{ opacity: 1, x: 0 }}
// 		viewport={{ once: true }}
// 		transition={{ duration: 0.4 }}
// 		className="flex items-end justify-between mb-7"
// 	>
// 		<div>
// 			<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400 mb-1.5">{label}</p>
// 			<h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{title}</h2>
// 		</div>
// 		<span className="text-xs font-bold text-gray-400 dark:text-gray-600 tabular-nums mb-1">{count} projects</span>
// 	</motion.div>
// );

// /* ─── Blog Marquee ──────────────────────────────────────────────────────── */

// const BlogMarquee = ({ items }) => {
// 	const duplicated = [...items, ...items, ...items];
// 	const trackRef = useRef(null);

// 	const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
// 	const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

// 	return (
// 		<>
// 			<style>{`
// 				@keyframes marquee-scroll {
// 					from { transform: translateX(0); }
// 					to   { transform: translateX(calc(-100% / 3)); }
// 				}
// 				.marquee-track {
// 					animation: marquee-scroll 45s linear infinite;
// 					will-change: transform;
// 				}
// 			`}</style>

// 			<div
// 				className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
// 				onMouseEnter={pause}
// 				onMouseLeave={resume}
// 			>
// 				<div ref={trackRef} className="marquee-track flex gap-5 w-max">
// 					{duplicated.map((blog, i) => (
// 						<a
// 							key={i}
// 							href={blog.url}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="group flex flex-col w-72 shrink-0 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1526] hover:border-violet-400/50 dark:hover:border-violet-600/50 hover:shadow-lg dark:hover:shadow-violet-950/30 transition-all duration-300"
// 						>
// 							<div className="flex items-center justify-between mb-3">
// 								<span className="text-[9px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/50 px-2 py-0.5 rounded-full">
// 									Virtualizor Blog
// 								</span>
// 								<span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 tabular-nums">{blog.date}</span>
// 							</div>
// 							<h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2 leading-snug line-clamp-2">
// 								{blog.title}
// 							</h4>
// 							<p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-3">
// 								{blog.summary}
// 							</p>
// 							<span className="flex items-center gap-1 text-[11px] font-bold text-violet-600 dark:text-violet-400">
// 								Read Article
// 								<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
// 									<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
// 								</svg>
// 							</span>
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// /* ─── Page ──────────────────────────────────────────────────────────────── */

// const Projects = () => (
// 	<div className="w-full min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-[#060d1e] transition-colors duration-300">
// 		<div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">

// 			{/* Page header */}
// 			<motion.div
// 				initial={{ opacity: 0, y: -16 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.45 }}
// 				className="mb-14"
// 			>
// 				<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400 mb-2">Portfolio</p>
// 				<h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
// 					Projects & Writing
// 				</h1>
// 				<p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
// 					Personal builds, client websites I've shipped, and technical articles published on the Virtualizor blog.
// 				</p>
// 			</motion.div>

// 			{/* ── Personal Projects ── */}
// 			<section className="mb-14">
// 				<SectionHeader label="01 — Personal" title="Personal Projects" count={personalProjects.length} />
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// 					{personalProjects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
// 				</div>
// 			</section>

// 			<div className="h-px bg-gray-200 dark:bg-gray-800/80 mb-14" />

// 			{/* ── Client Websites ── */}
// 			<section className="mb-14">
// 				<SectionHeader label="02 — Client Work" title="Client Websites" count={clientWebsites.length} />
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// 					{clientWebsites.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
// 				</div>
// 			</section>

// 			<div className="h-px bg-gray-200 dark:bg-gray-800/80 mb-14" />

// 			{/* ── Blog Carousel ── */}
// 			<section className="mb-14">
// 				<motion.div
// 					initial={{ opacity: 0, x: -16 }}
// 					whileInView={{ opacity: 1, x: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.4 }}
// 					className="flex items-end justify-between mb-7"
// 				>
// 					<div>
// 						<p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400 mb-1.5">03 — Writing</p>
// 						<h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Blog Posts</h2>
// 					</div>
// 					<a
// 						href="https://www.virtualizor.com/blog/author/dipesh/"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline mb-1"
// 					>
// 						View all
// 						<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// 							<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// 						</svg>
// 					</a>
// 				</motion.div>
// 				<BlogMarquee items={blogs} />
// 			</section>

// 			{/* Footer strip */}
// 			<div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
// 				<div>
// 					<p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0.5">Want to see more?</p>
// 					<p className="text-xs text-gray-500 dark:text-gray-500">Follow my GitHub or read the full Virtualizor blog.</p>
// 				</div>
// 				<div className="flex gap-3">
// 					<a
// 						href="https://github.com/dipnangle"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold hover:opacity-90 active:scale-95 transition-all"
// 					>
// 						<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
// 							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
// 						</svg>
// 						GitHub
// 					</a>
// 					<a
// 						href="https://www.virtualizor.com/blog/author/dipesh/"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all"
// 					>
// 						Blog Profile
// 					</a>
// 				</div>
// 			</div>

// 		</div>
// 	</div>
// );

// export default Projects;

// import React from 'react';
// import { motion } from 'framer-motion';

// /* ────────────────────────────────────────────────────────────────
//    DATA
// ──────────────────────────────────────────────────────────────── */

// const featuredProjects = [
// 	{
// 		title: 'CRM Platform',
// 		category: 'Featured Self Hosted Platform',
// 		description:
// 			'Production-grade multi-tenant CRM platform designed for scalable business operations, workflow automation, and role-based team management.',
// 		metrics: [
// 			'16 production modules',
// 			'6-role RBAC system',
// 			'JWT auth + 2FA security',
// 			'Async task pipeline with Celery',
// 			'S3-integrated database backups',
// 		],
// 		tech: ['React', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery'],
// 		liveUrl: 'https://crm.dipnangle.com',
// 	},
// 	{
// 		title: 'AeroWell',
// 		category: 'Machine Learning Platform',
// 		description:
// 			'Predictive analytics platform focused on respiratory health and air quality forecasting using machine learning pipelines and realtime data processing.',
// 		metrics: [
// 			'87% prediction accuracy',
// 			'10,000+ realtime datapoints daily',
// 			'Live visualization dashboards',
// 			'ML models using XGBoost & RF',
// 			'REST API powered architecture',
// 		],
// 		tech: ['Python', 'XGBoost', 'Random Forest', 'scikit-learn', 'REST API'],
// 		liveUrl: 'https://aerowell.dipnangle.com',
// 	},
// ];

// const clientProjects = [
// 	{
// 		title: 'Indocom Solutions',
// 		description:
// 			'Corporate loan services website with EMI calculator, eligibility tools, and customer lead generation workflows.',
// 		stack: ['React', 'Tailwind', 'Vite'],
// 		url: 'https://indocom.dipnangle.com',
// 	},
// 	{
// 		title: 'Transtechnix Engineering',
// 		description:
// 			'Industrial engineering website showcasing turnkey grinding solutions for manufacturing industries.',
// 		stack: ['React', 'Tailwind', 'Vite'],
// 		url: 'https://transtechnix.dipnangle.com',
// 	},
// 	{
// 		title: 'Swami Samarth Packing',
// 		description:
// 			'Corporate website for dangerous goods packaging and industrial logistics solutions.',
// 		stack: ['React', 'Tailwind', 'Vite'],
// 		url: null,
// 	},
// ];

// const writings = [
// 	{
// 		title: 'Virtualizor 3.2.9 Launched',
// 		date: 'May 2026',
// 		url: 'https://www.virtualizor.com/blog/virtualizor-3-2-9-launched/',
// 	},
// 	{
// 		title: 'Admin ACL',
// 		date: 'Mar 2025',
// 		url: 'https://www.virtualizor.com/blog/admin-acl/',
// 	},
// 	{
// 		title: 'CPU Threshold',
// 		date: 'Jul 2023',
// 		url: 'https://www.virtualizor.com/blog/cpu-threshold-virtualizor/',
// 	},
// ];

// /* ────────────────────────────────────────────────────────────────
//    SECTION LABEL
// ──────────────────────────────────────────────────────────────── */

// const SectionLabel = ({ number, title }) => (
// 	<div className="mb-10">
// 		<p className="text-sm font-medium text-blue-500 mb-3">
// 			{number}
// 		</p>

// 		<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-tight">
// 			{title}
// 		</h2>
// 	</div>
// );

// /* ────────────────────────────────────────────────────────────────
//    FEATURED PROJECT
// ──────────────────────────────────────────────────────────────── */

// const FeaturedProject = ({ project, reverse = false }) => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 30 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.5 }}
// 			className={`grid lg:grid-cols-2 gap-14 items-center ${
// 				reverse ? 'lg:[&>*:first-child]:order-2' : ''
// 			}`}
// 		>
// 			{/* VISUAL */}
// 			<div className="relative">
// 				<div className="aspect-[16/10] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0b1120] shadow-2xl">
// 					<img
// 						src={`https://image.thum.io/get/width/1200/crop/800/${project.liveUrl}`}
// 						alt={project.title}
// 						className="w-full h-full object-cover object-top"
// 					/>
// 				</div>

// 				<div className="absolute -bottom-6 left-6 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 shadow-xl">
// 					<p className="text-xs text-gray-500 mb-1">
// 						Tech Stack
// 					</p>

// 					<div className="flex flex-wrap gap-2">
// 						{project.tech.map((item) => (
// 							<span
// 								key={item}
// 								className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
// 							>
// 								{item}
// 							</span>
// 						))}
// 					</div>
// 				</div>
// 			</div>

// 			{/* CONTENT */}
// 			<div>
// 				<p className="text-sm font-medium text-blue-500 mb-4">
// 					{project.category}
// 				</p>

// 				<h3 className="text-4xl font-bold text-black dark:text-white mb-6">
// 					{project.title}
// 				</h3>

// 				<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
// 					{project.description}
// 				</p>

// 				<div className="space-y-4 mb-10">
// 					{project.metrics.map((metric) => (
// 						<div
// 							key={metric}
// 							className="flex items-start gap-3"
// 						>
// 							<div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />

// 							<p className="text-gray-700 dark:text-gray-300">
// 								{metric}
// 							</p>
// 						</div>
// 					))}
// 				</div>

// 				<a
// 					href={project.liveUrl}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-[1.02] transition-transform"
// 				>
// 					View Project

// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						className="h-4 w-4"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						stroke="currentColor"
// 						strokeWidth={2}
// 					>
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M14 5l7 7m0 0l-7 7m7-7H3"
// 						/>
// 					</svg>
// 				</a>
// 			</div>
// 		</motion.div>
// 	);
// };

// /* ────────────────────────────────────────────────────────────────
//    CLIENT CARD
// ──────────────────────────────────────────────────────────────── */

// const ClientCard = ({ item }) => (
// 	<div className="border border-gray-200 dark:border-gray-800 rounded-3xl p-8 bg-white dark:bg-[#0b1120]">
// 		<h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
// 			{item.title}
// 		</h3>

// 		<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
// 			{item.description}
// 		</p>

// 		<div className="flex flex-wrap gap-2 mb-8">
// 			{item.stack.map((tech) => (
// 				<span
// 					key={tech}
// 					className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
// 				>
// 					{tech}
// 				</span>
// 			))}
// 		</div>

// 		{item.url ? (
// 			<a
// 				href={item.url}
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className="text-sm font-medium text-blue-500 hover:underline"
// 			>
// 				Visit Website →
// 			</a>
// 		) : (
// 			<span className="text-sm text-gray-400">
// 				In Development
// 			</span>
// 		)}
// 	</div>
// );

// /* ────────────────────────────────────────────────────────────────
//    PAGE
// ──────────────────────────────────────────────────────────────── */

// const Projects = () => {
// 	return (
// 		<div className="bg-white dark:bg-[#050816] min-h-screen text-black dark:text-white">

// 			{/* HERO */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-28">
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5 }}
// 				>
// 					<p className="text-sm text-blue-500 font-medium mb-6">
// 						Software Engineer • Infrastructure • SaaS Systems
// 					</p>

// 					<h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-8">
// 						Building scalable SaaS platforms, cloud systems,
// 						and production-grade engineering products.
// 					</h1>

// 					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
// 						Focused on full-stack engineering, infrastructure,
// 						virtualization, automation, and scalable backend systems.
// 					</p>

// 					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// 						{[
// 							['16+', 'CRM Modules'],
// 							['10K+', 'Realtime Events / Day'],
// 							['6-role', 'RBAC Architecture'],
// 							['2FA', 'Secure Authentication'],
// 						].map(([value, label]) => (
// 							<div
// 								key={label}
// 								className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
// 							>
// 								<p className="text-3xl font-bold mb-2">
// 									{value}
// 								</p>

// 								<p className="text-sm text-gray-500">
// 									{label}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</motion.div>
// 			</section>

// 			{/* FEATURED PROJECTS */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
// 				<SectionLabel
// 					number="01"
// 					title="Featured Projects"
// 				/>

// 				<div className="space-y-40">
// 					{featuredProjects.map((project, index) => (
// 						<FeaturedProject
// 							key={project.title}
// 							project={project}
// 							reverse={index % 2 !== 0}
// 						/>
// 					))}
// 				</div>
// 			</section>

// 			{/* ENGINEERING */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
// 				<SectionLabel
// 					number="02"
// 					title="Engineering Experience"
// 				/>

// 				<div className="grid md:grid-cols-2 gap-8">
// 					<div className="border border-gray-200 dark:border-gray-800 rounded-3xl p-10">
// 						<h3 className="text-2xl font-semibold mb-8">
// 							Infrastructure & Systems
// 						</h3>

// 						<div className="space-y-4">
// 							{[
// 								'KVM Virtualization',
// 								'Libvirt / QEMU',
// 								'Ceph & SeaweedFS',
// 								'VPC Networking',
// 								'S3 Architecture',
// 								'Linux Systems',
// 								'Infrastructure Automation',
// 							].map((item) => (
// 								<div
// 									key={item}
// 									className="flex items-center gap-3"
// 								>
// 									<div className="w-2 h-2 rounded-full bg-blue-500" />

// 									<p className="text-gray-700 dark:text-gray-300">
// 										{item}
// 									</p>
// 								</div>
// 							))}
// 						</div>
// 					</div>

// 					<div className="border border-gray-200 dark:border-gray-800 rounded-3xl p-10">
// 						<h3 className="text-2xl font-semibold mb-8">
// 							Backend & Platform
// 						</h3>

// 						<div className="space-y-4">
// 							{[
// 								'Multi-tenant SaaS Systems',
// 								'JWT + 2FA Authentication',
// 								'REST API Architecture',
// 								'Async Job Processing',
// 								'Redis Caching',
// 								'Database Optimization',
// 								'Scalable API Design',
// 							].map((item) => (
// 								<div
// 									key={item}
// 									className="flex items-center gap-3"
// 								>
// 									<div className="w-2 h-2 rounded-full bg-blue-500" />

// 									<p className="text-gray-700 dark:text-gray-300">
// 										{item}
// 									</p>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* CLIENT WORK */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
// 				<SectionLabel
// 					number="03"
// 					title="Client Work"
// 				/>

// 				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
// 					{clientProjects.map((item) => (
// 						<ClientCard
// 							key={item.title}
// 							item={item}
// 						/>
// 					))}
// 				</div>
// 			</section>

// 			{/* WRITING */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
// 				<SectionLabel
// 					number="04"
// 					title="Writing & Technical Articles"
// 				/>

// 				<div className="border border-gray-200 dark:border-gray-800 rounded-3xl divide-y divide-gray-200 dark:divide-gray-800 overflow-hidden">
// 					{writings.map((item) => (
// 						<a
// 							key={item.title}
// 							href={item.url}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-8 hover:bg-gray-50 dark:hover:bg-[#0b1120] transition-colors"
// 						>
// 							<div>
// 								<h3 className="text-xl font-semibold text-black dark:text-white mb-2">
// 									{item.title}
// 								</h3>

// 								<p className="text-sm text-gray-500">
// 									{item.date}
// 								</p>
// 							</div>

// 							<div className="text-blue-500 font-medium">
// 								Read Article →
// 							</div>
// 						</a>
// 					))}
// 				</div>
// 			</section>

// 			{/* FOOTER */}
// 			<footer className="border-t border-gray-200 dark:border-gray-800">
// 				<div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// 					<div>
// 						<h3 className="text-2xl font-semibold mb-2">
// 							Interested in working together?
// 						</h3>

// 						<p className="text-gray-500 dark:text-gray-400">
// 							Open to engineering, infrastructure,
// 							and product-focused opportunities.
// 						</p>
// 					</div>

// 					<div className="flex gap-4">
// 						<a
// 							href="https://github.com/dipnangle"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium"
// 						>
// 							GitHub
// 						</a>

// 						<a
// 							href="https://www.virtualizor.com/blog/author/dipesh/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-medium"
// 						>
// 							Blog Articles
// 						</a>
// 					</div>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// };

// export default Projects;

// import React from 'react';
// import { motion } from 'framer-motion';

// /* ─────────────────────────────────────────────
//    ASSETS
// ───────────────────────────────────────────── */

// import crmCover from '@/assets/projects/crm.png';
// import aerowellCover from '@/assets/projects/aerowell.png';

// /* ─────────────────────────────────────────────
//    DATA
// ───────────────────────────────────────────── */

// const featuredProjects = [
// 	{
// 		title: 'CRM Platform',
// 		category: 'Featured SaaS Platform',
// 		description:
// 			'Production-grade multi-tenant CRM architecture focused on scalable workflows, team operations, RBAC, and async processing.',
// 		cover: crmCover,
// 		metrics: [
// 			'16 production modules',
// 			'6-role RBAC architecture',
// 			'JWT + 2FA authentication',
// 			'Redis + Celery task queue',
// 		],
// 		stack: ['React', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
// 		url: 'https://crm.dipnangle.com',
// 	},
// 	{
// 		title: 'AeroWell',
// 		category: 'Machine Learning Platform',
// 		description:
// 			'Realtime air quality analytics platform with ML-powered prediction systems and visualization pipelines.',
// 		cover: aerowellCover,
// 		metrics: [
// 			'87% prediction accuracy',
// 			'10K+ realtime datapoints daily',
// 			'ML inference pipelines',
// 			'Live dashboard analytics',
// 		],
// 		stack: ['Python', 'XGBoost', 'REST API', 'scikit-learn'],
// 		url: 'https://aerowell.dipnangle.com',
// 	},
// ];

// /* ─────────────────────────────────────────────
//    SECTION LABEL
// ───────────────────────────────────────────── */

// const SectionLabel = ({ number, title, subtitle }) => (
// 	<div className="mb-20">
// 		<p className="text-sm text-blue-500 font-medium mb-4">
// 			{number}
// 		</p>

// 		<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5">
// 			{title}
// 		</h2>

// 		<p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
// 			{subtitle}
// 		</p>
// 	</div>
// );

// /* ─────────────────────────────────────────────
//    HERO
// ───────────────────────────────────────────── */

// const Hero = () => {
// 	return (
// 		<section className="relative overflow-hidden">
			
// 			{/* background glow */}
// 			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#13203a_0%,transparent_55%)] pointer-events-none" />

// 			<div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

// 				<div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

// 					{/* LEFT */}
// 					<div>

// 						<p className="text-sm text-blue-400 font-medium mb-8">
// 							Software Engineer • Infrastructure • SaaS Systems
// 						</p>

// 						<h1 className="text-6xl md:text-7xl font-bold leading-[1.02] tracking-tight text-white mb-8">
// 							Building scalable backend systems,
// 							cloud infrastructure,
// 							and production-grade SaaS platforms.
// 						</h1>

// 						<p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
// 							Focused on platform engineering, virtualization,
// 							automation, infrastructure systems,
// 							and scalable product architecture.
// 						</p>

// 						{/* metrics */}
// 						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

// 							{[
// 								['16+', 'CRM Modules'],
// 								['10K+', 'Realtime Events'],
// 								['6-role', 'RBAC System'],
// 								['2FA', 'Authentication'],
// 							].map(([value, label]) => (
// 								<div
// 									key={label}
// 									className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5"
// 								>
// 									<p className="text-3xl font-semibold text-white mb-2">
// 										{value}
// 									</p>

// 									<p className="text-sm text-gray-500">
// 										{label}
// 									</p>
// 								</div>
// 							))}
// 						</div>

// 					</div>

// 					{/* RIGHT VISUAL */}
// 					<div className="relative">

// 						<div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0f172a] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">

// 							<div className="border-b border-white/10 px-6 py-4 flex items-center gap-2">
// 								<div className="w-3 h-3 rounded-full bg-red-400" />
// 								<div className="w-3 h-3 rounded-full bg-yellow-400" />
// 								<div className="w-3 h-3 rounded-full bg-green-400" />
// 							</div>

// 							<div className="p-8 font-mono text-sm leading-8">

// 								<div className="text-gray-500">
// 									$ infrastructure-stack
// 								</div>

// 								<div className="text-blue-400">
// 									KVM / Libvirt / QEMU
// 								</div>

// 								<div className="text-blue-400">
// 									Ceph / SeaweedFS / S3
// 								</div>

// 								<div className="text-blue-400">
// 									Redis / Celery / PostgreSQL
// 								</div>

// 								<div className="h-6" />

// 								<div className="text-gray-500">
// 									$ backend-systems
// 								</div>

// 								<div className="text-emerald-400">
// 									Multi-tenant SaaS Architecture
// 								</div>

// 								<div className="text-emerald-400">
// 									JWT + 2FA Authentication
// 								</div>

// 								<div className="text-emerald-400">
// 									Realtime Processing Pipelines
// 								</div>

// 							</div>
// 						</div>

// 						{/* floating card */}
// 						<div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl px-6 py-5 shadow-2xl">

// 							<p className="text-sm text-gray-500 mb-2">
// 								Current Focus
// 							</p>

// 							<p className="text-white font-medium leading-relaxed">
// 								Virtualization, SaaS Platforms,
// 								Cloud Infrastructure
// 							</p>

// 						</div>

// 					</div>

// 				</div>

// 			</div>
// 		</section>
// 	);
// };

// /* ─────────────────────────────────────────────
//    FEATURED PROJECT
// ───────────────────────────────────────────── */

// const FeaturedProject = ({ project, reverse = false }) => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 40 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			viewport={{ once: true }}
// 			transition={{ duration: 0.5 }}
// 			className={`grid lg:grid-cols-2 gap-20 items-center ${
// 				reverse ? 'lg:[&>*:first-child]:order-2' : ''
// 			}`}
// 		>

// 			{/* CONTENT */}
// 			<div>

// 				<p className="text-sm text-blue-400 font-medium mb-5">
// 					{project.category}
// 				</p>

// 				<h3 className="text-5xl font-semibold tracking-tight text-white mb-6">
// 					{project.title}
// 				</h3>

// 				<p className="text-lg text-gray-400 leading-relaxed mb-10">
// 					{project.description}
// 				</p>

// 				<div className="space-y-5 mb-10">

// 					{project.metrics.map((item) => (
// 						<div
// 							key={item}
// 							className="flex items-start gap-4"
// 						>
// 							<div className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0" />

// 							<p className="text-gray-300 leading-relaxed">
// 								{item}
// 							</p>
// 						</div>
// 					))}

// 				</div>

// 				{/* stack */}
// 				<div className="flex flex-wrap gap-3 mb-12">

// 					{project.stack.map((item) => (
// 						<div
// 							key={item}
// 							className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300"
// 						>
// 							{item}
// 						</div>
// 					))}

// 				</div>

// 				<a
// 					href={project.url}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-black font-medium hover:translate-y-[-2px] transition-all duration-300"
// 				>
// 					View Project

// 					<span>→</span>
// 				</a>

// 			</div>

// 			{/* VISUAL */}
// 			<div className="relative group">

// 				<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a]">

// 					<img
// 						src={project.cover}
// 						alt={project.title}
// 						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
// 					/>

// 					{/* overlay */}
// 					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

// 				</div>

// 				{/* floating architecture card */}
// 				<div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl p-5 shadow-2xl max-w-xs">

// 					<p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
// 						Architecture
// 					</p>

// 					<div className="space-y-2 text-sm font-mono">

// 						<div className="text-blue-400">
// 							React Frontend
// 						</div>

// 						<div className="text-gray-500">
// 							↓
// 						</div>

// 						<div className="text-emerald-400">
// 							DRF API Layer
// 						</div>

// 						<div className="text-gray-500">
// 							↓
// 						</div>

// 						<div className="text-violet-400">
// 							Redis + Celery
// 						</div>

// 						<div className="text-gray-500">
// 							↓
// 						</div>

// 						<div className="text-orange-400">
// 							PostgreSQL
// 						</div>

// 					</div>

// 				</div>

// 			</div>

// 		</motion.div>
// 	);
// };

// /* ─────────────────────────────────────────────
//    PAGE
// ───────────────────────────────────────────── */

// const Projects = () => {
// 	return (
// 		<div className="bg-[#050816] min-h-screen overflow-hidden">

// 			{/* HERO */}
// 			<Hero />

// 			{/* FEATURED */}
// 			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

// 				<SectionLabel
// 					number="01"
// 					title="Featured Engineering Projects"
// 					subtitle="Selected work focused on scalable systems, backend engineering, infrastructure architecture, and SaaS product development."
// 				/>

// 				<div className="space-y-40">

// 					{featuredProjects.map((project, index) => (
// 						<FeaturedProject
// 							key={project.title}
// 							project={project}
// 							reverse={index % 2 !== 0}
// 						/>
// 					))}

// 				</div>

// 			</section>

// 		</div>
// 	);
// };

// export default Projects;

import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   ASSETS
───────────────────────────────────────────── */

import crmCover from '@/assets/projects/crm.png';
import aerowellCover from '@/assets/projects/aerowell.png';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const featuredProjects = [
	{
		title: 'CRM Platform',
		category: 'Featured SaaS & Self-Hosted (In Development)',
		description:
			'Production-grade multi-tenant CRM architecture focused on scalable workflows, RBAC systems, async processing, and operational management.',
		cover: crmCover,
		inDevelopment: true,
		metrics: [
			'16 production modules',
			'6-role RBAC architecture',
			'JWT + 2FA authentication',
			'Redis + Celery queue system',
		],
		stack: ['React', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
		url: 'https://crm.dipnangle.com',
		architecture: [
			{ label: 'React Frontend', color: 'text-blue-500 dark:text-blue-400' },
			{ label: 'DRF API Layer', color: 'text-emerald-500 dark:text-emerald-400' },
			{ label: 'Redis + Celery', color: 'text-violet-500 dark:text-violet-400' },
			{ label: 'PostgreSQL', color: 'text-orange-500 dark:text-orange-400' },
		],
	},
	{
		title: 'AeroWell',
		category: 'Health & Environmental ML Platform',
		description:
			'Predictive platform for air quality and weather forecasting. Employs a Stacked Ensemble Regressor to provide multi-hour environmental insights and personalized health risk assessments.',
		cover: aerowellCover,
		metrics: [
			'Stacked Ensemble (XGB, LGBM, RF)',
			'Multi-hour Weather Forecast',
			'8-Pollutant AQI Prediction',
			'Personalized Health Risk Engine',
		],
		stack: ['Django', 'DRF', 'XGBoost', 'LightGBM', 'scikit-learn'],
		url: 'https://aerowell.dipnangle.com',
		architecture: [
			{ label: 'Django / DRF API', color: 'text-blue-500 dark:text-blue-400' },
			{ label: 'Stacked Ensemble ML', color: 'text-emerald-500 dark:text-emerald-400' },
			{ label: 'Health Risk Engine', color: 'text-violet-500 dark:text-violet-400' },
			{ label: 'OpenWeather API', color: 'text-orange-500 dark:text-orange-400' },
		],
	},
];

const clientProjects = [
	{
		title: 'Indocom Solutions',
		description:
			'Corporate loan services platform with eligibility workflows, lead generation systems, and EMI calculators.',
		stack: ['React', 'Tailwind', 'Vite'],
		url: 'https://www.indocom.in/',
	},
	{
		title: 'Transtechnix Engineering',
		description:
			'Industrial engineering website showcasing turnkey grinding plant solutions and manufacturing systems.',
		stack: ['React', 'Tailwind', 'Vite'],
		url: 'https://www.transtechnix.com/',
	},
	{
		title: 'Swami Samarth Packaging',
		description:
			'Corporate website for dangerous goods packaging and industrial logistics solutions.',
		stack: ['React', 'Tailwind', 'Vite'],
		url: 'https://www.swamipackaging.com/',
	},
	{
		title: 'Interior Design Studio',
		description:
			'Corporate website for a premium interior design firm specializing in luxury residential and commercial spaces.',
		stack: ['React', 'Tailwind', 'Vite'],
		url: null,
	},
];

const blogs = [
	{
		title: 'Virtualizor 3.2.9 Launched',
		date: 'May 2026',
		url: 'https://www.virtualizor.com/blog/virtualizor-3-2-9-launched/',
	},
	{
		title: 'Admin ACL',
		date: 'Mar 2025',
		url: 'https://www.virtualizor.com/blog/admin-acl/',
	},
	{
		title: 'CPU Threshold',
		date: 'Jul 2023',
		url: 'https://www.virtualizor.com/blog/cpu-threshold-virtualizor/',
	},
];

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */

const SectionLabel = ({ number, title, subtitle }) => (
	<div className="mb-20">

		<p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-4">
			{number}
		</p>

		<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
			{title}
		</h2>

		<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
			{subtitle}
		</p>

	</div>
);

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

const Hero = () => {
	return (
		<section className="relative overflow-hidden">

			{/* glow */}
			<div className="
				absolute inset-0 pointer-events-none
				bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12)_0%,transparent_55%)]
				dark:bg-[radial-gradient(circle_at_top,#13203a_0%,transparent_55%)]
			" />

			<div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

				<div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

					{/* LEFT */}
					<div>

						<p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-8">
							Software Engineer • Infrastructure • SaaS Systems
						</p>

						<h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight text-gray-900 dark:text-white mb-8">
							Building scalable backend systems,
							cloud infrastructure,
							and production-grade SaaS platforms.
						</h1>

						<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-12">
							Focused on platform engineering, virtualization,
							automation, infrastructure systems,
							and scalable backend architecture.
						</p>

						{/* metrics */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

							{[
								['16+', 'CRM Modules'],
								['10K+', 'Realtime Events'],
								['6-role', 'RBAC System'],
								['2FA', 'Authentication'],
							].map(([value, label]) => (
								<div
									key={label}
									className="
										rounded-2xl
										border border-gray-200 dark:border-white/10
										bg-white/80 dark:bg-white/[0.03]
										backdrop-blur-sm
										p-5
									"
								>

									<p className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
										{value}
									</p>

									<p className="text-sm text-gray-500 dark:text-gray-500">
										{label}
									</p>

								</div>
							))}

						</div>

					</div>

					{/* RIGHT VISUAL */}
					<div className="relative">

						<div className="
							rounded-3xl overflow-hidden
							border border-gray-200 dark:border-white/10
							bg-white dark:bg-[#0f172a]
							shadow-[0_20px_80px_rgba(0,0,0,0.08)]
							dark:shadow-[0_30px_100px_rgba(0,0,0,0.5)]
						">

							<div className="border-b border-gray-200 dark:border-white/10 px-6 py-4 flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-red-400" />
								<div className="w-3 h-3 rounded-full bg-yellow-400" />
								<div className="w-3 h-3 rounded-full bg-green-400" />
							</div>

							<div className="p-8 font-mono text-sm leading-8">

								<div className="text-gray-500">
									$ infrastructure-stack
								</div>

								<div className="text-blue-500 dark:text-blue-400">
									KVM / Libvirt / QEMU
								</div>

								<div className="text-blue-500 dark:text-blue-400">
									Ceph / SeaweedFS / S3
								</div>

								<div className="text-blue-500 dark:text-blue-400">
									Redis / Celery / PostgreSQL
								</div>

								<div className="h-6" />

								<div className="text-gray-500">
									$ backend-systems
								</div>

								<div className="text-emerald-500 dark:text-emerald-400">
									Multi-tenant SaaS Architecture
								</div>

								<div className="text-emerald-500 dark:text-emerald-400">
									JWT + 2FA Authentication
								</div>

								<div className="text-emerald-500 dark:text-emerald-400">
									Realtime Processing Pipelines
								</div>

							</div>

						</div>

						{/* floating card */}
						<div className="
							lg:absolute lg:-bottom-6 lg:-left-6
							mt-8 lg:mt-0
							rounded-2xl
							border border-gray-200 dark:border-white/10
							bg-white/90 dark:bg-[#111827]/80
							backdrop-blur-xl
							px-6 py-5
							shadow-2xl
						">

							<p className="text-sm text-gray-500 mb-2">
								Current Focus
							</p>

							<p className="text-gray-900 dark:text-white font-medium leading-relaxed">
								Virtualization, SaaS Platforms,
								Cloud Infrastructure
							</p>

						</div>

					</div>

				</div>

			</div>

		</section>
	);
};

/* ─────────────────────────────────────────────
   FEATURED PROJECT
───────────────────────────────────────────── */

const FeaturedProject = ({ project, reverse = false }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
				reverse ? 'lg:[&>*:first-child]:order-2' : ''
			}`}
		>

			{/* CONTENT */}
			<div>

				<p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-5">
					{project.category}
				</p>

				<h3 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
					{project.title}
				</h3>

				<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
					{project.description}
				</p>

				<div className="space-y-5 mb-10">

					{project.metrics.map((item) => (
						<div
							key={item}
							className="flex items-start gap-4"
						>

							<div className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0" />

							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{item}
							</p>

						</div>
					))}

				</div>

				{/* stack */}
				<div className="flex flex-wrap gap-3 mb-12">

					{project.stack.map((item) => (
						<div
							key={item}
							className="
								px-4 py-2 rounded-full
								border border-gray-200 dark:border-white/10
								bg-gray-50 dark:bg-white/[0.03]
								text-sm text-gray-700 dark:text-gray-300
							"
						>
							{item}
						</div>
					))}

				</div>

				{project.inDevelopment ? (
					<div className="
						inline-flex items-center gap-3
						px-7 py-4 rounded-2xl
						bg-gray-100 dark:bg-white/[0.05]
						border border-gray-200 dark:border-white/10
						text-gray-500 dark:text-gray-400
						font-medium
						cursor-default
					">
						<div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
						In Development
					</div>
				) : (
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="
							inline-flex items-center gap-3
							px-7 py-4 rounded-2xl
							bg-blue-600 hover:bg-blue-700
							text-white
							font-medium
							hover:translate-y-[-2px]
							transition-all duration-300
							shadow-lg shadow-blue-500/20
						"
					>
						View Project
						<span>→</span>
					</a>
				)}

			</div>

			{/* VISUAL */}
			<div className="relative group">

				<div className="
					relative overflow-hidden rounded-[32px]
					border border-gray-200 dark:border-white/10
					bg-gray-100 dark:bg-[#0f172a]
				">

					<img
						src={project.cover}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
					/>

					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

				</div>

				{/* architecture card */}
				<div className="
					lg:absolute lg:bottom-6 lg:left-6
					mt-8 lg:mt-0
					rounded-2xl
					border border-gray-200 dark:border-white/10
					bg-white/90 dark:bg-[#111827]/80
					backdrop-blur-xl
					p-5 shadow-2xl
					w-full lg:max-w-[280px]
					mx-auto lg:mx-0
				">

					<p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
						Architecture
					</p>

					<div className="flex flex-col items-center space-y-2 text-sm font-mono">

						{project.architecture.map((item, idx) => (
							<React.Fragment key={item.label}>
								<div className={`${item.color} text-center w-full`}>
									{item.label}
								</div>
								{idx < project.architecture.length - 1 && (
									<div className="text-gray-400 flex justify-center w-full">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
										</svg>
									</div>
								)}
							</React.Fragment>
						))}

					</div>

				</div>

			</div>

		</motion.div>
	);
};

/* ─────────────────────────────────────────────
   CLIENT CARD
───────────────────────────────────────────── */

const ClientCard = ({ item }) => (
	<div className="
		rounded-3xl
		border border-gray-200 dark:border-white/10
		bg-white dark:bg-[#0f172a]
		p-8
		transition-all duration-300
		hover:-translate-y-1
		hover:shadow-2xl
	">

		<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
			{item.title}
		</h3>

		<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
			{item.description}
		</p>

		<div className="flex flex-wrap gap-3 mb-8">

			{item.stack.map((tech) => (
				<div
					key={tech}
					className="
						px-3 py-1.5 rounded-full
						bg-gray-100 dark:bg-white/[0.03]
						border border-gray-200 dark:border-white/10
						text-sm text-gray-700 dark:text-gray-300
					"
				>
					{tech}
				</div>
			))}

		</div>

		{item.url ? (
			<a
				href={item.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 dark:text-blue-400 font-medium"
			>
				Visit Website →
			</a>
		) : (
			<span className="text-gray-400">
				In Development
			</span>
		)}

	</div>
);

/* ─────────────────────────────────────────────
   BLOG ITEM
───────────────────────────────────────────── */

const BlogItem = ({ item }) => (
	<a
		href={item.url}
		target="_blank"
		rel="noopener noreferrer"
		className="
			group
			flex flex-col md:flex-row md:items-center
			justify-between gap-6
			p-8
			border-b border-gray-200 dark:border-white/10
			hover:bg-gray-50 dark:hover:bg-white/[0.02]
			transition-colors duration-300
		"
	>

		<div>

			<p className="text-sm text-gray-500 mb-3">
				{item.date}
			</p>

			<h3 className="
				text-2xl font-semibold
				text-gray-900 dark:text-white
				group-hover:text-blue-500 dark:group-hover:text-blue-400
				transition-colors
			">
				{item.title}
			</h3>

		</div>

		<div className="text-blue-500 dark:text-blue-400 font-medium">
			Read Article →
		</div>

	</a>
);

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Projects = () => {
	return (
		<div className="
			bg-white dark:bg-[#050816]
			min-h-screen
			overflow-hidden
			transition-colors duration-300
		">

			{/* HERO */}
			<Hero />

			{/* FEATURED */}
			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

				<SectionLabel
					number="01"
					title="Featured Engineering Projects"
					subtitle="Selected work focused on scalable systems, backend engineering, infrastructure architecture, and SaaS product development."
				/>

				<div className="space-y-40">

					{featuredProjects.map((project, index) => (
						<FeaturedProject
							key={project.title}
							project={project}
							reverse={index % 2 !== 0}
						/>
					))}

				</div>

			</section>

			{/* CLIENT WORK */}
			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

				<SectionLabel
					number="02"
					title="Client Work"
					subtitle="Selected client websites and production deployments built for businesses and industrial platforms."
				/>

				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

					{clientProjects.map((item) => (
						<ClientCard
							key={item.title}
							item={item}
						/>
					))}

				</div>

			</section>

			{/* BLOGS */}
			<section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

				<SectionLabel
					number="03"
					title="Technical Writing"
					subtitle="Engineering articles, infrastructure features, and platform updates published on the Virtualizor blog."
				/>

				<div className="
					rounded-3xl overflow-hidden
					border border-gray-200 dark:border-white/10
					bg-white dark:bg-[#0f172a]
				">

					{blogs.map((item) => (
						<BlogItem
							key={item.title}
							item={item}
						/>
					))}

				</div>

			</section>

		</div>
	);
};

export default Projects;