const initialState = false;

export const reducer = (state=initialState,action) => {
	switch(action.type){
		case 'darkmode':
				return !state;
		default : return state
	}
}