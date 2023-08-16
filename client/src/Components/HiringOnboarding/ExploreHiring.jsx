import React from "react";
import recruiting from "../../assets/Image/recruiting.png";
import { RiUserSearchLine } from "react-icons/ri";
import { BsPersonAdd } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";

const ExploreHiring = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-primary md:text-4xl lg:text-5xl font-bold my-2">
          Explore Hiring & Onboarding with JobSwift
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 my-4 md:my-8">
        {/* Applicant Tracking */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <RiUserSearchLine size={30} />
            <h2 className="card-title mt-2">Applicant Tracking</h2>
            <p className="my-2">
              Modern recruiting tools help you find and hire the right talent
              fast.
            </p>
            <a className="text-blue-500" href="#">
              Explore Applicant Tracking &gt;
            </a>
          </div>
        </div>

        {/* New Hire Onboarding */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <BsPersonAdd size={30} />
            <h2 className="card-title mt-2">New Hire Onboarding</h2>
            <p className="my-2">
              Set your people up for success from the start.
            </p>
            <a className="text-blue-500" href="#">
              Explore Onboarding &gt;
            </a>
          </div>
        </div>

        {/* OffBoarding */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <AiOutlineClear size={30} />
            <h2 className="card-title mt-2">OffBoarding</h2>
            <p className="my-2">Saying goodbye just got a little easier.</p>
            <a className="text-blue-500" href="#">
              Explore OffBoarding &gt;
            </a>
          </div>
        </div>
      </div>

      <div className="md:flex my-6">
        <p className="text-secondary font-semibold my-4 md:my-0 md:px-8">
          "Without JobSwift, we wouldn't be in a position to handle spikes of
          recruiting or thinking too far ahead. Having a central record to
          ensure data integrity, as well as to automate and help us manage
          onboarding, has allowed us to provide a seamless experience in one of
          our biggest hiring years.”
        </p>
        <img
          src={recruiting}
          alt=""
          className="w-full h-auto md:w-1/2 md:ml-8"
        />
      </div>

      <p className="mb-4 text-2xl text-center md:text-4xl font-bold text-stone-500">
        JANE JAXON, VP, PEOPLE, WISTIA
      </p>
    </div>
  );
};

export default ExploreHiring;
