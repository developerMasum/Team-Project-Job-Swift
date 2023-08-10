import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MarketPlaceIntegrate = () => {
    return (
        <div>
            <div className="md:flex pt-20 flex-row-reverse items-center gap-12 w-9/12 mx-auto ">
        <div className='md:w-1/2'>
          <img src="https://www.bamboohr.com/media_13163d8538f44e479364c47dd3057531b1af2e429.png?width=2000&format=webply&optimize=medium" alt="" />
        </div>
        <div className="space-y-5 md:w-1/2">
          <h3 className="text-2xl font-semibold text-[#00673B]">
          Integration Marketplace
          </h3>
          <p className="text-lg pb-5">
          Simplify even more business workflows by connecting vetted, pre-built software integrations to BambooHR. Your employee data stays accurate and secure, and you have hundreds of solutions at your fingertips to help your people and your business thrive.
          </p>
          <Link to="/details-marketplace">
            <h5 className="text-base text-[#00673B] font-bold flex items-center gap-2">
            Learn More About Integration Marketplace{" "}
              <span>
                {" "}
                <MdArrowForwardIos className="" />
              </span>
            </h5>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default MarketPlaceIntegrate;