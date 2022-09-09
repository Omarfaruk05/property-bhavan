import React from 'react';
import headerPhoto from '../../assets/phil-hearing-IYfp2Ixe9nM-unsplash 1.png';
import uploadBtn1 from '../../assets/button-photos/Group 11645 (1).png'
import uploadBtn2 from '../../assets/button-photos/Group 11646.png'
import uploadBtn3 from '../../assets/button-photos/Group 11647.png'
import whatsAppBtn from '../../assets/button-photos/Frame 12069.png'

const Header = () => {
    return (
        <div>
          <div className='mx-4 md:mx-16'>
            <div className='py-4'>
                <button className="btn btn-primary ">For Rent</button>
            </div>
            <h1 className='text-lg md:text-xl lg:text-4xl text-black pb-4 font-semibold'>2BHK Apartment for Sale in Newtown, Kolkata, West Bengal</h1>
            <div className='flex gap-4'>
                <div className='w-1/2 hidden md:block'>
                    <img className='none w-full photo-shadow' src={headerPhoto} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-3 md:w-1/2'>
                    <div>
                        <img className='photo-shadow' src={headerPhoto} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={headerPhoto} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={headerPhoto} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={headerPhoto} alt="" />
                    </div>
                </div>
            </div>
            <div className='text-right mt-4'>
                <button>
                    <img src={uploadBtn1} alt="" />
                    </button>
                <button>
                    <img src={uploadBtn2} alt="" />
                    </button>
                <button>
                    <img src={uploadBtn3} alt="" />
                </button>
            </div>
            <div>
                <h2 className='text-primary text-3xl font-bold -mt-4'>₹ 25,000</h2>
            </div>
            <div className='md:flex justify-between items-center gap-3'>
                <div className='mr-3'>
                    <p>SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='h-full mr-2'>
                        <img className='h-12 max-w-fit' src={whatsAppBtn} alt="" />
                    </button>
                    <button className=' btn bg-primary text-white rounded-md shadow-md px-16'>Contact Owner</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Header;