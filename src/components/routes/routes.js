import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        
        path : '/',
                element: <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path : '/',
                        element: <HomePage></HomePage>
                    }
                ]
        
    }
])