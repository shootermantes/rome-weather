export default function(state={}, action){

	switch(action.type){
		case 'GET_FIVE_DAY':
			
			return  Object.assign( {}, state, {
				daysList: action.payload
			})

		default:
			return state
	}

	return state;
}