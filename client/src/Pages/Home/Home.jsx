import React from 'react';
import HrDataReporting from '../../Components/Home/HrDataReporting/HrDataReporting';
import PaySection from '../../components/Home/PaySection';
import HrPlatform from '../../components/Home/HrPlatform';
import Banner from '../../Components/Home/Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <HrDataReporting />
          {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}
         
          <PaySection />
          <HrPlatform></HrPlatform>

         
        </div>
    );
};

export default Home;