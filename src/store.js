import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/userSlice"
import cartReducer from "./slice/cartSlice"
import orderListReducer from "./slice/orderlistSlice"

const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer,
        order:orderListReducer
    }
})
export default store