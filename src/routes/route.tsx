import App from "@/App";
import Login from "@/pages/Login";
import Tasks from "@/pages/tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/users',
                element:<User></User>,
            },
            {
                path:'/tasks',
                element:<Tasks></Tasks>,
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    }
]);

export default routes;