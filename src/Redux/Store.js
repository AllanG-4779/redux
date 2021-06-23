
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger"



import allreducers from "./CombinedRed";




const store = createStore(allreducers,composeWithDevTools(applyMiddleware(logger)));
export default store;
