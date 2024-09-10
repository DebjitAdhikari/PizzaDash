import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const items={


    cart:[
        {
        pizzaId:1,
        name:"Montana",
        quantity: 1,
        unitPrice:100,
        totalAmount:200,
        imageUrl:"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
    },
    ] 
}
const initialState={
    cart:[

    ]
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem(state,action){
            state.cart.push(action.payload)
        },
        deleteCartItem(state,action){
            state.cart=state.cart.filter(item=>item.pizzaId!==action.payload)
        },
        increseItem(state,action){
            const currentItem=state.cart.find(item=>item.pizzaId===action.payload)
            currentItem.quantity+=1
            currentItem.totalAmount=currentItem.quantity*currentItem.unitPrice
        },
        decreaseItem(state,action){
            const currentItem=state.cart.find(item=>item.pizzaId===action.payload)
            currentItem.quantity-=1
            currentItem.totalAmount=currentItem.quantity*currentItem.unitPrice
            if(currentItem.quantity===0) cartSlice.caseReducers.deleteCartItem(state,{payload:action.payload})
        }
    }
})
export const {addCartItem,deleteCartItem,increseItem,decreaseItem} = cartSlice.actions
export default cartSlice.reducer