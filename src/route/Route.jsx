import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import Home from "../Home/Home";
import Allcourse from "../component/Allcourse/Allcourse";
import Signup from "../component/Signup/Signup";
import Addcourse from "../component/AddCourse/Addcourse";
import DetailCourse from "../component/Allcourse/DetailCourse";
import Appliedstudents from "../component/Allcourse/Appliedstudents";
import Myclasses from "../component/Myclasses/Myclasses";
import Privateroute from "./Privateroute";
import Adminroute from "./Adminroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Allcourse></Allcourse>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/add',
        element: <Adminroute>   <Addcourse></Addcourse></Adminroute>
      },
      {
        path: '/detail/:id',
        element: <Privateroute> <DetailCourse></DetailCourse>  </Privateroute>,
        loader: ({ params }) => fetch(`https://eduhub-ndns.onrender.com/course/${params.id}`)
      },
      {
        path: '/applied/:id',
        element: <Adminroute> <Appliedstudents /> </Adminroute>,
        loader: ({ params }) => fetch(`https://eduhub-ndns.onrender.com/course/${params.id}`)
      },
      {
        path: '/myclass',
        element: <Privateroute><Myclasses /> </Privateroute>,

      },
    ]
  },
]);

export default router;