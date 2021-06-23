import { BUY_BREAD } from "./BreadTypes";

const init = { breadNum: 20, alert: false };
const breadReducer = (state = init, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        breadNum: state.breadNum - 1,
      };
    default:
      return state;
  }
};
export default breadReducer;
