import React from "react";

const PostJobs = ({ jobs }) => {
  console.log(jobs);
  const {
    jobName,
    cityName,
    addressName,
    Sourced,
    Applied,
    PhoneScreen,
    Assessment,
    Interview,
    Offer,
    Hired,
    totalCandidates,
    totalActiveCandidates,
    lastCandidateDate,
  } = jobs;
  return (
    <div className="pt-8 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-medium">{jobName}</h2>
          <p className="flex gap-1 text-gray-500">
            <span>{cityName}</span>,<span>{addressName}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-secondary px-4 py-1 rounded-lg border-gray-600 border">Find Candidates</button>
          <button className="text-white px-4 py-1 bg-gray-500 hover:bg-gray-600 rounded-lg">Used Internally</button>
        </div>
      </div>
      <div className="flex pt-7 px-10 mx-auto pb-5 justify-between">
        <div className="font-medium  text-center text-gray-600">
          <p>{Sourced}</p> <p>Sourced</p>{" "}
        </div>
        <div className="font-medium  text-center text-gray-600">
          <p>{Applied}</p> <p>Applied</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{PhoneScreen}</p> <p>Phone Screen</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Assessment}</p> <p>Assessment</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Interview}</p> <p>Interview</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Offer}</p> <p>Offer</p>{" "}
        </div>
        <div className="font-medium text-center text-gray-600">
          <p>{Hired}</p> <p>Hired</p>{" "}
        </div>
      </div>
      <div className="flex  pt-1 justify-between text-gray-600">
        <h2>
          {" "}
          This job is not published on your careers page or on any job boards
        </h2>
        <div className="flex">
          <p>Candidates:{totalCandidates}</p>
          <p>{totalActiveCandidates} active in pipeline</p>
          <p>last CandidateDate: {lastCandidateDate} </p>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
