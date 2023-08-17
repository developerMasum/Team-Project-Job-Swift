import React, { useState } from "react";
import { FaMedal, FaAngleRight } from "react-icons/fa";
import eliteImg from "../../../src/assets/Image/elite-badge.svg";
import { Link } from "react-router-dom";

const FreeApp = () => {
  const exclusiveData = [
    {
      id: 1,
      imageUrl: "../../../src/assets/Image/freeApp01.jpeg",
      name: "JobSwift app for Slack",
      title: "Communication",
      description:
        "Employees can use some of BambooHR’s most popular features without leaving Slack",
    },
    {
      id: 2,
      imageUrl: "../../../src/assets/Image/newIntre04.png",
      name: "Microsoft Single Sign-On",
      title: "Identity Management",
      description:
        "Allow users to log in to BambooHR using their Microsoft account login.",
    },
    {
      id: 3,
      imageUrl: "../../../src/assets/Image/freeApp03.png",
      name: "Indeed",
      title: "Job Boards & Sourcing",
      description:
        "Indeed.com is the world's #1 job site*, *comScore, Total Visits",
    },
    {
      id: 4,
      imageUrl: "../../../src/assets/Image/freeApp04.jpeg",
      name: "SAML",
      title: "Identity Management",
      description:
        "SAML is a standard for logging users into applications based on their sessions",
    },
    {
      id: 5,
      imageUrl: "../../../src/assets/Image/freeApp05.png",
      name: "Gifted",
      title: "Recognition & Rewards",
      description:
        "Your dream rewards and recognition platform. Unlimited Users, Gifts, Brands, Automations and more – all for FREE.",
    },
    {
      id: 6,
      imageUrl: "../../../src/assets/Image/freeApp06.png",
      name: "Truework",
      title: "Employment Verification",
      description:
        "Automate your manual workflows and save your HR team hundreds of hours per year with automated employment verification.",
    },
  ];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="my-20">
      <h2 className="text-2xl md:text-3xl font-bold my-4 p-2 text-gray-800">
        Discover Free Apps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exclusiveData.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredId(offer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative">
              <img
                src={offer.imageUrl}
                alt={offer.name}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="absolute top-2 right-2 bg-[#219438] text-white px-2 py-1 rounded-full text-xs font-semibold">
                SPECIAL OFFER
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {offer.name}
                <img src={eliteImg} alt="" className="w-5 h-5 ml-2 inline" />
              </h3>
              <p className="text-gray-600 mt-1">{offer.title}</p>
              <div className="mt-3"></div>
              <div
                className={`text-sm text-gray-500 mt-3 transition-all duration-300 ${
                  hoveredId === offer.id
                    ? "opacity-100 h-auto"
                    : "opacity-0 h-0"
                }`}
              >
                {offer.description}
              </div>
              <a
                href="/"
                className="text-[#219438] hover:underline flex items-center transition duration-300 transform hover:translate-x-1"
              >
                Learn More
                <FaAngleRight className="ml-1 text-[#219438] text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeApp;
