import { useNavigate } from "react-router-dom"
import {generateOrderString} from "../helper/helper"

function OrderItem({order}) {
    const itemsString=generateOrderString(order)
    const navigate=useNavigate()
    return (
        <div>
            <li onClick={()=>navigate(`/order/${order.orderId}`)} className="sm:text-lg border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] px-2 sm:py-4 py-2 rounded-b-md hover:bg-slate-300 border-black cursor-pointer">
                <h1 className="font-semibold">Order id: <span className="font-light">{order.orderId}</span></h1>                
                <p className="font-light sm:font-semibold">{itemsString}</p>
                <p className="font-semibold">Price: <span className="text-green-600">₹{order.billAmount}</span></p>
            </li>
        </div>
    )
}

export default OrderItem
