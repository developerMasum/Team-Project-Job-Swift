import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const EmployeeExperience = () => {
    return (
        <div className='max-w-[1100px] mx-auto  md:mr-20 px-10 md:px-0'>
            <div className='md:flex justify-center items-center gap-8'>
                <img
                    loading='lazy'
                    width={440}
                    src="https://www.bamboohr.com/media_186ea72b5a1db5581f4c537b963e452b673473ff0.png?width=2000&format=webply&optimize=medium"
                    alt="employee"
                    className='max-w-full md:max-w-none'
                />
                <div className='space-y-6 mx-0 md:w-4/12 '>
                    <h2 className="text-primary md:text-3xl font-bold text-xl text-center md:text-start mb-2">
                        Employee Experience & Performance
                    </h2>
                    <p className='text-secondary font-semibold leading-8'>
                        A strong company culture depends on listening to employees and investing in their development.
                        BambooHR offers tools to help you gather feedback, strengthen employee satisfaction, and grow your people.
                    </p>
                    <Link to='/employee-experience'>
                        <p className="text-primary font-bold text-base text-start md:mt-8 mt-2 md:text-start">
                            Learn More About Employee Experience & Performance{' '}
                            <FaChevronRight className="inline-block"></FaChevronRight>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmployeeExperience;
