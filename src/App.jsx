import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Pricing from './Components/Pricing/Pricing';
import Login from './Components/Login/Login';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


let routers = createBrowserRouter ([
  {path:'/' , element:<Layout/> , children : [
    {index:true , element: <Login/>},
    {path:'signup' , element:<Signup/>},
    {path:'home' , element:<Home/>},
    {path:'pricing' , element:<Pricing/>},
    {path:'*' , element:<Notfound/>},
  ]}
])


export default function App() {

  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}

