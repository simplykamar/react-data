import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';

import {Outlet} from 'react-router-dom';


const Layout = () => {
	return <div>
			<Navbar/>
			{/* <Home/> */}
			<div className="main-section">
				<Outlet/>
			</div>
			<Footer/>
		</div>
}

export default Layout;