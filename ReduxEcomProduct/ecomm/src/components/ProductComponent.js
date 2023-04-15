import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './ProductDetail.css';

const ProductComponent = () => {
	let products = useSelector((state)=>state.productReducer.products);
	let p = useSelector((state)=>state.productReducer);
	console.log("ind",p)

	return(
	<div className="container">
		<div className="row mt-5">
		{
		products.map((product)=>
			<div className="col-lg-3" key={product.id}>
			<Link to={`/product/${product.id}`} className="text-decoration-none text-dark ">
			 <div className="card h-75 shadow product-card"  >
			  <img src={product.image} className="card-img-top h-50" alt={product.title}/>
			  <div className="card-body">
			    <h5 className="card-title">{product.title}</h5>
			    <div className="fw-bold text-success">$ {product.price}</div>
			    <small className="text-secondary">{product.category}</small>
	   		 </div>
	   		 </div>
	   		 </Link>
			</div>
				)
		}
	</div>	
	</div>
	);
}

export default ProductComponent;


