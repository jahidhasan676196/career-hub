import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import Application from './Component/Application/Application';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/job/:id',
        element:<Details></Details>,
        loader:()=>fetch('jobs.json')
      },
      {
        path:'/applied',
        loader:()=>fetch('jobs.json'),
        element:<Application></Application>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
