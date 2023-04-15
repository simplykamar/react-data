import React from 'react';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setProducts} from '../container/redux/actions/productAction';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {
	const dispatch = useDispatch();
	const fetchProduct = async () => {
			const response = await axios.get('https://fakestoreapi.com/products')
            	.catch((err)=>{
            		console.log("Err",err)
            	});
            dispatch(setProducts(response.data))

	} 
	useEffect(()=>{
		fetchProduct();
	},[]);
	return(
		<div>
			<ProductComponent/>

		</div>
		);
}

export default ProductListing;