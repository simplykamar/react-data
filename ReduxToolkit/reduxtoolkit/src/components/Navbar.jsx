import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const Navbar = () => {
	const products = useSelector((state)=>state.cart)
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  <div className="container-fluid">
	    <a className="navbar-brand" href="#">Navbar</a>
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	      <div className="navbar-nav">
	        <Link className="nav-link" to="/">Home</Link>
	        <Link className="nav-link" to="/cart">Cart <span className="fw-bold  px-2 badge bg-primary">{products.length}</span></Link>
	      </div>
	    </div>
	  </div>
	</nav>
);
}

export default Navbar;