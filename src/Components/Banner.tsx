import React from 'react';
import BannerLogo from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-10'>
            <div>
                <h2 className='font-extrabold text-[60px]'>Build Your Ideal<br /> 
                    <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                    </h2>
                <p className='text-[#475569] mb-6'>Explore frontend, backend, database, and tooling options,<br />
compare them side by side, and put together the stack that fits your <br />
next project.</p>

            <button className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white mr-5 my-3 p-3 rounded-md'>Explore Technologies</button>
            <button className='border-gray-400 border-1 p-3 px-5 w-55 rounded-md'>Learn More</button>
            </div>
            <div>
                <img src={BannerLogo} alt="This is banner image" />
            </div>
        </div>
    );
};

export default Banner;