import React from 'react';
// import './Card.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.css';
import {useSelector} from 'react-redux';
import {removeFromCart,resetCart} from '../../redux/cartSlice';
import {useDispatch} from 'react-redux';
import MyLoader from '../Loader/Loader'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';


const Cart = (props) => {
	const dispatch = useDispatch();
		const data = useSelector((state)=>state.cart.products);
		console.log(data)
		function getTotalPrice(){
			let total=0
			let totalPrice = data.length && data.map((item)=>(item.price*item.quantity)).reduce((prev,next)=>prev+next);
			console.log(data)
			console.log(totalPrice);
			return totalPrice;
		}
	
	return (
			<div className="card cart w-25 p-2">
		{data.length?
		<>
			<h4 className="my-3 text-dark-black">Products in your cart</h4>
				
				{
					data.map((item) => {
						return(
								<div className="" key={item.id}>
									<div className="">
										<div className="d-flex justify-content-between">
											<img src={process.env.REACT_APP_UPLOAD_URL+item.img} className="cart-img"/>
											<div className="ms-2">
											<h6 className="text-secondary">{item.title}</h6>
												<p className="text-secondary">
												{item.desc.slice(0,40)}...
												</p>
												<p className="text-success fw-bold">{item.quantity} x &#8377;{item.price}</p>
											</div>
											<span onClick={()=>dispatch(removeFromCart(item.id))}><DeleteOutlineIcon className="text-danger cursor-pointer"/></span>
											</div>
											
									</div>
								</div>
							)
					})
				}
				<div className=" my-2 d-flex justify-content-between">
					<h5 className="fw-bold text-dark-black">SUBTOTAL</h5>
					<h5 className="fw-bold text-dark-black">&#8377;{getTotalPrice()}</h5>
				</div>
				<div className="">
					<div className="text-center">
					<button className="text-center btn btn-primary px-4"> PROCEED TO CHECKOUT </button>
					</div>
					<p className="cursor-pointer text-danger mt-3" onClick={()=>dispatch(resetCart())} >Reset Cart</p>
				</div>
				</>
				:<div className="text-center">
					<h5 className="text-secondary">Empty cart.!</h5>
					<RemoveShoppingCartOutlinedIcon sx={{fontSize:'60px',textAlign:'center',color:'gray'}}/>
					</div>
		}
			</div>

			);
}

export default Cart;