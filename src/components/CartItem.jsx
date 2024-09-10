import { useDispatch } from "react-redux"
import IncreaseDecreaseElement from "./IncreaseDecreaseElement"
import { deleteCartItem } from "../slice/cartSlice"

function CartItem({item}) {
    const dispatch=useDispatch()
    return (
        <div>
            <li className="flex relative items-start px-3 py-4 gap-4 border-b-[0.5px] border-black">
                        <img className="sm:w-[130px] sm:h-[130px] w-[90px] h-[90px] rounded-md" src={item.imageUrl} alt="pizza-image"></img>
                        <div className="space-y-3">
                            <h1 className="md:text-2xl sm:text-xl font-semibold break-words">{item.quantity} x {item.name}</h1>
                            <IncreaseDecreaseElement currentItem={item}></IncreaseDecreaseElement>
                            <button onClick={()=>dispatch(deleteCartItem(item.pizzaId))} className="absolute right-0 bg-yellow-400 text-slate-700 hover:bg-yellow-500 text-sm 
                                sm:font-medium hover:text-white px-2 sm:px-3 py-2 rounded-full">
                                <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" strokeWidth="2.1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                            </button>
                            <p className="md:font-medium  font-semibold sm:text-xl md:text-2xl">₹ {item.totalAmount}</p>
                        </div>
                    </li>
        </div>
    )
}

export default CartItem
