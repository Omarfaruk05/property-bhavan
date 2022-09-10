import React from 'react';
import CheckIcon from '../../assets/button-photos/check-circle.png'


const Features = () => {
    return (
        <div className='mt-8 mx-4 md:mx-16'>
            <div>
                <h1 className='text-4xl mt-4 font-semibold text-primary'>Reatures & Amenities</h1>
                <div className='flex gap-20 justify-start mt-4 ml-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>CCTV</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>Security</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>Life</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;