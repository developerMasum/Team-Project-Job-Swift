
import HrDataReporting from "../../Components/Home/HrDataReporting/HrDataReporting";
import PaySection from "../../components/Home/PaySection";
import HrPlatform from "../../components/Home/HrPlatform";
import Banner from "../../Components/Home/Banner/Banner";
import EmployeeExperience from "../../components/Home/EmployeeExperience";
import Slider from "../../components/Home/Slider/Slider";
import HeadlineBar from '../Shared/HeadlineBar';


const Home = () => {
  return (
    <div className='mt-32 lg:md:mt-20'>
      <HeadlineBar></HeadlineBar>
      <Banner />
      <HrPlatform></HrPlatform>
    <div className="mt-12">
    <HrDataReporting />
    </div>
      {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}

<div className="mt-12">
<PaySection />
</div>


      <div className="mt-12 mb-5">
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
