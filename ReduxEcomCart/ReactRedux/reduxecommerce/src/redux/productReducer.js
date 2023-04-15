import {LIST_PRODUCT,SET_PRODUCT_LIST} from './constant';


export const productData = (data=[],action) => {
	switch(action.type){
		// case LIST_PRODUCT:
		// 	console.log("LIST_PRODUCT")
		// 	return [action.data]
		case SET_PRODUCT_LIST:
			console.log("SET_PRODUCT_LIST",action.data)
			return [...action.data]
		default:
			return data
	}
}