import React from 'react';

const PaySection = () => {
    return (
        <div className='grid grid-cols-2 gap-6 items-center justify-center'>
            <div>
                <h2>Payroll, Time & Benefits</h2>
                <p>BambooHR allows you to track hours worked, manage benefits enrollment, and run payroll all from a single platform. No more data double entry and manual approval processes—just easy, accurate payroll for you and your employees.</p>
            </div>
            <div>
                <img src="https://www.bamboohr.com/media_1a3f05063d0c65ac5f1e19b54dca44ef785738332.png?width=2000&format=webply&optimize=medium"   className='w-2/3 h-2/3' alt="" />

            </div>


        </div>
    );
};

export default PaySection;