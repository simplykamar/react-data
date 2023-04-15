import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../store/cartSlice';
import {fetchProducts} from '../store/productSlice';
import {STATUSES} from '../store/productSlice';
import './Products.css';

const Products = () => {
	const dispatch = useDispatch();
	const {data:products,status} = useSelector((state)=>state.product)

	useEffect(()=>{
			dispatch(fetchProducts());
	},[]);

	const handleAdd = (product) => {
			dispatch(add(product))
	}	
	if (status == STATUSES.LOADING)
		return <div>Loading....</div>

	if (status == STATUSES.ERROR)
		return <div>Something happend wrong..</div>
	return (
			<div className="products-wrapper container-fluid">
			<div className="row">
				{
					products.map((product)=>{
						return <div className="col-lg-3 my-4" key={product.id}>
							<div className="card">
								<img src={product.image} alt={product.image} className="card-img-top" />
								<div className="card-body">
									<h5 className="card-title">{product.title}</h5>
									</div>
									<div className="card-footer">
										<div className="d-flex justify-content-between">
											<p className="fw-bold text-success">$ {product.price}</p>
											<button className="btn btn-primary" onClick={()=>handleAdd(product)}>Add to Cart</button>
										</div>
									</div>
							</div>
						</div>
					})
				}

			</div>

			</div>

		);
}
export default Products;