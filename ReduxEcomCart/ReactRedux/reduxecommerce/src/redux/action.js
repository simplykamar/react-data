import { ADD_TO_CART, REMOVE_FROM_CART, Empty_CART } from './constant'

export const addToCart = (data) => {
	console.log("add to cart action called",data)
	return {
		type:ADD_TO_CART,
		data
	};
}

export const removeFromCart = (data) => {
	console.log("remove cart action called")
	return {
		type:REMOVE_FROM_CART,
		data
	}
}
export const emptyCart = ()=> {
	console.log("empty cart")
	return {
		type:Empty_CART	
	}
}