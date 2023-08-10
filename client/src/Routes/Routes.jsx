import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DemoPage from "../Pages/DemoPage/DemoPage";
import EmployeeExperience from "../components/Home/EmployeeExperience";
import EmployeePerformance from "../Pages/EmployeePerformance/EmployeePerformance";

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
          path:'/employee-experience',
          element: <EmployeePerformance></EmployeePerformance>
        }
      ]
    },
  ]);

  export default router ;