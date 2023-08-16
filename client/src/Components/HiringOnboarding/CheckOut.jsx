import React from "react";
import OnboardingImage from "../../assets/Image/onboardingTask.png";
import ats from "../../assets/Image/ats.png";
import employee from "../../assets/Image/employee.png";

const CheckOut = () => {
  return (
    <div className="my-6 md:my-16">
      <div className="text-center">
        <h2 className="text-primary md:text-4xl lg:text-5xl font-bold my-2">
          Want to learn more about effective Hiring, Onboarding, and
          Offboarding?
        </h2>
        <p className="text-secondary font-semibold my-2">
          Check out these additional resources
        </p>
      </div>

      <div className="my-4 md:my-8 grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        {/* Onboarding Task */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={OnboardingImage} alt="OnboardingImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              20+ Onboarding Tasks That Help New Hires Feel Welcome [Free
              Onboarding Checklist]
            </h2>
            <p className="font-semibold mt-2">
              This expert-approved new hire checklist will save time and give
              you plenty of room to personalize.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-link">Free Download &gt;</button>
            </div>
          </div>
        </div>

        {/* ATS Case Study */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={ats} alt="ats" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              Applicant Tracking System (ATS) Case Study
            </h2>
            <p className="font-semibold mt-2">
              See how the BambooHR ATS helped The Centre for Family Medicine
              rapidly staff emergency COVID-19 vaccination clinics to meet the
              needs of their community.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-link">View Case Study &gt;</button>
            </div>
          </div>
        </div>

        {/* Definitive Guide */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={employee} alt="employee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              The Definitive Guide to Onboarding
            </h2>
            <p className="font-semibold mt-2">
              Everything you need to know to onboard like a pro.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-link">Free Download &gt;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-primary md:text-4xl lg:text-5xl font-bold my-2">
          Want to experience what BambooHR can do for you?
        </h2>
        <p className="text-secondary font-semibold my-2">
          There's no substitute for hands-on experience. Try it yourself.
        </p>
        <button className="btn btn-success mt-4">Try It Free</button>
      </div>
    </div>
  );
};

export default CheckOut;
