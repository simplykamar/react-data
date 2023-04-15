import {takeEvery,put} from 'redux-saga/effects'
import {LIST_PRODUCT,SET_PRODUCT_LIST,SEARCH_PRODUCT} from './constant';

function* getProducts(){
	let data = yield fetch("http://localhost:3100/products");
	data = yield data.json();
	console.log("api here",data)
	yield put({type:SET_PRODUCT_LIST,data:data})

}
function* searchProducts(data){
	let result = yield fetch(`http://localhost:3100/products?q=${data.query}`);
	result = yield result.json();
	console.log("search api here",result)
	yield put({type:SET_PRODUCT_LIST,data:result})

}

function* productSaga(){
	yield takeEvery(LIST_PRODUCT,getProducts)
	yield takeEvery(SEARCH_PRODUCT,searchProducts)

}

export default productSaga;