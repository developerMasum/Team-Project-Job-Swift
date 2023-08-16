import PaySection from "../../components/Home/PaySection";
import HrPlatform from "../../components/Home/HrPlatform";
import EmployeeExperience from "../../components/Home/EmployeeExperience";
import HeadlineBar from "../Shared/HeadlineBar";
import MarketPlaceIntegrate from "../../components/Home/MarketPlaceIntegrate/MarketPlaceIntegate";
import Hiring from "../../components/Home/Hiring/Hiring";
import Banner from "../../components/Home/Banner/Banner";
import Slider from "../../components/Home/Slider/Slider";
import HrData from "../../components/Home/MarketPlaceIntegrate/HrData";

const Home = () => {
  return (
    <div className="mt-32 lg:md:mt-20">
      <HeadlineBar />
      <Banner />
      <HrPlatform />
      <div className="mt-12">
        <HrData />
      </div>

      {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}

      <div className="mt-12">
        <PaySection />
      </div>
      <div className="mt-12">
        <Hiring />
      </div>

      <div className="mt-12 mb-5">
        <EmployeeExperience />
      </div>
      <div className="mt-12 mb-12">
        <MarketPlaceIntegrate />
      </div>
      {/* slider */}
      <div className="mt-12">
        <h2 className="text-5xl font-bold text-center text-primary font-sans italic ">
          Why People LOVE JobSwift
        </h2>
        <Slider />
        {/* slider addeed */}
      </div>
    </div>
  );
};

export default Home;
