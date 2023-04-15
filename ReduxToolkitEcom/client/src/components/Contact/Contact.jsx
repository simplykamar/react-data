import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from 'react-router-dom';
const Contact = () => {
	return <div className=" container-fluid my-5">
			<div className="row bg-primary text-light py-2">
				<div className="col-lg-4 col-md-4 col-sm-12 col-12">
					<h3>BE IN TOUCH WITH US</h3>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-12">
				<form className="d-flex">
					<div className="form-group"><input type="email" placeholder="Enter your email" className="form-control"/></div>
					<div className="form-group"><button className="btn btn-dark">JOIN US</button></div>
				</form>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-12">
					<Link to="" className="text-light"><span className=""><FacebookOutlinedIcon/></span></Link>
					<Link to="" className="text-light"><span className="mx-3"><InstagramIcon/></span></Link>
					<Link to="" className="text-light"><span className=""><TwitterIcon/></span></Link>
					<Link to="" className="text-light"><span className="ms-3"><GoogleIcon/></span></Link>
				</div>
			</div>
		</div>
}

export default Contact;