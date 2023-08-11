import React from "react";
import BestTalent from "./BestTalent";
import ExploreHiring from "./ExploreHiring";

const HiringOnboarding = () => {
  return (
    <>
      <div className="text-center mx-auto">
        <h2 className="text-primary md:text-5xl font-bold text-xl text-center my-4">
          Hiring & Onboarding
        </h2>
        <p className="text-secondary font-semibold leading-8 md:my-4">
          Improve the experience for candidates, new hires, and HR with
          collaborative hiring and onboarding tools.
        </p>
      </div>
          <BestTalent />
          <ExploreHiring/>
    </>
  );
};

export default HiringOnboarding;
