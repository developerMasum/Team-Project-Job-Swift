import React from "react";
import hiringImage from "../../../public/hiring.png"
const Hiring = () => {
  return (
    <div>
      <div className="md:flex">
        <img src={hiringImage} alt="" />
      </div>
      <div>
        <h1 className="text-6xl">Hiring & Onboarding</h1>
        <p>
          BambooHR helps you quickly find, hire, and onboard the best talent.
          With our powerful applicant tracking system and proactive onboarding
          tasks, you can create a compelling candidate experience and better
          first days for new hires.
        </p>

        <a href="#">Learn More About Hiring & Onboarding</a>
      </div>
    </div>
  );
};

export default Hiring;
