import React from "react";
import HrDataReporting from "../../Components/Home/HrDataReporting/HrDataReporting";
import PaySection from "../../components/Home/PaySection";
import HrPlatform from "../../components/Home/HrPlatform";
import Banner from "../../Components/Home/Banner/Banner";
import EmployeeExperience from "../../components/Home/EmployeeExperience";
import HeadlineBar from "../Shared/HeadlineBar";

const Home = () => {
  return (
    <div className="mt-60 lg:md:mt-20">
      <HeadlineBar></HeadlineBar>
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
    </div>
  );
};

export default Home;
