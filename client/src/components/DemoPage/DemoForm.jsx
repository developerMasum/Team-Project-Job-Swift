import React from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "South Korea",
  "Russia",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Singapore",
];

const DemoForm = () => {
  return (
    <div className="w-full md:max-w-[500px] border-[1px] bg-neutral-50 rounded-t-lg  mx-auto md:p-6">
      <form className="space-y-4 p-6">
        <h1 className="text-primary font-[900] text-2xl text-center">
          See Job Swift in Action
        </h1>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-2">
          <input
            type="text"
            className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          className="w-full p-2 placeholder-gray-400 border rounded"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="w-full p-2 placeholder-gray-400 border rounded"
          placeholder="Job Title"
        />
        <input
          type="text"
          className="w-full p-2 placeholder-gray-400 border rounded"
          placeholder="Company Name"
        />
        <div className="md:flex space-y-4 md:space-y-0">
          <input
            type="tel"
            className="flex-1 p-2 placeholder-gray-400 border rounded w-full"
            placeholder="Phone Number"
          />
          <select className="flex-1 p-2 border rounded w-full">
            <option value="">Employee Count</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101+">101+</option>
          </select>
        </div>
        <select className="w-full p-2 border rounded">
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div>
          <p>
            By submitting this information, I consent to receiving marketing
            communications from BambooHR, including emails and phone calls.
            Please see our Privacy Policy to understand how Job Swift handles
            your personal information. For California residents, please click
            here. helo
          </p>
        </div>
        <button
          type="submit"
          className="w-full p-2 round-[50%] bg-[#00673b] text-white rounded hover:bg-[#00673b]"
        >
          Get Free Demo
        </button>
      </form>
    </div>
  );
};

export default DemoForm;
