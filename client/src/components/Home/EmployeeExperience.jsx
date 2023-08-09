import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const EmployeeExperience = () => {
      return (
            <div className='max-w-[1100px] mx-auto px-4'>
                  <div className='md:flex justify-center items-center gap-8 '>
                        <img loading='lazy'width={600} src="https://www.bamboohr.com/media_186ea72b5a1db5581f4c537b963e452b673473ff0.png?width=2000&format=webply&optimize=medium" alt="emploee" />
                        <div className='space-y-6'>
                              <h2 className="text-[#00673b] font-bold text-2xl text-center md:text-start">Employee Experience & Performance</h2>
                              <p className='text-gray-600 leading-8'>A strong company culture depends on listening to employees and investing in their development. BambooHR offers tools to help you gather feedback, strengthen employee satisfaction, and grow your people.</p>
                              <Link to='/employee-experience'><p className="text-[#00673b] font-bold text-xl text-center md:text-start">Learn More About Employee Experience & Performance  <FaChevronRight className="inline-block"></FaChevronRight></p></Link>
                        </div>
                  </div>
            </div>
      );
};

export default EmployeeExperience;