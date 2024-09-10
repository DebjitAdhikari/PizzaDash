import OrderItem from "../components/OrderItem"
import { useSelector } from 'react-redux';

// const orderItems=[
//     {
//         orderId:"#CffDERR24",
//         items:[
//             {
//                 name:"Montana",
//                 quantity:1
//             },
//             {
//                 name:"Romana",
//                 quantity:2
//             },
//             {
//                 name:"Joanani",
//                 quantity:3
//             }
//         ],
//         billAmount:200
//     },
//     {
//         orderId:"#CERR24",
//         items:[            
//             {
//                 name:"Romanaii",
//                 quantity:2
//             }
//         ],
//         billAmount:2400
//     },
//     {
//         orderId:"#CERRr24",
//         items:[            
//             {
//                 name:"Romanaii",
//                 quantity:2
//             },
//             {
//                 name:"zObjie",
//                 quantity:6
//             }
//         ],
//         billAmount:2400
//     }
// ]


function OrderList() {
    const orderItems=useSelector(state=>state.order.orders)
    return (
        <div className="max-w-[600px] bg-slate-200 px-4 py-10 my-auto mx-auto">
            <h1 className="text-xl underline mb-3 font-semibold">Your Orders:</h1>
            {
                orderItems.length===0?<div className="w-full sm:py-6 py-9 px-3 items-center text-center">
                <h1 className="sm:text-2xl  font-medium text-red-500">Your order list is currently empty.</h1>
            </div>:<ul className="py-3  max-h-[400px] overflow-y-auto scroll-Div">
                {
                    orderItems.map((order,i)=><OrderItem order={order} key={i}></OrderItem>)
                }
            </ul>
            }
            
        </div>
    )
}

export default OrderList
