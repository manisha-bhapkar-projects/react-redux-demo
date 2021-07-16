import { ADD_CAKE, BUY_CAKE } from "../action/type";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  console.log("actioncake", action);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
      break;

    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
      break;

    default:
      return state;
  }
};

export default cakeReducer;
