import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import InvoicePage from "../Pages/InvoicePage";
import EmailPage from "../Pages/EmailPage";
import NewJobpage from "../Pages/NewJobpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard/jobs/new-job" />
            },
            {
                path: "/dashboard/apps/shop/invoice",
                element: <InvoicePage />
            },
            {
                path: "/dashboard/apps/email/read",
                element: <EmailPage />
            },
            {
                path: "/dashboard/jobs/new-job",
                element: <NewJobpage />
            },
        ]
    },
]);