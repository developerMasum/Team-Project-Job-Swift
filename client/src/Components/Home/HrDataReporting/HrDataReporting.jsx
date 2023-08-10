import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";


const HrDataReporting = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-10 md:px-0 md:mr-96 items-center justify-items-start">
      <div className="">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#00673B]">
          HR Data & Reporting
        </h3>
        <p className="text-lg pb-5">
          BambooHR is your one-stop shop for data management, with instant,
          pre-built reports, automated workflows, and in-depth analytics <br /> to
          back you up and keep you moving.
        </p>
        <Link to={"/"} className="">
          <h4 className="text-primary text-lg md:text-xl font-semibold mt-4 md:mt-10 ">
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
          src="http://surl.li/jxhzj"
          className="w-96 h-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default HrDataReporting;
