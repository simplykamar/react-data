import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/cartSlice';

const Cart = () => {
	const products = useSelector((state)=>state.cart)
	const dispatch = useDispatch();
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	}
	console.log("in cart",products)
	return (
		<div className="container">
			<h1>Cart Page</h1>
			{
				products.map((product)=>{
					return <div className="list-group" key={product.id}>
					<li className="list-group-item d-flex justify-content-between">
						<div><img src={product.image} alt={product.image} className="img-fluid" width="100" height="100" /></div>
						<div>{product.title}</div>
						<div className="text-success fw-bold">$ {product.price}</div>
						<div><button className="btn btn-danger" onClick={()=>handleRemove(product.id)}>Remove</button></div>

					</li>
					</div>
					})
			}
		</div>
		);
}

export default Cart;