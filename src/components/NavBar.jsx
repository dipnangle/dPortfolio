import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

function NavBar({ toggleTheme }) {
	// getting the theme
	const savedTheme = localStorage.getItem('theme');
	const pageLocation = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<header className="navBar">
				<nav className="flex items-center justify-between">
					<h2 className="portFolio"><Link to="/">Portfolio</Link></h2>
					<div className='desktop'>
						<div className="flex space-x-5 justify-center items-center pl-2">
							<ul className="flex space-x-4 dark:text-white">
								<li>
									<Link to='/' className={pageLocation.pathname === '/' ? 'text-blue-500 font-bold' : 'hover:text-blue-300'}>About</Link>
								</li>
								<li>
									<Link to='/journey' className={pageLocation.pathname === '/journey' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'}>My Journey</Link>
								</li>
								<li>
									<Link to='/skills' className={pageLocation.pathname === '/skills' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'}>Skills</Link>
								</li>
								<li>
									<Link to='/resume' className={pageLocation.pathname === '/resume' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'}>Resume</Link>
								</li>
							</ul>
							<button onClick={toggleTheme} className='toggleSwitch'>
								{savedTheme === 'light' ?
									(<svg className="w-5 h-5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.4 8.4 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79" /></svg>)
									:
									(<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 3.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04m7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7m-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29M22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1M2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1m16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29m-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3M12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04" /></svg>)
								}
							</button>
							<a className='hover:scale-110 transition' target='_blank' href="https://github.com/dipnangle">
								<svg width="30" height="30" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><g transform="translate(2 2)" fill="none"><rect stroke="#000" strokeWidth="2" fill="#000" x="-1" y="-1" width="71" height="71" rx="14" /><path d="M58.307 21.428q-3.617-6.195-9.812-9.812Q42.299 8.001 34.96 8q-7.337 0-13.533 3.616t-9.812 9.812T8 34.961q0 8.812 5.143 15.85 5.143 7.04 13.287 9.742.948.175 1.405-.246.456-.421.456-1.052l-.018-1.896a314 314 0 0 1-.018-3.124l-.807.14q-.772.14-1.949.123a15 15 0 0 1-2.44-.246 5.45 5.45 0 0 1-2.351-1.053 4.45 4.45 0 0 1-1.545-2.158l-.35-.808q-.352-.807-1.107-1.79-.754-.984-1.527-1.334l-.245-.176a2.6 2.6 0 0 1-.457-.422 2 2 0 0 1-.315-.491q-.106-.246.175-.405.281-.157 1.018-.157l.702.105q.702.14 1.738.843a5.7 5.7 0 0 1 1.702 1.825q.808 1.439 1.949 2.194 1.14.755 2.299.755 1.158 0 2-.175a7 7 0 0 0 1.58-.527q.317-2.353 1.72-3.616-2-.211-3.598-.632-1.596-.422-3.3-1.37t-2.826-2.352-1.842-3.686-.72-5.266q0-4.248 2.774-7.232-1.3-3.195.245-7.161 1.019-.316 3.02.473 2 .79 2.93 1.352t1.493.948a25 25 0 0 1 6.74-.912q3.476 0 6.741.912l1.334-.842q1.369-.843 3.23-1.545t2.844-.386q1.58 3.968.28 7.161 2.774 2.984 2.774 7.232 0 2.984-.72 5.283t-1.86 3.687-2.844 2.334q-1.703.948-3.3 1.37-1.597.421-3.598.632 1.825 1.58 1.825 4.985v7.407q0 .631.44 1.052.438.42 1.386.246 8.145-2.703 13.288-9.742 5.142-7.038 5.142-15.85-.001-7.335-3.616-13.532" fill="#FFF" /></g></svg>
							</a>
							<a className='!ml-2 hover:scale-110 transition' target='_blank' href="https://www.linkedin.com/in/dipesh-nangle-69419613a/">
								<svg viewBox="0 0 48 48" width="35" height="35" xmlns="http://www.w3.org/2000/svg" fill="#0A66C2"><g stroke-width="0" /><g stroke-linecap="round" stroke-linejoin="round" /><g data-name="Layer 2"><g data-name="invisible box" fill="none"><path d="M0 0h48v48H0z" /><path d="M0 0h48v48H0z" /></g><path d="M41 4.1H7A2.9 2.9 0 0 0 4 7v34.1A2.9 2.9 0 0 0 7 44h34a2.9 2.9 0 0 0 2.9-2.9V7A2.9 2.9 0 0 0 41 4.1m-25.1 34h-6v-19h6Zm-3-21.6A3.5 3.5 0 0 1 9.5 13a3.4 3.4 0 0 1 6.8 0 3.5 3.5 0 0 1-3.4 3.5M38 38.1h-5.9v-9.3c0-2.2 0-5-3.1-5s-3.5 2.4-3.5 4.9v9.4h-5.9v-19h5.6v2.6h.1a6.2 6.2 0 0 1 5.6-3.1c6 0 7.1 3.9 7.1 9.1Z" data-name="icons Q2" /></g></svg>
							</a>
						</div>
					</div>
					<div className='mobile'>
						<div className='flex gap-2'>
							<button onClick={toggleTheme} className='toggleSwitch'>
								{savedTheme === 'light' ?
									(<svg className='w-5 h-5 fill-black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
										<g strokeWidth='0' />
										<g strokeLinecap='round' strokeLinejoin='round' />
										<path
											d='M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.4 8.4 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79' />
									</svg>)
									:
									(<svg className='w-5 h-5 fill-white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
										<g strokeWidth='0' />
										<g strokeLinecap='round' strokeLinejoin='round' />
										<path
											d='M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 3.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04m7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7m-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29M22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1M2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1m16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29m-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3M12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04' />
									</svg>)
								}
							</button>
							<div className='relative sm:inline-block text-left lg:hidden md:hidden'>
								<div>
									<button type='button' onClick={() => setIsOpen(!isOpen)}
										className='dropdownButton'
										id='menu-button' aria-expanded='isOpen' aria-haspopup='true'>
										<svg className='size-5 fill-black dark:fill-white' id='Layer_1' data-name='Layer 1'
											xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
											<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
											<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
											<g id='SVGRepo_iconCarrier'>
												<path id='Menu_Button' data-name='Menu Button' class='cls-1'
													d='M2,13V11H14v2ZM2,9V7H14V9ZM2,5V3H14V5Z'></path>
											</g>
										</svg>
									</button>
								</div>
								{isOpen && (<div
									className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-[#080B0D] ring-1 shadow-lg ring-black/5 focus:outline-hidden'
									role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex='-1'>
									<div className='py-1 text-gray-700 dark:text-white shadow-sm dark:shadow-md dark:shadow-blue-500/50' role='none'>
										<ul className=''>
											<li className='dropdownOption'>
												<Link to='/' className={pageLocation.pathname === '/' ? 'text-blue-500 font-bold' : ''} onClick={() => setIsOpen(false)}>About</Link>
											</li>
											<li className='dropdownOption'>
												<Link to='/journey' className={pageLocation.pathname === '/journey' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'} onClick={() => setIsOpen(false)}>My Journey</Link>
											</li>
											<li className='dropdownOption'>
												<Link to='/skills' className={pageLocation.pathname === '/skills' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'} onClick={() => setIsOpen(false)}>Skills</Link>
											</li>
											<li className='dropdownOption'>
												<Link to='/resume' className={pageLocation.pathname === '/resume' ? 'text-blue-500 font-bold' : 'hover:text-blue-600'} onClick={() => setIsOpen(false)}>Resume</Link>
											</li>
										</ul>
										<hr></hr>
										<a className='flex gap-1 dark:text items-center px-4 py-1' target='_blank' href='https://github.com/dipnangle' onClick={() => setIsOpen(false)}>
											Github<svg width='24' height='24' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="24" r="20" fill="#181717" /><path d="M6.813 34.235a20.06 20.06 0 0 0 10.864 8.743c1 .183 1.366-.434 1.366-.965 0-.22-.004-.607-.01-1.126-.005-.602-.012-1.38-.018-2.275-5.563 1.209-6.736-2.681-6.736-2.681-.91-2.31-2.221-2.925-2.221-2.925-1.816-1.24.137-1.216.137-1.216 2.008.142 3.063 2.061 3.063 2.061 1.784 3.056 4.682 2.173 5.821 1.663.182-1.293.698-2.175 1.27-2.675-4.441-.504-9.11-2.22-9.11-9.884 0-2.183.78-3.969 2.059-5.367-.207-.506-.893-2.54.195-5.293 0 0 1.68-.538 5.5 2.05A19.2 19.2 0 0 1 24 13.672c1.698.008 3.41.23 5.007.673 3.819-2.588 5.495-2.05 5.495-2.05 1.091 2.754.405 4.787.198 5.293 1.282 1.398 2.057 3.183 2.057 5.366 0 7.684-4.677 9.375-9.132 9.87.718.617 1.358 1.837 1.358 3.704 0 1.787-.011 3.344-.019 4.376-.003.51-.006.892-.006 1.11 0 .535.36 1.157 1.375.962a20.04 20.04 0 0 0 9.207-6.386C35.873 41.11 30.274 44 24 44c-7.306 0-13.696-3.917-17.187-9.765" fill="#fff" /></svg>
										</a>
										<a className='flex gap-1 items-center px-4 py-1' target='_blank' href='https://www.linkedin.com/in/dipesh-nangle-69419613a/' onClick={() => setIsOpen(false)}>
											<span className='text-[#0A66C2]'>Linked</span>
											<svg width='24' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#0A66C2"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><g data-name="Layer 2"><g data-name="invisible box" fill="none"><path d="M0 0h48v48H0z" /><path d="M0 0h48v48H0z" /></g><path d="M41 4.1H7A2.9 2.9 0 0 0 4 7v34.1A2.9 2.9 0 0 0 7 44h34a2.9 2.9 0 0 0 2.9-2.9V7A2.9 2.9 0 0 0 41 4.1m-25.1 34h-6v-19h6Zm-3-21.6A3.5 3.5 0 0 1 9.5 13a3.4 3.4 0 0 1 6.8 0 3.5 3.5 0 0 1-3.4 3.5M38 38.1h-5.9v-9.3c0-2.2 0-5-3.1-5s-3.5 2.4-3.5 4.9v9.4h-5.9v-19h5.6v2.6h.1a6.2 6.2 0 0 1 5.6-3.1c6 0 7.1 3.9 7.1 9.1Z" data-name="icons Q2" /></g></svg>
										</a>
									</div>
								</div>
								)}
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}

export default NavBar