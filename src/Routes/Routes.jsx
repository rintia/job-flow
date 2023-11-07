import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import PostedJobs from "../Pages/PostedJobs/PostedJobs";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/MyBids/BidRequests/BidRequests";
import PrivateRoute from "./PrivateRoute";


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
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/postedJobs',
          element: <PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>
        },
        {
          path: '/updateJob/:id',
          element: <UpdateJob></UpdateJob>,
          loader: ({params}) => fetch(`https://job-flow-server.vercel.app/jobs/${params.id}`)
        },
        {
          path: '/jobDetails/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://job-flow-server.vercel.app/jobs/${params.id}`)
        },
        {
          path: '/myBids',
          element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
          path: '/bidRequests',
          element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;