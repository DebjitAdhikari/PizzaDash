import { useDispatch, useSelector } from "react-redux"
import IncreaseDecreaseElement from "./IncreaseDecreaseElement"
import { addCartItem, deleteCartItem } from "../slice/cartSlice"

function MenuItem({pizza,notifyAdded,notifyDeleted}) {
    const dispatch=useDispatch()
    
    const theCart=useSelector(state=>state.cart.cart)
    const isInCart=theCart.some(item=>item.pizzaId===pizza.id)
    const currentItem=theCart.find(item=>item.pizzaId===pizza.id)
    function handleAddtoCart(){
        const newItem={
            pizzaId:pizza.id,
            name:pizza.name,
            quantity:1,
            unitPrice:pizza.unitPrice,
            totalAmount:pizza.unitPrice,
            imageUrl:pizza.imageUrl
        }
        dispatch(addCartItem(newItem))
    }
    function handleDeleteCartItem(){
        console.log(pizza.id)
        dispatch(deleteCartItem(Number(pizza.id)))
    }
    return (
        <li className="flex  py-4 gap-4 border-b-[0.5px] border-slate-500">
                <img className="sm:w-[150px] sm:h-[150px] w-[90px] h-[90px]" src={pizza.imageUrl} alt="pizzaimage"></img>
                <div className="space-y-3">
                    <h1 className="sm:text-3xl text-lg font-semibold ">{pizza.name}</h1>
                    <p className="capitalize italic sm:text-xl text-sm font-light">{pizza.ingredients.join(", ")}</p>
                    <p className="sm:font-bold font-semibold sm:text-2xl">₹ {pizza.unitPrice}</p>
                    <div className="flex flex-wrap-reverse sm:gap-2 gap-1 items-center max-w-[500px] justify-between">
                        
                        {
                            pizza.soldOut&&<div className="bg-red-500 text-white px-2 w-fit rounded-full">Sold Out</div>
                        }
                        {
                            !pizza.soldOut && !isInCart &&
                            <button
                            onClick={()=>{
                                handleAddtoCart()
                                notifyAdded()
                            }}
                             className="bg-yellow-400 text-slate-700  hover:bg-yellow-500 text-sm sm:font-medium hover:text-white 
                            px-2 sm:px-3 py-2 rounded-full" >Add to Cart</button>
                        }
                        {
                            !pizza.soldOut && isInCart &&
                            <>
                            <button
                            onClick={()=>{
                                handleDeleteCartItem()
                                notifyDeleted()
                            }
                            }
                            className="bg-yellow-400 text-slate-700 hover:bg-yellow-500 text-sm 
                            sm:font-medium hover:text-white px-2 sm:px-3 py-2 rounded-full">
                            <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" strokeWidth="2.1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                            </button>
                            <IncreaseDecreaseElement currentItem={currentItem}></IncreaseDecreaseElement>
                            </>
                        }
                        {/* for add to cart */}
                        {/* <button className="bg-yellow-400 text-slate-700  hover:bg-yellow-500 text-sm sm:font-medium hover:text-white 
                        px-2 sm:px-3 py-2 rounded-full">Add to Cart</button> */}
                        
                        {/* for sold out */}
                        {/* <div className="bg-red-500 text-white px-2 w-fit rounded-full">Sold Out</div> */}
                        
                        {/* after adding to cart */}
                         {/* <button
                            onClick={handleDeleteCartItem}
                         className="bg-yellow-400 text-slate-700 hover:bg-yellow-500 text-sm 
                        sm:font-medium hover:text-white px-2 sm:px-3 py-2 rounded-full">
                        <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" strokeWidth="2.1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                        </button> */}
                        {/*
                        <IncreaseDecreaseElement></IncreaseDecreaseElement>
                         */}
                    </div>
                </div>
            </li>
    )
}

export default MenuItem
