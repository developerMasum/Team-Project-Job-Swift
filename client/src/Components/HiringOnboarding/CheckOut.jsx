import React from "react";
import OnboardingImage from "../../assets/Image/onboardingTask.png";
import ats from "../../assets/Image/ats.png";
import employee from "../../assets/Image/employee.png";
import { FaChevronRight } from "react-icons/fa";

const CheckOut = () => {
  return (
    <div className="my-6 md:my-16">
      <div className="text-center">
        <h2 className="text-blue-900 italic md:text-4xl lg:text-5xl font-bold my-2">
          Want to learn more about effective Hiring, Onboarding, and
          Offboarding?
        </h2>
        <p className="text-secondary font-semibold my-2 mt-5">
          Check out these additional resources
        </p>
      </div>

      <div className="my-4 md:my-8 grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        {/* Onboarding Task */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src={OnboardingImage} alt="OnboardingImage" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2 mb-5">
              20+ Onboarding Tasks That Help New Hires Feel Welcome [Free
              Onboarding Checklist]
            </h2>
            <p className="font-semibold mt-2">
              This expert-approved new hire checklist will save time and give
              you plenty of room to personalize.
            </p>

            <h3 className=" mt-5  font-bold text-base text-center md:text-left text-blue-500">
              Free Download
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* ATS Case Study */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src={ats} alt="ats" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2 ">
              Applicant Tracking System (ATS) Case Study
            </h2>
            <p className="font-semibold text-secondary mt-2">
              See how the BambooHR ATS helped The Centre for Family Medicine
              rapidly staff emergency COVID-19 vaccination clinics to meet the
              needs of their community.
            </p>

            <h3 className=" mt-5 font-bold text-base text-center md:text-left text-blue-500">
              View Case Study
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>

        {/* Definitive Guide */}
        <div className=" bg-base-100 shadow-xl px-4 py-4">
          <figure>
            <img src={employee} alt="employee" />
          </figure>
          <div className="">
            <h2 className=" font-bold text-xl mt-2">
              The Definitive Guide to Onboarding
            </h2>
            <p className="font-semibold mt-2 text-secondary">
              Everything you need to know to onboard like a pro.
            </p>

            <h3 className=" mt-5 font-bold text-base text-center md:text-left text-blue-500">
              Free Download
              <span className="ml-2">
                <FaChevronRight className="inline-block" />
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 px-4 py-4">
        <h2 className=" md:text-4xl lg:text-5xl font-bold my-2 italic text-blue-900  ">
          Want to experience what BambooHR can do for you?
        </h2>
        <p className="text-secondary font-semibold my-2 ">
          There's no substitute for hands-on experience. Try it yourself.
        </p>
        <h3 className=" mt-5 font-bold text-base text-center md:text-center text-blue-500">
          Try It Free
          <span className="ml-2">
            <FaChevronRight className="inline-block" />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CheckOut;