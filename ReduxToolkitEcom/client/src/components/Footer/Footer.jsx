import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
	return <div className="mt-5">
			<div className="container">
			<div className="row footer">
				<div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-5">
					<div>
						<h4>Category</h4>
						<ul className="list-unstyled">
						<li><Link to="" className="text-decoration-none text-dark">Women</Link></li>
						<li><Link to="" className="text-decoration-none text-dark">Men</Link></li>
						<li><Link to="" className="text-decoration-none text-dark">Shoes</Link></li>
						<li><Link to="" className="text-decoration-none text-dark">Accessories</Link></li>
						<li><Link to="" className="text-decoration-none text-dark">New Arrival</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-12">
					<div>
						<h4>Links</h4>
						<ul className="list-unstyled">
							<li><Link to="" className="text-decoration-none text-dark">FAQ</Link></li>
							<li><Link to="" className="text-decoration-none text-dark">Pages</Link></li>
							<li><Link to="" className="text-decoration-none text-dark">Stores</Link></li>
							<li><Link to="" className="text-decoration-none text-dark">Compare</Link></li>
							<li><Link to="" className="text-decoration-none text-dark">Cookies</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-12">
					<div>
						<h4>About</h4>
						<p>kamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						kamar shopkamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						</p>
					</div>

				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-12">
					<div>
						<h4>Contact</h4>
						<p>kamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						kamar shopkamar shopkamar shopkamar shopkamar shopkamar shopkamar shop
						</p>
					</div>
				</div>
			</div>
			</div>
			<div className="container-fluid">
				<div className="d-flex justify-content-between flex-wrap">
						<div className="">
							<h2 className="fw-bold text-primary">KamarStore</h2>
							<p> &copy;2023. All Right Reserved</p>
						</div>
					<div className="">
						<img src="../../../img/footer_payment.png" alt="payment info" className="img-fluid h-75" width="500" />
					</div>
				</div>			
			</div>			
		  </div>
}

export default Footer;