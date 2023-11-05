import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import PostedJobs from "../Pages/PostedJobs/PostedJobs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/addJob',
          element: <AddJob></AddJob>
        },
        {
          path: '/postedJobs',
          element: <PostedJobs></PostedJobs>
        }
      ]
    },
  ]);

  export default router;