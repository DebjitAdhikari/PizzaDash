import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import IncreaseDecreaseElement from "../components/IncreaseDecreaseElement"
import EmptyCart from "../components/EmptyCart"
import { useNavigate } from "react-router-dom"

// const items=[
//     {
//         pizzaId:1,
//         name:"Montana",
//         quantity: 1,
//         unitPrice:100,
//         totalAmount:200,
//         imageUrl:"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
//     },
//     {
//         id:2,
//         name:"Romana",
//         quantity: 2,
//         unitPrice:140,
//         totalAmount:900,
//         imageUrl:"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
//     },
//     {
//         id:3,
//         name:"Work keinddki ok",
//         quantity: 14,
//         unitPrice:8000,
//         totalAmount:2002,
//         imageUrl:"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
//     },
// ]
function Cart() {
    const items=useSelector(state=>state.cart.cart)
    const totalBill=items.reduce((acc,item)=>acc+item.totalAmount,0)
    const navigate=useNavigate()
    return (
        <div className=" px-4 py-9 text-black">
            
            <div className="relative max-w-[800px] mx-auto">
                <h1 className="sm:text-2xl font-semibold bg-slate-300 max-w-[190px] mt-2 px-4 py-2 rounded-md mb-2">Your Cart:</h1>
                {
                    items.length>0?
                    <>
                        <ul className="px-2 py-3 max-h-[450px] scroll-Div overflow-y-auto">
                        {
                            items.map(item=><CartItem item={item} key={item.pizzaId}></CartItem>)
                        } 
                        </ul>
                        <div className="w-full ">
                            <h1 className="mt-2 text-2xl font-semibold ">Total: <span className="text-green-500">₹ {totalBill}</span></h1>
                            <button onClick={()=>navigate("/new-order")} className="bg-yellow-400 hover:bg-yellow-500 mt-1 px-2 py-2 rounded-full">Order Now</button>
                        </div>
                    </>:<EmptyCart></EmptyCart>
                }
                
            </div>

        </div>
    )
}

export default Cart
