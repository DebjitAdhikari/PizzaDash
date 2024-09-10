import { useState } from "react"
import { useDispatch } from 'react-redux';
import { createUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";

function HomePageForm() {
    const [userName,setUserName]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                dispatch(createUser(userName))
                setUserName("")
                navigate("/menu")
            }} className=' sm:max-w-[400px] max-w-[300px] pb-10 mx-auto flex flex-col'>
          <input value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your name...' required 
          className='px-2 sm:px-5 sm:py-4 py-2 rounded-full sm:text-lg bg-slate-300 placeholder:text-slate-600 focus:outline-none'></input>
          <button className='px-4 py-1 sm:py-4 text-slate-700 font-semibold bg-[#45e267] hover:bg-green-200 
          rounded-full max-w-[120px] mx-auto mt-4'>Start <span className='text-2xl'>&rarr;</span></button>
        </form>
        </div>
    )
}

export default HomePageForm
