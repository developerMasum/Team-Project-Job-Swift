import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
<<<<<<< HEAD
import DemoPage from "../Pages/DemoPage/DemoPage";
=======
import FreeDemo from "../Pages/FreeDemo/FreeDemo";
>>>>>>> 8639aa8bdff7170a60d60c26f46110d8dde36aeb

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
<<<<<<< HEAD
          path:'demo-page',
          element:<DemoPage></DemoPage>
=======
          path:'free-demo',
          element:<FreeDemo></FreeDemo>
>>>>>>> 8639aa8bdff7170a60d60c26f46110d8dde36aeb
        }
      ]
    },
  ]);

  export default router ;