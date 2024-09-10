import { useNavigate } from "react-router-dom"

function KeepExploring() {
  const navigate=useNavigate()
    return (
        <div className="w-full flex justify-center pb-3">
          <button onClick={()=>navigate("/menu")} className='px-2 py-2  sm:py-4 text-slate-700 font-medium sm:font-semibold sm:text-md text-sm bg-[#45e267] hover:bg-green-200 
          rounded-full max-w-[200px]  mt-4'>Keep exploring <span className='text-2xl'>&rarr;</span></button>
        </div>
    )
}

export default KeepExploring
