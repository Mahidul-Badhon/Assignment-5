import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../types/technologyType';
import { IoStar } from 'react-icons/io5';
import { toast } from 'react-toastify';

interface ItechnologyCard{
    technology: Itechnology
    selectedCards: Itechnology[]
        setSelectedCards: Dispatch<SetStateAction<Itechnology[]>>
}

const TechnologyCards = ({technology, selectedCards, setSelectedCards}:ItechnologyCard) => {
    
     const [isSelected, setIsSelected] = useState(false)
     console.log(isSelected)
    
    const handleSelectedStack = () =>{
        setIsSelected(true)
        toast(`${technology.name} added to stack!`)

        //selected cards added
        setSelectedCards([...selectedCards, technology])
    }

    return (
        <div className="card bg-base-100 w-full shadow-md p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
            <div className='flex justify-between items-start mb-4'>
                {/* <figure> */}
                <img className='w-10 h-10 object-contain'
                    src={technology.icon}
                    alt="icon" />
                {/* </figure> */}
                <div className="badge badge-secondary">{technology.badge}</div>
            </div>


            <div className="card-body p-0 space-y-3">
                <h2 className="card-title text-xl font-bold text-gray-800">
                    {technology.name}

                </h2>
                <p className='text-gray-500 text-sm'>{technology.description}</p>
                <div className='flex justify-between items-center text-xs text-gray-500 pt-2'>
                    <div className='bg-gray-300 rounded-md p-2'>{technology.category}</div>
                    <div>{technology.difficulty}</div>
                    <div className='flex justify-between items-center gap-1'>
                        <IoStar />
                        {technology.rating}
                    </div>

                </div>
                <button onClick={()=>handleSelectedStack()} className='bg-black text-white w-full py-2.5 rounded-md mt-2 text-center transition-all hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed' disabled={isSelected} >
                    {isSelected === true ? "Added" : "Add to cart"}
                    </button>
            </div>
        </div>
    );
};

export default TechnologyCards;