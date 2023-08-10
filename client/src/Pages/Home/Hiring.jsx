import React from "react";
import hiringImage from "../../assets/hiring.png";
const Hiring = () => {
  return (
    <div className="my-8  p-8 md:flex justify-around gap-16 bg-gray-200 shadow-md rounded-lg">
      <div className="my-8 flex-grow-1">
        <img src={hiringImage} alt="" />
      </div>
      <div className="flex-grow-1">
        <h1 className="text-7xl font-bold text-[rgb(50,50,50)] ">
          Hiring & Onboarding
        </h1>
        <p className="my-8 text-xl">
          BambooHR helps you quickly find, hire, and onboard the best talent.
          With our powerful applicant tracking system and proactive onboarding
          tasks, you can create a compelling candidate experience and better
          first days for new hires.
        </p>

        <a className="text-blue-700" href="#">
          Learn More About Hiring & Onboarding &gt;
        </a>
      </div>
    </div>
  );
};

export default Hiring;
