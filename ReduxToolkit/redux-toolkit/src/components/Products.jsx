import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
	const [products,setProducts] = useState([]);
	
	useEffect(()=>{
		const getProducts =  async () => { 
			const res = await axios.get("https://fakestoreapi.com/products")
								.catch((err)=>console.log(err));
			console.log("in fetc",res.data)
			setProducts(res.data);
			console.log("in prod",products)
		};
		getProducts();
		console.log(products)
	},[]);

	return (
			<div className="products-wrapper">

{/* 			<div className="row"> */}
{/*  */}
{/* 				{ */}
{/* 					products.map((product)=>{ */}
{/* 						<div className="col-3" key={product.id}> */}
{/* 							<div className="card"> */}
{/* 								<img src={product.image} className="card-img-top" /> */}
{/* 								<div className="card-body"> */}
{/* 									<h4 className="card-title"> */}
{/* 									{product.title} */}
{/* 									</h4> */}
{/* 									<h4>{product.price}</h4> */}
{/*  */}
{/* 								</div> */}
{/* 							</div> */}
{/* 						</div> */}
{/* 					}) */}
{/* 				} */}
{/*  */}
{/* 			</div> */}

			</div>


		);
}
export default Products;