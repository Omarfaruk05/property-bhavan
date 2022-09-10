import React from 'react';
import BHK from '../../assets/button-photos/Group 11652.png'
import Bath from '../../assets/button-photos/bath.png'
import BedDouble from '../../assets/button-photos/bed-double.png'
import Expanded from '../../assets/button-photos/expand.png'

const Details = () => {
    return (
        <div className='mx-4 md:mx-16 my-4'>
            <div>
                <h1 className='text-4xl mt-4 font-semibold text-primary'>Details</h1>
                <div className='flex justify-center flex-wrap gap-4 mt-6'>
                    <div className='border border-primary rounded-lg p-8 shadow-md w-[310.72px] h-[174px]'>
                        <div className='pb-4'>
                            <img src={BHK} alt="" />
                        </div>
                        <div>
                            <h3 className='text-primary text-2xl font-semibold'>BHK</h3>
                            <p>3BHK</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-lg p-8 shadow-md w-[310.72px] h-[174px]'>
                        <div className='pb-4'>
                            <img src={Bath} alt="" />
                        </div>
                        <div>
                            <h3 className='text-primary text-2xl font-semibold'>Bathroom</h3>
                            <p>2</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-lg p-8 shadow-md w-[310.72px] h-[174px]'>
                        <div className='pb-4'>
                            <img src={BedDouble} alt="" />
                        </div>
                        <div>
                            <h3 className='text-primary text-2xl font-semibold'>Furnishing Status</h3>
                            <p>Semi-Furnished</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-lg p-8 shadow-md w-[310.72px] h-[174px]'>
                        <div className='pb-4'>
                            <img src={Expanded} alt="" />
                        </div>
                        <div>
                            <h3 className='text-primary text-2xl font-semibold'>Super Build Area</h3>
                            <p>1418 Sq.ft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;