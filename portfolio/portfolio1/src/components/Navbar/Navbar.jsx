import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll';
const Navbar = () => {
	return(
		<div className="container">
			<div className="n-wrapper">
				<div className="n-left">
					<div className="n-name">Kamar</div>
					<span><Toggle/></span>
				</div>
				<div className="n-right">
					<div className="n-list">
						<ul className="">
						<Link spy={true} smooth={true} to="navbar" activeClass="activeClass">
							<li>Home</li>
						</Link>
						<Link spy={true} smooth={true} to="Services" activeClass="activeClass">
							<li>Services</li>
						</Link>
						<Link spy={true} smooth={true} to="Experience" activeClass="activeClass">
							<li>Experience</li>
						</Link>
						<Link spy={true} smooth={true} to="Portfolio" activeClass="activeClass">
							<li>Portfolio</li>
						</Link>
						<Link spy={true} smooth={true} to="Testimonia"  activeClass="activeClass">
							<li>Testimonials</li>
						</Link>

						</ul>
					</div>
					<button className="btn n-btn">Contact</button>
				</div>

			</div>
		</div>
		)
}

export default Navbar;

