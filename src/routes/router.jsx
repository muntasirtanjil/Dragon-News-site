import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import CatagoryNews from "../pages/CatagoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authentication from "../layout/Authentication";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <HomePage></HomePage>
                },
                {
                    path: "/category/:id",
                    element: <CatagoryNews></CatagoryNews>,
                    loader: () => fetch("/news.json"),
                },
            ]
        },
        {
            path: "/auth",
            element: <Authentication></Authentication>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch("/news.json"),
        },
        {
            path: "/*",
            element: <h2>Error-404</h2>
        },
    ]
)

export default router;