import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Main from "../layout/Main";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import Dashboard from "../pages/Dashboard/Dashboard";
import DisplayCategoryBooks from "../pages/DisplayCategoryBooks/DisplayCategoryBooks";
import Books from "../pages/Home/AllBoooks/Books";
import DisplayAddBooks from "../pages/Home/DisplayAddBooks/DisplayAddBooks";
import DisplayDonationBooks from "../pages/Home/DisplayAddBooks/DisplayDonationBooks/DisplayDonationBooks";
import DisplaySellerBooks from "../pages/Home/DisplayAddBooks/DisplayDonationBooks/DisplaySellerBooks";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/category/:id',
                element: <DisplayCategoryBooks></DisplayCategoryBooks>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/category/novel',
                element: <Home><Books></Books></Home>
            },
            {
                path: '/category/story',
                element: <Home><Books></Books></Home>
            },
            {
                path: '/category/islamic',
                element: <Home><Books></Books></Home>
            },
            {
                path: '/category/other',
                element: <Home><Books></Books></Home>
            },
            {
                path: '/',
                element: <Home><DisplayAddBooks></DisplayAddBooks></Home>,
                children: [
                    {
                        path: '/donation',
                        element: <DisplayDonationBooks></DisplayDonationBooks>
                    },
                    {
                        path: '/seller',
                        element: <DisplaySellerBooks></DisplaySellerBooks>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign_up',
                element: <SignUp></SignUp>
            }
        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add_services',
                element: <AddServices></AddServices>
            },
            {
                path: '/dashboard/users',
                element: <AddServices></AddServices>
            },
            {
                path: '/dashboard/buyer',
                element: <AddServices></AddServices>
            },
            {
                path: '/dashboard/admin',
                element: <AddServices></AddServices>
            }
        ]
    },
])