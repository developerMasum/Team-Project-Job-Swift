import React from "react";
import { RiStarFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import eliteImg from "../../../src/assets/Image/elite-badge.svg";
import { Link } from "react-router-dom";


const PreferredApps = () => {
  const appsData = [
    {
      id: 1,
      imageUrl: "../../../src/assets/Image/appsImg01.png",
      name: "Checkr",
      title: "Background Checks",
      description:
        "Checkr powers the fastest, fairest background checks for businesses of all sizes",
    },
    {
      id: 2,
      imageUrl: "../../../src/assets/Image/appsImg02.jpeg",
      name: "Lattice",
      title: "Performance",
      description: "Develop engaged and high-performing teams with Lattice",
    },
    {
      id: 3,
      imageUrl: "../../../src/assets/Image/appsImg03.png",
      name: "15Five",
      title: "Performance",
      description: "Explore the platform transforming performance management.",
    },
    {
      id: 4,
      imageUrl: "../../../src/assets/Image/appsImg04.png",
      name: "Leapsome",
      title: "Performance",
      description: "Develop your people, scale your business.",
    },
    {
      id: 5,
      imageUrl: "../../../src/assets/Image/appsImg05.jpeg",
      name: "Merge",
      title: "Integration Platform",
      description:
        "Developers integrate once with Merge to offer a full category of integrations to their customers.",
    },
    {
      id: 6,
      imageUrl: "../../../src/assets/Image/appsImg06.png",
      name: "Nivati",
      title: "Health & Wellness",
      description:
        "A mental health and wellness platform for every employee, designed for the whole employee.",
    },
  ];

  return (
      <div className="my-20">
      <h2 className="text-2xl md:text-3xl font-bold my-4 p-2 text-gray-800">
       Free Apps
     </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {appsData.map((offer) => (
       <div
         key={offer.id}
         className="relative bg-white border rounded-lg overflow-hidden group transition duration-300 p-4 hover:shadow-lg"
       >
         <img
           src={offer.imageUrl}
           alt={offer.name}
           className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105"
         />
         <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold text-gray-500'>{offer.name}</h1>
            <img src={eliteImg} alt="" />
         </div>
         <div className="p-4 bg-white bg-opacity-90 absolute bottom-0 w-full transition duration-300 transform translate-y-full group-hover:translate-y-0">
           <div className="flex items-center mb-2">
             <h1 className="text-xl font-semibold text-gray-700">
               {offer.name}
               <img src={eliteImg} alt="" className="ml-2" />
             </h1>
           </div>
           <p className="text-gray-600">{offer.title}</p>
           <p className="mt-2 text-sm text-gray-500">{offer.description}</p>
           <div className="mt-4 flex justify-end">
             <Link
               to='/'
               className="text-[#219438] font-medium hover:underline flex items-center transition duration-300 transform hover:translate-x-1"
             >
               Learn More
               <FaAngleRight className="ml-1 text-[#219438] text-lg" />
             </Link>
           </div>
         </div>
         <div className="absolute top-2 right-2 bg-[#219438] text-white px-2 py-1 rounded-full text-xs font-semibold">
           SPECIAL OFFER
         </div>
       </div>
     ))}
   </div>
   </div>
  );
};

export default PreferredApps;
