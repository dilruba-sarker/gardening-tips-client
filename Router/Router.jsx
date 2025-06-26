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
import PrivateRoute from "../src/Private/PrivateRoute";
import TipDetails from "../src/Pages/TipDetails/TipDetails";
import BrowseTips from "../src/Pages/BrowseTips/BrowseTips";
import TopTrendingTips from "../src/Components/TopTrendingTips/TopTrendingTips";
import ErrorPage from "../src/Pages/ErrorPage/ErrorPage";
import UpdateTip from "../src/Pages/UpdatePage/UpdateTip";
import DashBoardLayout from "../src/Dashboard/DashBoardLayout";
import DashboardOverview from "../src/Dashboard/DashboardOverview";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
     children:[
        {path:'/',
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
          element:<Home></Home>},
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },{
          path:"/login",
          element:<Login></Login>
        },{
          path:"/ShareAGardenTip",
          element:<PrivateRoute><ShareAGardenTip></ShareAGardenTip></PrivateRoute>

        },{
          path:"/gardeners",
          element:<ExploreGardeners></ExploreGardeners>,
          loader:()=>fetch('https://assignment-10-11-server.vercel.app/gardeners'),
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
        },{
          path:'/mytips',
          element:<PrivateRoute><MyTips></MyTips></PrivateRoute>,
          
        },{

          path:"/browswtips",
          element:<BrowseTips></BrowseTips>,
          loader:()=>fetch('https://assignment-10-11-server.vercel.app/tips'),
           hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>

        },{
          path:'/details/:id',
          element:<PrivateRoute><TipDetails></TipDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://assignment-10-11-server.vercel.app/tips/${params.id}`),
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
        },{
          path:"/update/:id",
              element:<PrivateRoute><UpdateTip></UpdateTip></PrivateRoute>,
              loader:({params})=>fetch(`https://assignment-10-11-server.vercel.app/tips/${params.id}`),
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
        }
     ]
  },{
    path:'/dashboard',
    element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children:[
      {
      index: true, // Default route under /dashboard
      element: <DashboardOverview />,
        loader: () => fetch('https://assignment-10-11-server.vercel.app/tips'),
    },
      {
        path:'mytips',
        element:<MyTips></MyTips>
        
      },
      {
        path:'browswtips',
        element:<BrowseTips></BrowseTips>,
        loader:()=>fetch('https://assignment-10-11-server.vercel.app/tips'),
      },
    ]
  }
]);