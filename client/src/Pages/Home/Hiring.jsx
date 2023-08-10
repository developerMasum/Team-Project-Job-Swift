import React from "react";
import hiringImage from "../../assets/hiring.png";

const Hiring = () => {
  return (
    <div className="my-8 p-8 md:flex items-center gap-8 bg-gray-200 shadow-md rounded-lg">
      <div className="my-8 flex-1">
        {/* Use flex-1 to distribute space evenly */}
        <img src={hiringImage} alt="" />
      </div>
      <div className="flex-1">
    
        {/* Use flex-1 to distribute space evenly */}
        <div className=" px-8">
          <h1 className="text-6xl font-bold text-[rgb(50,50,50)] ">
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
    </div>
  );
};

export default Hiring;
