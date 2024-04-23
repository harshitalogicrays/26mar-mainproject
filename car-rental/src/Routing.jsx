import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import About from "./features/About";
import Contactus from "./features/Contactus";
import Cars from "./features/Cars";
import Login from "./features/Login";
import Register from "./features/Register";
import PageNotFound from "./features/PageNotFound";
import { AdminLayout, ProtectedAdmin, UserLayout } from "./features/hiddenlinks";
import Dashboard from "./features/Admin/Dashboard";
import AdminHeader from "./features/Admin/AdminHeader";
import AddCar from "./features/Admin/Car/AddCar";
import AddBrand from "./features/Admin/AddBrand";
import ViewBrand from "./features/Admin/ViewBrand";
import AddModel from "./features/Admin/AddModel";
import ViewModel from "./features/Admin/ViewModel";
import ViewCar from "./features/Admin/Car/ViewCar";
import Services from "./features/Services";
import CarDetails from "./features/CarDetails";
import Rent from "./features/Rent";
import FilterCars from "./features/FilterCars";
import BookingDetails from "./features/BookingDetails";
import BookingPayment from "./features/BookingPayment";
import Thankyou from "./features/Thankyou";
import Rentals from "./features/Admin/Rentals";
import MyBookings from "./features/MyBookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element:<UserLayout> <Home /> </UserLayout>},
        {path:"about", element:<UserLayout> <About/></UserLayout>},
        {path:'contact', element:<UserLayout><Contactus/></UserLayout>},
        {path:"cars",element:<UserLayout><Cars/></UserLayout>},
        {path:"services",element:<UserLayout><Services/></UserLayout>},
        {path:"login" , element:<Login/>},
        {path:"register",element:<Register/>},
        {path:"car-details/:id",element:<UserLayout><CarDetails/></UserLayout>},
        {path:"rent",element:<Rent/>},
        {path:"filtercars",element:<UserLayout><FilterCars/></UserLayout>},
        {path:"booking",element:<UserLayout><BookingDetails/></UserLayout>},
        {path:"bookingpayment",element:<UserLayout><BookingPayment/></UserLayout>},
        {path:'thankyou',element:<Thankyou/>},
        {path:'mybookings',element:<UserLayout><MyBookings/></UserLayout>},
        {path:'admin' , element:<Dashboard/>,
      children:[
          {path:'',element:<Dashboard/>},
          {path:'addbrand',element:<AddBrand/>},
          {path:'viewbrand',element:<ViewBrand/>},
          {path:'editbrand/:id',element:<AddBrand/>},
          {path:'addmodel',element:<AddModel/>},
          {path:'viewmodel',element:<ViewModel/>},
          {path:'editmodel/:id',element:<AddModel/>},
          {path:'addcar',element:<AddCar/>},
          {path:'viewcar',element:<ViewCar/>},
          {path:'editcar/:id',element:<AddCar/>},
          {path:'rentals',element:<Rentals/>}
      ]},

        {path:'*',element:<PageNotFound/>}
      ],
    },
  ]);
  export default router