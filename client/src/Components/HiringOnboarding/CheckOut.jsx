import React from "react";
import OnboardIngImage from "../../assets/Image/onboardingTask.png";
import ats from "../../assets/Image/ats.png";
import employee from "../../assets/Image/employee.png";

const CheckOut = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-primary md:text-5xl font-bold text-xl text-center my-4">
          Want to learn more about effective Hiring, Onboarding, and
          Offboarding?
        </h2>
        <p className="text-secondary font-semibold my-4">
          Check out these additional resources
        </p>
      </div>

      <div className="my-8 grid md:grid-cols-3 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={OnboardIngImage} alt="OnboardIngImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              20+ Onboarding Tasks That Help New Hires Feel Welcome [Free
              Onboarding Checklist]
            </h2>
            <p className="font-semibold">
              This expert-approved new hire checklist will save time and give
              you plenty of room to personalize.
            </p>
            <div className="card-actions">
              <button className="btn btn-link ">Free DownLoad &gt;</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={ats} alt="ats" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              Applicant Tracking System (ATS) Case Study
            </h2>
            <p className="font-semibold">
              See how the BambooHR ATS helped The Centre for Family Medicine
              rapidly staff emergency COVID-19 vaccination clinics to meet the
              needs of their community.
            </p>
            <div className="card-actions">
              <button className="btn btn-link ">View Case Study &gt;</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={employee} alt="employee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              The Definitive Guide to Onboarding
            </h2>
            <p className="font-semibold">
              Everything you need to know to onboard like a pro.
            </p>
            <div className="card-actions">
              <button className="btn btn-link ">Free DownLoad &gt;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-primary md:text-5xl font-bold text-xl text-center my-4">
          Want to experience what BambooHR can do for you?
        </h2>
        <p className="text-secondary font-semibold my-4">
          There's no substitute for hands-on experience. Try it yourself.
              </p>
              
              <button className="btn btn-success">Try It Free</button>
      </div>
    </div>
  );
};

export default CheckOut;
