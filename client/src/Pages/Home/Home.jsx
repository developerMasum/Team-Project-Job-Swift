import React from 'react';
import HrDataReporting from '../../Components/Home/HrDataReporting/HrDataReporting';
import PaySection from '../../components/Home/PaySection';
import HrPlatform from '../../components/Home/HrPlatform';
import MarketPlaceIntegrate from '../../Components/Home/MarketPlaceIntegrate/MarketPlaceIntegate';

const Home = () => {
    return (
        <div>
          <HrDataReporting />
          {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}
          <PaySection />
          <HrPlatform></HrPlatform>
           <MarketPlaceIntegrate />
         
        </div>
    );
};

export default Home;