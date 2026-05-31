import { useEffect, useState, lazy, Suspense } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';

const Journey = lazy(() => import('./components/Journey'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/resume'));
const Projects = lazy(() => import('./components/Projects'));
const NotFound = lazy(() => import('./components/NotFound'));
import { Analytics } from '@vercel/analytics/react';

function App() {

	const [theme, setTheme] = useState('light');

	useEffect(() => {
		let storedTheme = localStorage.getItem("theme");
		
		// if we dont get the theme item then we can set as light to show the toggle switch properly
		if(!storedTheme) {
			storedTheme = "light";
			localStorage.setItem("theme", storedTheme);
		}
		
		setTheme(storedTheme);
		document.documentElement.classList.add(storedTheme)

	}, []);

	// defining toggle switch for dark and light mode portfolio
	const toggleSwitch = () => {
		const newTheme = (theme === 'light') ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<>
			<BrowserRouter>
				<Analytics/>
				<NavBar toggleTheme={toggleSwitch} theme={theme}/>
				<Suspense fallback={<div className="flex items-center justify-center min-h-screen dark:bg-[#060d1e]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
					<Routes>
						<Route path="/" element={<Home/>}></Route>
						<Route path="/journey" element={<Journey/>}></Route>
						<Route path="/skills" element={<Skills/>}></Route>
						<Route path="/projects" element={<Projects/>}></Route>
						<Route path="/resume" element={<Resume/>}></Route>
						<Route path="/*" element={<NotFound/>}></Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	)
}

export default App
