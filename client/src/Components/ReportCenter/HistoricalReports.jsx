import React from "react";
import { PiFlowArrowFill } from "react-icons/pi";
import { TbArrowsRight } from "react-icons/tb";
import { LuCheckCircle, LuArrowUp10, LuMonitor } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { WiTornado } from "react-icons/wi";
import { ImCircleDown } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { GiThreeKeys } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";

const HistoricalReports = () => {
  return (
    <>
      <div className="p-4 space-y-4">
        <div className="flex items-center">
          <h5 className="text-lg font-semibold">HISTORICAL REPORTS</h5>
          <div className="flex-1 h-px bg-gray-300 ml-4"></div>
        </div>
        {/* Your content here */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <PiFlowArrowFill size={64} />
            <h2 className="card-title">Candidate Flow</h2>
            <p>
              The number of new candidates and the number moved forward over
              time.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <LuCheckCircle size={64} />
            <h2 className="card-title">Candidate Sources</h2>
            <p>
              See the source of all candidates, including the most successful
              ones.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <TbArrowsRight size={64} />
            <h2 className="card-title">Hiring Velocity</h2>
            <p>
              Track the average time it takes candidates to get to each stage.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <GoClock size={64} />
            <h2 className="card-title">Time to Hire</h2>
            <p>
              View the time taken to fill a job , and the time from application
              to hire.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <LuArrowUp10 size={64} />
            <h2 className="card-title">Productivity</h2>
            <p>
              See the activity of your hiring team to track their productivity
              over time .
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <WiTornado size={64} />
            <h2 className="card-title">Historic Pipeline</h2>
            <p>
              Track the percentage of candidates making it through each stage.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <ImCircleDown size={64} />
            <h2 className="card-title">Referrals Breakdown</h2>
            <p>See the source and status of all referred candidates.</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <IoIosPeople size={64} />
            <h2 className="card-title">Referrals</h2>
            <p>
              Find out how active and successful your employees referral
              networks are.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <GrCompliance size={64} />
            <h2 className="card-title">Compliance (EEO)</h2>
            <p>View and export applicant responses to the EEO survey.</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <BsInstagram size={64} />
            <h2 className="card-title">Campaigns</h2>
            <p>
              View the performance of your Workable driven social media
              campaigns
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <LuMonitor size={64} />
            <h2 className="card-title">Video Interviews</h2>
            <p>View the performance of your video interviews.</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <GiThreeKeys size={64} />
            <h2 className="card-title">Assessments</h2>
            <p>View the performance of your Assessments.</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <CiMenuFries size={64} />
            <h2 className="card-title">Candidate Surveys</h2>
            <p>View the performance from your surveys.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoricalReports;
