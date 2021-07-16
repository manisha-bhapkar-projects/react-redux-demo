import { combineReducers } from 'redux';
import cakeReducer from './cakeReducer';
import iceCreamReducer from './iceCreamReducer'; 
import APIReducer from './APIReducer'; 


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: APIReducer
})

export default rootReducer;




