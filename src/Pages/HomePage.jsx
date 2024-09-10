import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import HomePageForm from "../components/HomePageForm"
import KeepExploring from "../components/KeepExploring"

function HomePage() {
  const isUserName=useSelector(state=>state.user.userName)!==""
    return (
      <div>
        <div className="relative bg-home-background-image bg-cover bg-center w-full min-h-[90dvh] px-4">
          <div className=' text-white text-center'>
            <h1 className='sm:text-5xl break-words text-4xl text-[#20f335] tracking-wider  font-medium pt-[50px] sm:pt-[90px] '>
              Welcome to PizzaDash!   
            </h1>
            <p className='sm:mt-[50px] mt-[30px] mb-[30px] text-xl sm:text-2xl max-w-[600px] font-light tracking-wide leading-10 m-auto'>
              Order your favorite pizzas easily and enjoy a delicious meal in no time!
            </p>
          </div>
          {isUserName?<KeepExploring></KeepExploring>:<HomePageForm></HomePageForm>}
          
        </div>
        <Footer></Footer>
      </div>
    )
}

export default HomePage
