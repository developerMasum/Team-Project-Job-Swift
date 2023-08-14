import React from 'react';

const Title = ({mainTitle, subTitle}) => {
    return (
        <div className='text-center'>
            <h2 className='purple-color text-4xl font-bold'>{mainTitle}</h2>
            <p className="font-light text-xl pt-5">{subTitle}</p>
        </div>
    );
};

export default Title;