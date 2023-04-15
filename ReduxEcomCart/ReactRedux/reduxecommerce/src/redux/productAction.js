import {LIST_PRODUCT,SET_PRODUCT_LIST,SEARCH_PRODUCT} from './constant';

export const listProduct = () => {
	// let data = "test"
	return {
		type : LIST_PRODUCT,
		// data

	}
}

export const searchProduct = (query) => {
	// let data = "test"
	return {
		type : SEARCH_PRODUCT,
	    query

	}
}
