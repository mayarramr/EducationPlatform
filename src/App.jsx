import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Pricing from "./Components/Pricing/Pricing";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Library from "./Components/Library/Library";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Courses from "./Components/Courses/Courses";
import Quiz from "./Components/Quiz/Quiz";


let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "home", element: <Home /> },
      { path: "pricing", element: <Pricing /> },
      { path: "payment", element: <Payment /> },
      { path: "library", element: <Library /> },
      { path: "profile", element: <Profile /> },
      { path: "courses", element: <Courses /> },
      { path: "quiz", element: <Quiz /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
