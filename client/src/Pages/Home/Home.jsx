import React from 'react';
import PaySection from '../../components/Home/PaySection';
import Banner from '../../components/Home/Banner';

const Home = () => {
    return (
        <div>
          {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}
          <Banner />
          <PaySection />

         
        </div>
    );
};

export default Home;