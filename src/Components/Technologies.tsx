import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../types/technologyType';
import AvailableCards from './AvailableCards';
import SelectedStacks from './SelectedStacks';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {

    //using the data through promise props
    const technologies = use(technologiesPromise)
    // console.log(technologies, "technologies")

    const [selectedCards, setSelectedCards] = useState<Itechnology[]>([])
    const [technologyState, settechnologyState] = useState<Itechnology[]>(technologies)
    return (



        <div className='container mx-auto'>
            <h2 className='font-extrabold text-[36px]'>Explore the
                <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>
                    {` `}Technologies</span>
            </h2>
            <p className='text-gray-500'>Pick one technology per category to build your ideal stack.</p>


            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 items-start mt-8'>
                <div className='lg:col-span-3'>
                    <AvailableCards technologies={technologyState} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></AvailableCards>
                </div>

                <div className='lg:col-span-1 border-gray-300 border rounded-md p-3'>
            
                        <h2 className='font-bold'>Your Stack</h2>
                    
                    <SelectedStacks technologies={technologies} technologyState={technologyState} settechnologyState={settechnologyState} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></SelectedStacks>
                </div>

                {/* <div><StackCard/></div> */}
            </div>
        </div>
    );
};

export default Technologies;