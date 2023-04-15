import {ActionTypes} from '../constants/action-types';


const initialState = {
	products:[],
};
export const productReducer = (state=initialState, action) => {
	switch(action.type){
		case ActionTypes.SET_PRODUCT:
			return {...state,products:action.payload};
		case ActionTypes.SELECTED_PRODUCT:
			return {...state,...action.payload};
		// case ActionTypes.REMOVE_SELECTED_PRODUCT:
		// 	return {};
		default:
			return state
	}
}