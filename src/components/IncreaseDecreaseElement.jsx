import { useDispatch } from "react-redux"
import { decreaseItem, increseItem } from "../slice/cartSlice"

function IncreaseDecreaseElement({currentItem}) {
    const dispatch=useDispatch()
    return (
        <div className="sm:space-x-3 space-x-2">
            <button onClick={()=>dispatch(decreaseItem(currentItem.pizzaId))} className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold px-2 text-black rounded-full">-</button>
            <span className="font-medium">{currentItem.quantity}</span>
            <button onClick={()=>dispatch(increseItem(currentItem.pizzaId))} className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold px-2 text-black rounded-full">+</button>
        </div>
    )
}

export default IncreaseDecreaseElement
