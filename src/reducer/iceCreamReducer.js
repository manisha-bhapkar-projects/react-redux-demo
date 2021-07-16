import { BUY_ICECREAM } from '../action/type';


const initialState = {
    numOfIcecreams: 20,
    noofcake:500

}


const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
            break;

        default:
            return state
    }
}

export default iceCreamReducer;