import {createSlice} from "@reduxjs/toolkit"
const initialState={
    orders:[]
}
const orderlistSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{
        addToOrderList(state,action){
            state.orders.push(action.payload)
        }
    }
})
export const{addToOrderList} =orderlistSlice.actions
export default orderlistSlice.reducer