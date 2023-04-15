import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {useState} from 'react';
import {useParams} from 'react-router-dom'; 
import useFetch from '../../hooks/useFetch';
import './Product.css';
import {useDispatch} from 'react-redux';
import { addToCart,removeFromCart,resetCart } from '../../redux/cartSlice';
import MyLoader from '../../components/Loader/Loader'
const Product = () => {
	const id = parseInt(useParams().id);
	const dispatch = useDispatch();
	const [ selectedImage, setSelectedImage ] = useState("img");
	const [ quantity, setQuantity ] = useState(1);
	const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

	return <div className="container-fluid">
		{ 
		!loading ?
			<div className="row mt-4">
				<div className="col-lg-1 col-md-1 col-sm-12 col-12 ">
					<img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt="product-img" onClick={()=>{setSelectedImage("img")}} className="img-fluid cursor-pointer select-img" />
					<img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt="product-img" onClick={()=>{setSelectedImage("img2")}} className="img-fluid cursor-pointer select-img mt-3" />
					<img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img3?.data?.attributes?.url} alt="product-img" onClick={()=>{setSelectedImage("img3")}} className="img-fluid cursor-pointer select-img mt-3" />
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-12">
					<img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImage]?.data?.attributes?.url} alt="product-img" className="img-fluid" />
				</div>
				<div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
					<h2 className="text-dark">{data?.attributes?.title}</h2>
					<h4 className="text-price">&#8377;{data?.attributes?.price}</h4>
					<p>{data?.attributes?.desc}
					</p>
					<button className="btn btn-light" onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)} >-</button>
						<span>{quantity}</span>
					<button className="btn btn-light" onClick={()=>setQuantity((prev)=>prev+1)} >+</button>
					<div className="mt-4">
						<button className="btn btn-violet px-4" onClick={()=>dispatch(addToCart({
							id:data?.id,
							title:data?.attributes?.title,
							price:data?.attributes?.price,
							desc:data?.attributes?.desc,
							quantity,
							img:data?.attributes?.img?.data?.attributes?.url
						}))}> <AddShoppingCartIcon/> Add to Cart</button>
					</div>
					<div className="text-violet mt-4">
						<span className="cursor-pointer"><FavoriteBorderIcon/> ADD TO WISHLIST</span>
						<span className="ms-3 cursor-pointer"><CompareArrowsIcon/> ADD TO COMPARE</span>
					</div>
					<div className="text-gray mt-5">
						<p>Vendor: Polo</p>
						<p>Product Type: T-Shirt</p>
						<p>Tag: T-Shirt, Woman, Top</p>
					</div><hr className="my-4"/>
					<div className="text-gray">
						<p>DESCRIPTION</p><hr className="w-50"/>
						<p>ADDITIONDAL INFORMATION</p><hr className="w-50"/>
						<p>FAQ</p>
					</div>
				</div>
			</div>
			: <MyLoader/>
		}
		</div>
}

export default Product;