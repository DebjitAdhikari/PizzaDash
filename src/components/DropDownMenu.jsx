
import { useNavigate } from "react-router-dom"

function DropDownMenu({userName,setShowMenu,currentActive,setCurrentActive}) {
    const navigate=useNavigate()
    return (
        <div className='bg-[#2f2f2f] fixed text-white max-w-[90vw] min-w-[70vw] min-h-[100px] max-h-[60vh]
       z-[110] right-0 overflow-y-auto scroll-Div  border-slate-400 border-l-[0.5px] 
      border-b-[0.5px] rounded-b-lg'>
        
          <div className='flex flex-wrap items-start gap-3 border-b-[0.5px] ml-2 border-slate-500 py-2 px-3 '>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <span className='max-w-[200px] break-words font-mono text-slate-400'>{userName}</span>
          </div>
        <ul className='px-3 py-2 space-y-2'>
          <li onClick={
            ()=>{
                setCurrentActive(0)
                setShowMenu(false)
                navigate("/")
            }}
            className={currentActive===0 ? "underline underline-offset-2":""} 
            >Home</li>
          <li onClick={
            ()=>{
                setCurrentActive(1)
                setShowMenu(false)
                navigate("/menu")
            }}
            className={currentActive===1 ? "underline underline-offset-2":""} >Menu</li>
          <li onClick={
            ()=>{
                setCurrentActive(2)
                setShowMenu(false)
                navigate("/cart")
            }}
            className={currentActive===2 ? "underline underline-offset-2":""} >Cart</li>
          <li onClick={
            ()=>{
                setCurrentActive(3)
                setShowMenu(false)
                navigate("/orders")
            }}
            className={currentActive===3 ? "underline underline-offset-2":""} >My Orders</li>
        </ul>
      </div>
    )
}

export default DropDownMenu
