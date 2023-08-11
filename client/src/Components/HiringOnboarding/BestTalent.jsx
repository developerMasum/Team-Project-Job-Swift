import React from 'react';
import hiringImage from "../../assets/Image/hiring.png";

const BestTalent = () => {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0 items-center my-16">
        <div className="">
          <h3 className="text-primary md:text-2xl font-bold text-xl text-start mb-2">
            Find, hire & onboard the best talent.
          </h3>
          <p className="text-secondary font-semibold leading-8 md:mt-2">
            JobSwift is designed to help organizations find, evaluate, hire and
            onboard the right talent as seamlessly and quickly as possible, all
            while enabling a personal touch and creating great first impressions
            along the way.
          </p>
          <div className='flex justify-evenly gap-8 my-4'>
            <button className="btn btn-info btn-lg w-1/2">Gate My Free Demo</button>
            <button className="btn btn-outline btn-success btn-lg w-1/2">
              Try It Free
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img src={hiringImage} className=" h-auto rounded-2xl" alt="" />
        </div>
      </div>
    );
};

export default BestTalent;