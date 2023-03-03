import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [

        ]
    }
])