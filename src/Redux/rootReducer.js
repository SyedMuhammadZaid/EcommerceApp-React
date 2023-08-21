import { productData,cartData,displayData } from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({productData,cartData,displayData});

export default rootReducer