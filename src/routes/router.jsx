import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import CatagoryNews from "../pages/CatagoryNews";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element: <HomePage></HomePage>
                },
                {
                    path:"/category/:id",
                    element: <CatagoryNews></CatagoryNews>,
                    loader: ()=>fetch("/news.json"),
                },
            ]
        },
        {
            path:"/auth",
            element: <h2>Authentication layout</h2>
        },
        {
            path:"/news",
            element: <h2>news layout</h2>
        },
        {
            path:"/*",
            element: <h2>Error-404</h2>
        },
    ]
)

export default router;