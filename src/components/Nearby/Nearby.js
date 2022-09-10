import React from 'react';
import hospitalIcon1 from '../../assets/button-photos/hospital-line.png'
import parkIcon from '../../assets/button-photos/Group 11653.png'
import busIcon from '../../assets/button-photos/Vector (1).png'
import hospitalIcon2 from '../../assets/button-photos/Group 11654.png'
import hospitalIcon3 from '../../assets/button-photos/Vector (2).png'

const Nearby = () => {
    return (
        <div className='mx-4 md:mx-16 my-4'>
            <div>
                <h1 className='text-4xl mt-4 font-semibold text-primary my-4'>Nearby</h1>
                <div className='flex flex-wrap justify-center md:justify-start gap-10'>
                    <div className='bg-primary rounded-xl w-[129px] h-[133px] p-4'>
                       <div className='w-[60px] mx-auto mb-4'>
                            <img src={hospitalIcon1} alt="" />
                       </div>
                        <p className='text-white font-semibold text-center'>Hospital</p>
                    </div>
                    <div className='bg-primary rounded-xl w-[129px] h-[133px] p-4'>
                        <div className='w-[60px] mx-auto mb-4'>
                            <img src={parkIcon} alt="" />
                       </div>
                        <p className='text-white font-semibold text-center'>Park</p>
                    </div>
                    <div className='bg-primary rounded-xl w-[129px] h-[133px] p-4'>
                        <div className='w-[60px] mx-auto mb-4'>
                            <img src={busIcon} alt="" />
                       </div>
                        <p className='text-white font-semibold text-center'>Bus</p>
                    </div>
                    <div className='bg-primary rounded-xl w-[129px] h-[133px] p-4'>
                        <div className='w-[60px] mx-auto mb-4'>
                            <img src={hospitalIcon2} alt="" />
                       </div>
                        <p className='text-white font-semibold text-center'>Hospital</p>
                    </div>
                    <div className='bg-primary rounded-xl w-[129px] h-[133px] p-4'>
                        <div className='w-[60px] mx-auto mb-4'>
                            <img src={hospitalIcon3} alt="" />
                       </div>
                        <p className='text-white font-semibold text-center'>Hospital</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nearby;