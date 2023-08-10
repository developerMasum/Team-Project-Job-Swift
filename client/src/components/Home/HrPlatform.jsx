import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HrPlatform = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto justify-between items-center mt-8 md:mt-16 px-12 md:0">
      <div className=" w-full md:w-1/2">
        <img
          src="https://i.ibb.co/KN1FwJP/image.webp"
          alt="HrIamge"
          width={1000}
        />
      </div>
      <div className="w-full space-y-6 mt-6 md:mt-0 md:w-1/2 ">
        <h2 className="text-[#00673b] font-bold text-xl text-center md:text-start">
          The Complete HR Platform
        </h2>
        <p className=" text-[18px]">
          BambooHR simplifies and supports every step in the employee
          experience through its intuitive 
          features and flexible integrations, all
          connected to a single, secure source of data.
        </p>
        <div>
          <Link
            to="/demo-page"
            className="text-[#00673b] font-bold text-lg  text-start md:text-start"
            title="Get My Free Demo"
          >
            <h3>
              Get My Free Demo{" "}
              <FaChevronRight className="inline-block"></FaChevronRight>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HrPlatform;
