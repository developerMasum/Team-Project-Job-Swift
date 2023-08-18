import React from "react";
import StatusReports from "./StatusReports";
import HistoricalReports from "./HistoricalReports";
import OthersReports from "./OthersReports";

const ReportCenter = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className=" text-4xl font-semibold">Report Center</h3>
        <p className="text-[20px] font-semibold my-4">
          Understand the data that drives your hiring.
        </p>
        <p>
          Get a step-by-step introduction to reporting in our support section.
        </p>
      </div>
      <StatusReports />
      <HistoricalReports />
      <OthersReports />
    </div>
  );
};

export default ReportCenter;
