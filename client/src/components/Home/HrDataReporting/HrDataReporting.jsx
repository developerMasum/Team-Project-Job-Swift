import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const HrDataReporting = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0 md:mr-96 items-center justify-items-start">
      <div className="">
        <h3 className="text-primary md:text-2xl font-bold text-xl text-center md:text-start mb-2">
          HR Data & Reporting
        </h3>
        <p className="text-secondary font-semibold leading-8 md:mt-2">
          Job Swift is your one-stop shop for data management, with instant,
          pre-built reports, automated workflows, and in-depth analytics to back
          you up and keep you moving.
        </p>
        <Link to={"/hr-data"} className="">
          <h4 className="text-primary font-bold text-base text-start md:text-start mt-2  md:mt-10 ">
            Learn More About HR Data & Reporting{" "}
            <span>
              {" "}
              <FaChevronRight className="inline-block text-primary" />
            </span>
          </h4>
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="https://www.bamboohr.com/media_11be2f9dd0ad8fc0e915c5d7d399ef102cd845269.png?width=2000&format=webply&optimize=medium"
          className="w-96 h-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default HrDataReporting;