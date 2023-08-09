import React from 'react';
import HrDataReporting from '../../Components/Home/HrDataReporting/HrDataReporting';
import PaySection from '../../components/Home/PaySection';
import HrPlatform from '../../components/Home/HrPlatform';
import HeadlineBar from '../Shared/HeadlineBar';


const Home = () => {
    return (
        <div className='mt-60 lg:md:mt-20'>
            <HeadlineBar></HeadlineBar>
            <HrDataReporting />
            {/* important !!!  here please everyone render his section one by one from components-> home-> your section name  */}

            <PaySection />
            <HrPlatform></HrPlatform>


        </div>
    );
};

export default Home;
