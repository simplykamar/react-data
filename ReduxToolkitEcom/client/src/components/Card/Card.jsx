import React from 'react';
import './Card.css';

const Card = (props) => {
	return (
			<div className="card h-100">
				{/* {props.item.attributes.isNew && <span>New Season</span>} */}
				<div className="inner">
					<img src={process.env.REACT_APP_UPLOAD_URL+props.item.attributes.img.data.attributes.url} className="card-img-top main-img" />
					<img src={process.env.REACT_APP_UPLOAD_URL+props.item.attributes.img2.data.attributes.url} className="card-img-top second-img" />
				</div>
				<div className="card-body">
				<h5 className="card-title">{props.item.attributes.title.slice(0,50)}...</h5>
				<p><span className="text-secondary">
						<del>&#8377;{props.item.attributes.price+20}</del>
				   </span> 
				   <span className="fw-bold ms-2 text-price">&#8377; {props.item.attributes.price}</span>
				</p>
				</div>
			</div>
			);
		
}

export default Card;