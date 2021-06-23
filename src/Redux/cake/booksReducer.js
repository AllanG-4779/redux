import { ADD_HISTORY, ADD_MATH, ADD_SCIENCE } from "./bookActionTypes";

const mybooks = { math: 5, history: 43, science: 20 };
const bookReducer = (state = mybooks, action) => {
  switch (action.type) {
    case ADD_SCIENCE:
      return {
        ...state,
        science: state.science + action.payload,
      };
    case ADD_MATH:
      return {
        ...state,
        math: state.math + action.payload,
      };
    case ADD_HISTORY:
      return {
        ...state,
        history: state.history + action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;
