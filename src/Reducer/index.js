import { combineReducers } from "@reduxjs/toolkit";
 
import cartReducer from "../Slices/CartSlice"
import userReducer from "../Slices/UserSlice"

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
})
 
export default rootReducer