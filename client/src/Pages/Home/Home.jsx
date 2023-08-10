import React from "react";
import HrDataReporting from "../../Components/Home/HrDataReporting/HrDataReporting";
import PaySection from "../../components/Home/PaySection";
import HrPlatform from "../../components/Home/HrPlatform";
import Banner from "../../Components/Home/Banner/Banner";
import EmployeeExperience from "../../components/Home/EmployeeExperience";
import Slider from "../../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}
      <HrPlatform />
      <div className="mt-12">
        <HrDataReporting />
      </div>

      <div className="mt-12">
        <PaySection />
      </div>

      <div className="mt-12">
        <EmployeeExperience />
      </div>
      {/* slider */}
      <div className="mt-12"> 
        <h2 className="text-5xl font-bold text-center text-primary font-sans italic ">Why People LOVE JobSwift</h2>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
