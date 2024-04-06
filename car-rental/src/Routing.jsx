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

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element:<UserLayout> <Home /> </UserLayout>},
        { path:"about", element:<UserLayout> <About/></UserLayout>},
        {path:'contact', element:<Contactus/>},
        {path:"cars",element:<Cars/>},
        {path:"login" , element:<Login/>},
        {path:"register",element:<Register/>},
        {path:'admin' , element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
      children:[
          {path:'',element:<Dashboard/>},
          {path:'addcar',element:<AddCar/>}
      ]},

        {path:'*',element:<PageNotFound/>}
      ],
    },
  ]);
  export default router