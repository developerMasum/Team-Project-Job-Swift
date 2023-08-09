
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import HeadlineBar from "../Pages/Shared/HeadlineBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <HeadlineBar></HeadlineBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
