import React from 'react';
import recruiting from "../../assets/Image/recruiting.png";

const ExploreHiring = () => {
    return (
      <div>
        <div>
          <h2 className="text-primary md:text-5xl font-bold text-xl text-center my-4">
            Explore Hiring & Onboarding with JobSwift
          </h2>

          <div className="grid md:grid-cols-3 gap-2 my-8">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Applicant Tracking</h2>
                <p>
                  Modern recruiting tools help you find and hire the right
                  talent fast.
                </p>
                <a className="text-blue-500" href="#">
                  Explore Applicant Tracking &gt;
                </a>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New Hire Onboarding</h2>
                <p>Set your people up for success from the start.</p>
                <a className="text-blue-500" href="#">
                  Explore Onboarding &gt;
                </a>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">OffBoarding</h2>
                <p>Saying goodbye just got a little easier.</p>
                <a className="text-blue-500" href="#">
                  Explore OffBoarding &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <p className="text-4xl text-secondary font-semibold my-8 px-8">
            "Without JobSwift, we wouldn't be in a position to handle spikes of
            recruiting or thinking too far ahead. Having a central record to
            ensure data integrity, as well as to automate and help us manage
            onboarding, has allowed us to provide a seamless experience in one
            of our biggest hiring years.”
          </p>
          <img src={recruiting} alt="" />
        </div>
        <p className='mb-8 text-4xl font-bold text-stone-500'>JANE JAXON, VP, PEOPLE, WISTIA</p>
      </div>
    );
};

export default ExploreHiring;