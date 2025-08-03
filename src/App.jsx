import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Resume from './components/resume';
import NotFound from './components/NotFound';

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
				<NavBar toggleTheme={toggleSwitch} theme={theme}/>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/journey" element={<Journey/>}></Route>
					<Route path="/skills" element={<Skills/>}></Route>
					<Route path="/resume" element={<Resume/>}></Route>
					<Route path="/*" element={<NotFound/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
