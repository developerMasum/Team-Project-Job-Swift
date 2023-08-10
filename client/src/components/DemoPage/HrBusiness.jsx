import React from "react";
import image01 from '../../../public/change-org.svg'
import image02 from '../../../public/jacksonville-jaguars.svg'
import image03 from '../../../public/jelly-belly.svg'
import image04 from '../../../public/postmates.svg'
import image05 from '../../../public/usertesting.svg'
import image06 from '../../../public/ziprecruiter.svg'


const HrBusiness = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="text-black font-semibold text-xl text-center mb-10">Join 30,000+ businesses that trust BambooHR</h1>
      <div className="flex flex-wrap md:justify-between items-center gap-4 ">
           <img src={image01} alt="" /> 
           <img src={image02} alt="" /> 
           <img src={image03} alt="" /> 
           <img src={image04} alt="" /> 
           <img src={image05} alt="" /> 
      </div>
    </div>
  );
};

export default HrBusiness;