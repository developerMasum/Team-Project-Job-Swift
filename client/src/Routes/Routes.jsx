import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DemoPage from "../Pages/DemoPage/DemoPage";
import DetailsMarketPlaceIntegrate from "../Pages/DetailsMarketPlaceIntegrate/DetailsMarketPlaceIntegrate";
import EmployeePerformance from "../Pages/EmployeePerformance/EmployeePerformance";
import HiringOnboarding from "../Components/HiringOnboarding/HiringOnboarding";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement : <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path:'demo-page',
          element:<DemoPage></DemoPage>
        },
        {
          path:'details-marketplace',
          element:<DetailsMarketPlaceIntegrate />
      },{
          path:'/employee-experience',
          element: <EmployeePerformance></EmployeePerformance>
        },
        {
          path: "hiring",
          element:<HiringOnboarding></HiringOnboarding>
        }
      ]
    },
  ]);

  export default router ;