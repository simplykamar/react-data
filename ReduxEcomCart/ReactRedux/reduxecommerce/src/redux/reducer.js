import { ADD_TO_CART, REMOVE_FROM_CART, Empty_CART } from './constant'


export const cartData = (data=[],action) => {
	console.log("reducer called",action)
	switch(action.type){
	case ADD_TO_CART:
		return [action.data,...data]
	case REMOVE_FROM_CART:
		console.log("remove cart reducer called",action)
		const remainingData = data.filter((item)=>item.id!==action.data)
		console.log("remainingData",remainingData)
		// data.length = data .length?data.length-1:[];
		return [...remainingData]
	case Empty_CART:
		console.log("empty cart reducer called")
		data = []
		return [...data]
	default : 
		return data
	}
} 
