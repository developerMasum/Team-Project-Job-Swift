import React from 'react';
import PaySection from '../../components/Home/PaySection';
import HrPlatform from '../../components/Home/HrPlatform';

const Home = () => {
    return (
        <div>
          {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}
          <PaySection />
          <HrPlatform></HrPlatform>

         
        </div>
    );
};

export default Home;