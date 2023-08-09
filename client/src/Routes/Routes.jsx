import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DemoPage from "../Pages/DemoPage/DemoPage";

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
        }
      ]
    },
  ]);

  export default router ;