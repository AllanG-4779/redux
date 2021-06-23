import { combineReducers } from "redux";
import bookReducer from "./cake/booksReducer";
import breadReducer from "./cake/BreadReducer";
import cakeReducer from "./cake/cakeReducer";

const allreducers = combineReducers({
    bread:breadReducer,
    cake:cakeReducer,
    book:bookReducer
})
export default allreducers