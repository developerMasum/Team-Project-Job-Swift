import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FreeDemo from "../Pages/FreeDemo/FreeDemo";

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
          path:'free-demo',
          element:<FreeDemo></FreeDemo>
        }
      ]
    },
  ]);

  export default router ;