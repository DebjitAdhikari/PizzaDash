import { useNavigate, useRouteError } from "react-router-dom"

function ErrorPage() {
    const navigate=useNavigate()
    const err=useRouteError()
    console.log(err)
    return (
        <div className="bg-slate-200 w-full h-[100vh]">
            <button onClick={()=>navigate(-1)} className="fixed z-[100] top-[70px] sm:top-[84px] sm:left-9 left-2 bg-yellow-500
       hover:bg-yellow-300 text-2xl rounded-full px-2 sm:py-1">&larr;</button>
            <div className="w-full  sm:py-6 py-9 px-3 items-center text-center">
                <h1 className="sm:text-2xl  font-medium text-red-500">{err?.data || err?.error||"Something Wrong Happened"}</h1>
            </div>

        </div>
    )
}

export default ErrorPage
