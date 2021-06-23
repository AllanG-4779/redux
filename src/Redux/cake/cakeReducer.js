import { BUY_CAKE, ADD_CAKE } from "./CakeType";
const init = { numberCake: 1, alert: true };

const cakeReducer = (state = init, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberCake: state.numberCake - 1,
      };
    case ADD_CAKE:
      return {
        ...state,
        numberCake: state.numberCake + action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
