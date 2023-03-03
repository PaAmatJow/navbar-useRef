import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './assets/logo.svg';

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

	const showLinksHandler = () => {
		setClicked(!clicked);
		setShowLinks(!showLinks);
	};

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

	return (
		<nav>
			<div className='md:max-w-[1170px] md:mx-auto md:flex md:items-center md:justify-between md:p-4'>
				<div className='flex items-center justify-between p-4 md:p-0'>
					<img src={logo} alt='logo' />
					<button
						className={`text-2xl text-cyan-600 ${
							clicked ? 'rotate-90 text-teal-900' : ''
						} md:hidden traansition-all duration-200`}
						onClick={showLinksHandler}
					>
						<FaBars className='h-[40px]' />
					</button>
				</div>
				<div
					className='h-0 md:!h-auto overflow-hidden transition-all duration-200' ref={linksContainerRef}
				>
					<ul className='md:flex' ref={linksRef}>
						{links.map((link) => {
							const { url, id, text } = link;
							return (
								<li key={id}>
									<a
										href={url}
										className='text-gray-800 text-lg capitalize tracking-[0.01rem] block py-2 px-4 font-semibold hover:bg-cyan-200 hover:text-cyan-800 hover:pl-6 transition-all duration-200 md:p-0 md:mx-2 md:hover:p-0 md:hover:bg-transparent'
									>
										{text}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className='hidden md:flex md:items-center md:justify-center '>
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id} className='mx-2'>
								<a
									href={url}
									className='text-cyan-600 hover:text-cyan-900 transition-all duration-200'
								>
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
