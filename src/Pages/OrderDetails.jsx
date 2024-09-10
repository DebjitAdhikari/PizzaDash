import { useLoaderData, useParams } from "react-router-dom"
import {generateDateString} from "../helper/helper"
import { getOrder } from "../services/apiRestaurant"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { addToOrderList } from "../slice/orderlistSlice";
import {useSelector} from "react-redux"


function OrderDetails() {
    const data=useLoaderData()
    const dispatch=useDispatch()
    const orderList=useSelector(state=>state.order.orders)
    useEffect(function(){

        const newOrderItem={
            orderId:data.id,
            items:data.cart,
            billAmount:data.orderPrice
        }
        const orderExist=orderList.some(item=>item.orderId===data.id)
        !orderExist && dispatch(addToOrderList(newOrderItem))
    },[data,orderList,dispatch])
    return (
        <div className="max-w-[600px] bg-slate-200 px-4 py-10 my-auto mx-auto">
                <h1 className="sm:text-xl font-semibold underline max-w-[190px] py-4">Order Details:</h1>
            < div className="bg-slate-400 max-h-[400px] overflow-y-auto scroll-Div rounded-md px-4 space-y-3 py-2">
                
                    <h1 className="sm:text-xl"><span className=" px-2 rounded-md bg-slate-300">Customer Name:</span> {data.customer}</h1>
                    <h1 className="sm:text-xl"><span className=" px-2 rounded-md bg-slate-300">Order id:</span> {data.id}</h1>
                    <div className="sm:text-xl" >
                        <h1 className=" px-2 w-fit sm:text-xl rounded-md bg-slate-300">Order items:</h1>
                        <ul>
                            {data.cart.map((item,i)=><li key={i}>{item.quantity} x {item.name}</li>)}
                        </ul>
                    </div>
                    <p className="sm:text-xl"><span className=" px-2  rounded-md bg-slate-300 ">Status:</span> <span className="capitalize">{data.status}</span></p>
                    <p className="sm:text-xl"><span className=" px-2  rounded-md bg-slate-300">Delivery time:</span> {generateDateString(data.estimatedDelivery)}</p>
                    <p className="sm:text-xl"><span className=" px-2  rounded-md bg-slate-300">Amount:</span> <span className=" font-semibold">₹{data.orderPrice}</span></p>                               
            </div>
        </div>
    )
}

export async function loader({params}){
    const data=getOrder(params.orderId)
    return data
}

export default OrderDetails
