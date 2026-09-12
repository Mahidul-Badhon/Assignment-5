import React, { use } from 'react';
import type { Itechnology } from '../types/technologyType';

interface TechnologiesProps{
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {
   
   //using the data through promise props
    const technologies = use(technologiesPromise)
    console.log(technologies, "technologies")
   
    return (
        
        
        
        <div className='container mx-auto'>
            <h2 className='font-extrabold text-[36px]'>Explore the 
                <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
                    Technologies</span>
            </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div>
                <div></div>
                <div>Your stack</div>
            </div>
        </div>
    );
};

export default Technologies;