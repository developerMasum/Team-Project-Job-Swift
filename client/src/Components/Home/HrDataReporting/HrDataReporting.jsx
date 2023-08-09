import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
const HrDataReporting = () => {
  return (
    <div className="">
      <div className="md:flex flex-row-reverse items-center gap-12 w-9/12 mx-auto ">
        <div>
          <img src="http://surl.li/jxhzj" alt="" />
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#00673B]">
            HR Data & Reporting
          </h3>
          <p className="text-lg pb-5">
            BambooHR is your one-stop shop for data management, with instant,
            pre-built reports, automated workflows, and in-depth analytics to
            back you up and keep you moving.
          </p>
          <Link>
            <h5 className="text-base text-[#00673B] font-bold flex items-center gap-2">
              Learn More About HR Data & Reporting{" "}
              <span>
                {" "}
                <MdArrowForwardIos className="" />
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HrDataReporting;
