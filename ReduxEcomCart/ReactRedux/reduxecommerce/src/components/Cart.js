import {useSelector} from 'react-redux';


const Cart = () => {
	const cardData = useSelector((state)=>state.cartData);
	let amount = cardData.length && cardData.map(item=>item.price).reduce((prev,next)=>prev+next)
	console.warn(amount)
	return <div>
			<h1>Cart Items</h1>
			<div className="cart-container">
				<table className="cart-table">
					<tr>
						<th>Name</th>
						<th>photo</th>
						<th>Color</th>
						<th>Price</th>
					</tr>
					{
						cardData.map((item)=><tr>
							<td>{item.name}</td>
							<td><img src={item.photo} width="100" height="100"/></td>
							<td>{item.color}</td>
							<td>{item.price}</td>

							</tr>
							)
					}
				</table>
				<div className="price-details">
				<div className=""><span>Amount: </span><span>908933</span></div>
				<div className=""><span>Total: </span><span>908933</span></div>

			</div>
			</div>
						
	</div>

}

export default Cart;