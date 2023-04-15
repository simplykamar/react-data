import React from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {selectedProduct} from '../container/redux/actions/productAction';
import {useDispatch,useSelector} from 'react-redux';

const ProductDetail = () => {
	const {productId} = useParams();
	const dispatch = useDispatch();
	let product = useSelector((product)=>product.productReducer);
	const {image,title,price,description,category} = product;
	const fetchProductDetail = async ()=>{
		const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
							.catch((err)=>console.log("Err",err));
		dispatch(selectedProduct(response.data))
		}
		useEffect(()=>{
			if(productId && productId!=="")
				fetchProductDetail();
		},[productId])
 
	return(
		<div className="container">
			{Object.keys(product).length===0 ? (
				<div> ...Loading</div>
				) :(
			<div className="row">
				<div className="col-lg-6">
					<img src={image} className="img-fluid" />
				</div>
				<div className="col-lg-6">
					<h4 className="">{title}</h4>
					<p className="text-secondary">{category}</p>
					<div className="text-success fw-bold">$ {price}</div>
					<p className="">{description}</p>
					<button className="btn btn-danger">Add to Cart</button>

				</div>
			</div>
		)}

		</div>
		);

}

export default ProductDetail;
