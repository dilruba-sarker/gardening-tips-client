import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Root/Root";
import Home from "../src/Pages/Home/Home";
import SignUp from "../src/Pages/SignUp/SignUp";
import Login from "../src/Pages/Login/Login";
import ShareAGardenTip from "../src/Pages/ShareAGardenTip/ShareAGardenTip";
import ExploreGardeners from "../src/Pages/ExploreGardeners/ExploreGardeners";
import MyTips from "../src/Pages/MyTips/MyTips";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<h1>error</h1>,
     children:[
        {path:'/',element:<Home></Home>},
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },{
          path:"/login",
          element:<Login></Login>
        },{
          path:"/ShareAGardenTip",
          element:<ShareAGardenTip></ShareAGardenTip>

        },{
          path:"/gardeners",
          element:<ExploreGardeners></ExploreGardeners>
        },{
          path:'/mytips',
          element:<MyTips></MyTips>
        }
     ]
  },
]);