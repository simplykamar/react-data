import React from 'react';
import Card from '../Card/Card';
import {useState, useEffect} from 'react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import MyLoader from '../Loader/Loader'
import {Link} from 'react-router-dom';

const FeaturedProduct = (props) => {
	// const [ data, setData ] = useState([]);
	const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${props.typed}`);
		return <div className="container">
			<div className=" mt-5">
					<h2 className="text-capitalize">{props.typed} Products</h2>
			</div>
			<div className="row my-5">
		{	data?
				data.map((product)=>{
						return <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-5" key={product.id}>
								<Link to={`/product/${product.id}`} className="text-dark text-decoration-none">
									<Card item={product} />
								</Link>
							</div>
						})
			:<MyLoader/>

		}
			</div>
		</div>
}

export default FeaturedProduct;