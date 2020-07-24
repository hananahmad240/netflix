import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../netflix_logo.png';
function Navbar() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			// console.log(window.screen);
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});
		console.log(show);
	}, [show]);

	return (
		<div className={`nav ${show && 'nav_black'}`}>
			{<img src={logo} alt="" />}
		</div>
	);
}

export default Navbar;
