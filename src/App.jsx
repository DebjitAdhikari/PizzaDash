import 'react-toastify/dist/ReactToastify.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import HomePage from './Pages/HomePage';
import AppLayout from './components/AppLayout';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import OrderForm from './Pages/OrderForm';
import OrderDetails from './Pages/OrderDetails';
import OrderList from './Pages/OrderList';
import ErrorPage from './components/ErrorPage';
import {loader as menuLoader} from "./Pages/Menu"
import {action as formAction} from "./Pages/OrderForm"
import {loader as orderLoader} from "./Pages/OrderDetails"


const router=createBrowserRouter([
  {
    element:<AppLayout></AppLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>,
      },
      {
        path:"/menu",
        element:<Menu></Menu>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:menuLoader,
      },
      { 
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/new-order",
        element:<OrderForm></OrderForm>,
        action:formAction
      },
      {
        path:"/order/:orderId",
        element:<OrderDetails></OrderDetails>,
        loader:orderLoader
      },
      {
        path:"/orders",
        element:<OrderList></OrderList>
      }
    ]
  }
])
function App(){
  return <RouterProvider router={router}>

  </RouterProvider>
}
export default App

