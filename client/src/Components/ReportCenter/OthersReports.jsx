import React from 'react';
import { GiPendulumSwing } from "react-icons/gi";


const OthersReports = () => {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center">
          <h5 className="text-lg font-semibold">Other</h5>
          <div className="flex-1 h-px bg-gray-300 ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <GiPendulumSwing size={64} />
              <h2 className="card-title">Get more from your reports</h2>
              <p>
                Can't find the data you need ? Get help from the Workable team.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OthersReports;