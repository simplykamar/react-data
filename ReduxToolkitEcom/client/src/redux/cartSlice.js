import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	products: [],

}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state,action) => {
			const item = state.products.find((item)=>item.id===action.payload.id);
			if(item){
				item.quantity += action.payload.quantity;
			}else{
				state.products.push(action.payload);
			}
		},
		removeFromCart: (state,action) => {
			state.products = state.products.filter((item)=>item.id!==action.payload)
		},
		resetCart: (state) => {
			state.products = []
		}
	}
});
export const { addToCart,removeFromCart,resetCart } = cartSlice.actions;

export default cartSlice.reducer;



