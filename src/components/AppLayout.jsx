import { NavLink, Outlet, useLocation, useNavigate, useNavigation } from "react-router-dom"
import Loader from "./Loader"
import { useSelector } from "react-redux"
import UserLogo from "./UserLogo"
import { useState } from "react"
import DropDownMenu from "./DropDownMenu"

function AppLayout() {
  const [showMenu,setShowMenu]=useState(false)
  const [currentActive,setCurrentActive]=useState(null)
  const navigate=useNavigate()
  const userName=useSelector(state=>state.user.userName)  
  const navigation=useNavigation()
  const isLoading=navigation.state==="loading"
  const whatPage=useLocation()
  // console.log(whatPage.pathname)
    return (
        <div className='font-poppins relative'>
      {/* nav */}
      <div className="bg-[#f9972e] flex fixed z-[100] top-0 w-full sm:justify-around justify-between px-2 sm:h-20 h-16 items-center">
        <h1 onClick={()=>navigate("/")} className="md:text-3xl text-2xl  text-white font-semibold hover:cursor-pointer"><span className='bg-white rounded-full mr-1'>🍴</span>PizzaDash</h1>
        <ul className="hidden sm:flex gap-2 sm:gap-1 md:gap-4 sm:text-lg md:text-xl text-white ">
          <NavLink to="/" className='hover:text-orange-600 cursor-pointer hover:bg-slate-50 rounded-md px-2 py-1 transition-colors duration-200'>Home</NavLink>
          <NavLink to="/menu" className='hover:text-orange-600 cursor-pointer hover:bg-slate-50 rounded-md px-2 py-1 transition-colors duration-200'>Menu</NavLink>
          <NavLink to="/cart" className='hover:text-orange-600 cursor-pointer hover:bg-slate-50 rounded-md px-2 py-1 transition-colors duration-200'>Cart</NavLink>
          <NavLink to="/orders" className='hover:text-orange-600 cursor-pointer hover:bg-slate-50 rounded-md px-2 py-1 transition-colors duration-200'>My Orders</NavLink>
        </ul>
        {/* profile  */}
        {
          userName!==""&&
        <UserLogo userName={userName}></UserLogo>
        }
        {/* hamburger menu */}
        <div className='w-[48px] h-[48px] sm:hidden rounded-2xl text-center flex items-center border-slate-700 hover:cursor-pointer'>
            {
              showMenu?<button onClick={()=>setShowMenu(false)} className='w-[35px] h-[35px] mx-auto'><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-49 -49 588.00 588.00" xmlSpace="preserve" stroke="#ffffff" strokeWidth="46.55"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.9800000000000001"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
              </button>
              :<button onClick={()=>setShowMenu(true)} className='w-[48px] h-[48px]'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
            }
        </div>
      </div>

      {/* dropdown menu */}
      {
        showMenu && <DropDownMenu userName={userName} setShowMenu={setShowMenu}
         currentActive={currentActive} setCurrentActive={setCurrentActive}></DropDownMenu>
      }      
      
      <div className="relative bg-slate-200 min-h-[100vh] sm:mt-[80px] mt-[64px]">
      {
        whatPage.pathname!=="/"&&
      <button onClick={()=>navigate(-1)} className="fixed z-[100] top-[70px] sm:top-[84px] sm:left-9 left-2 bg-yellow-500
       hover:bg-yellow-300 text-2xl rounded-full px-2 sm:py-1">&larr;</button>
      }
      
        
         {
          isLoading?<Loader></Loader>:<Outlet></Outlet>
         } 
      </div>
    </div>
    )
}

export default AppLayout
