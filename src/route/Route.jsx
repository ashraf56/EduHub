import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import Home from "../Home/Home";
import Allcourse from "../component/Allcourse/Allcourse";
import Signup from "../component/Signup/Signup";
import Addcourse from "../component/AddCourse/Addcourse";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'/',
          element:<Allcourse></Allcourse>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/add',
          element:<Addcourse></Addcourse>
        }
      ]
    },
  ]);

  export default router;