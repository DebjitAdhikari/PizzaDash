import { useState } from "react"
import { Form, redirect, useActionData, useNavigationType } from "react-router-dom"
import { isValidPhoneNumber } from "../helper/helper"
import { useSelector } from "react-redux"
import { createOrder } from "../services/apiRestaurant"
import { getAddress } from "../services/apiGeocoding"

function OrderForm() {
    const [phoneNo,setPhoneNo]=useState("")
    const [address,setAddress]=useState("")
    const cart=useSelector(state=>state.cart.cart)
    const userName=useSelector(state=>state.user.userName)
    const [customerName,setCustomerName]=useState(userName)
    const actionData=useActionData()
    async function fetchMyAddress(){
        return new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(async (pos)=>{
                const latitude=pos.coords.latitude
                const longitude=pos.coords.longitude
                try{
                    const data=await getAddress(latitude,longitude)
                    
                    const location=`${data.city}, ${data.locality}, ${data.countryName}`
                    setAddress(location)
                    resolve(data)
                }catch(err){
                    reject (new Error(err.message))
                }
            },(err)=>{
                reject(new Error(err.message))
            })
        })
    }
    return (
        <div className="relative">
            <Form method="POST" className="w-full ">
                <div className="max-w-[400px] mx-auto space-y-4 py-9 px-2">
                    <div className="flex flex-col px-2">
                        <label className="sm:text-xl font-medium">Name:</label>
                        <input name="customer"  required type="text"
                        className='px-2 sm:px-4 sm:py-3 md:px-5 md:py-4 py-2 rounded-md sm:text-lg bg-slate-300 focus:outline-none'
                        value={customerName} onChange={(e)=>setCustomerName(e.target.value)}
                        ></input>
                    </div>
                    <div className="flex flex-col px-2">
                        <label className="sm:text-xl font-medium">Phone No:</label>
                        <input name="phone" required type="text"
                        className='px-2 sm:px-4 sm:py-3 md:px-5 md:py-4 py-2 rounded-md sm:text-lg bg-slate-300 focus:outline-none'
                        value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}></input>
                        {
                            actionData?.length>0 &&
                        <p className="sm:text-sm text-xs text-red-500">{actionData[0]}</p>
                        }
                    </div>
                    <div className="flex flex-col px-2">
                        <label className="sm:text-xl font-medium">Email (optional):</label>
                        <input type="text"
                        className='px-2 sm:px-4 sm:py-3 md:px-5 md:py-4 py-2 rounded-md sm:text-lg bg-slate-300 focus:outline-none'
                        ></input>
                    </div>
                    <div className="flex flex-col px-2">
                        <label className="sm:text-xl font-medium">Address:</label>
                        <input name="address" required type="text"
                        className='px-2 sm:px-4 sm:py-3 md:px-5 md:py-4 py-2 rounded-md sm:text-lg bg-slate-300 focus:outline-none'
                        value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            fetchMyAddress()
                        }} className="self-start bg-green-500 hover:bg-green-300 hover:text-slate-600 transition-all duration-200 px-2 py-1 text-xs sm:font-semibold rounded-full mt-2 text-white">Use my location</button>
                    </div>
                    <input type="hidden" value={JSON.stringify(cart)} name="cart"></input>
                    <button className="bg-yellow-400 text-slate-700 hover:bg-yellow-500 text-sm sm:font-semibold transition-all duration-200 hover:text-white px-2 sm:px-3 py-3 font-medium rounded-full">Confirm Order</button>
                </div>
            </Form>
        </div>
    )
}
export async function action({request}){
    const formData=await request.formData()
    const data=Object.fromEntries(formData)
    console.log(data)
    const newOrder={
        ...data,
        cart:JSON.parse(data.cart),
        priority:false
    }
    console.log(newOrder)
    const error=[]
    if(!isValidPhoneNumber(data.phone))
        error.push("You must enter a valid Phone no.")
    if (error.length>0) return error
    console.log("done")
    const orderData=await createOrder(newOrder)
    console.log(orderData)
    return redirect(`/order/${orderData.id}`)
}
export default OrderForm
