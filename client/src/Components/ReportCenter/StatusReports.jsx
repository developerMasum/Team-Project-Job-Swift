import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";

const StatusReports = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center">
        <h5 className="text-lg font-semibold">STATUS REPORTS</h5>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>
      {/* content here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <AiOutlineAlignCenter size={64} />
            <h2 className="card-title">Current Pipeline</h2>
            <p>
              See a snapshot of the current status for every job on the
              dashboard
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <FaRegAddressBook size={64} />
            <h2 className="card-title">Candidate Breakdown</h2>
            <p>
              Filter and view the details of every candidate in your account
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <BsActivity size={64} />
            <h2 className="card-title">Activity</h2>
            <p>
              Get a detailed breakdown of activity by team member and candidate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusReports;
