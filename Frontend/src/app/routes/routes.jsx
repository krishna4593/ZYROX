import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../../features/auth/Pages/Login";
import Register from "../../features/auth/Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
])

export function AppRouter(){
    return (
        <RouterProvider router={router} />
    )
}
