import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const PaySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
      <div className="md:ml-20 md:mr-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
          Payroll, Time & Benefits
        </h2>
        <p className="font-semibold text-secondary">
          BambooHR allows you to track hours worked, manage benefits enrollment,
          and run payroll all from a single platform. No more data double entry
          and manual approval processes—just easy, accurate payroll for you and
          your employees.
        </p>
        <p className="font-semibold text-secondary">
          BambooHR allows you to track hours worked, manage benefits enrollment,
          and run payroll all from a single platform. No more data double entry
          and manual approval processes—just easy, accurate payroll for you and
          your employees.
        </p>

        <p className="text-primary flex gap-2 text-lg md:text-xl font-semibold items-center mt-4 md:mt-10">
          Learn More About Payroll, Time & Benefits{" "}
          <span>
            <AiOutlineRight className="w-4" />
          </span>
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="https://www.bamboohr.com/media_1a3f05063d0c65ac5f1e19b54dca44ef785738332.png?width=2000&format=webply&optimize=medium"
          className="w-2/3 h-auto"
          alt=""
        />
        <img
          src="https://www.bamboohr.com/media_1a3f05063d0c65ac5f1e19b54dca44ef785738332.png?width=2000&format=webply&optimize=medium"
          className="w-2/3 h-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default PaySection;
