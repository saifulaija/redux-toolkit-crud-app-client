import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import Update from "./pages/Update";
import ErrorPage from "./pages/ErrorPage";


 export const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/show-users',
        element:<Users></Users>
      },
      {
        path:'create-user',
        element:<CreateUser></CreateUser>
      },
      {
        path:'/update/:id',
        element:<Update></Update>
      }
    ]
  }
])

