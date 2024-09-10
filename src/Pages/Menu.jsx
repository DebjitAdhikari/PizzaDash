import { useLoaderData } from "react-router-dom"
import MenuItem from "../components/MenuItem"
import { getMenu } from "../services/apiRestaurant"
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const notifyAdded = () => toast.success('Added to Cart!', {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  });
const notifyDeleted= ()=>  toast.error('Deleted from Cart', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
function Menu() {
  useEffect(function(){
    window.scrollTo(0,0)
  },[])
  const items=useLoaderData()
    return (
       <div className="relative px-4 py-3 text-black">        
        <ul className="max-w-[800px] mx-auto ">            
            {
              items.map(pizza=><MenuItem notifyAdded={notifyAdded} notifyDeleted={notifyDeleted} pizza={pizza} key={pizza.id}></MenuItem>)
            }
        </ul>
<ToastContainer></ToastContainer>
       </div>
    )
}
export async function loader() {
  const data= await getMenu()
  return data
}
export default Menu
