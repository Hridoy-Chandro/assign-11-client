import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Rooms from "../Pages/Rooms/Rooms";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Components/Details";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login', 
            element: <Login></Login>
        }, 
        {
            path: 'signUp', 
            element: <SignUp></SignUp>
        },
        {
            path: 'myBookings', 
            element: <MyBookings></MyBookings>
        },
        {
            path: '/rooms/details/:id', 
            element: <Details></Details>,
            loader: ({params}) => fetch(`https://assignment-11-server-omega-sepia.vercel.app/details/${params.id}`)
        },
        {
            path: 'rooms', 
            element: <PrivateRoute>
                <Rooms></Rooms>
            </PrivateRoute>,
            loader: () => fetch('https://assignment-11-server-omega-sepia.vercel.app/rooms')
        },


      ]
    },
  ]);


  export default router;



  