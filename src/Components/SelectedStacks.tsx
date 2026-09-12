import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../types/technologyType';
import SelectedStacksCard from './SelectedStacksCard';

interface IselectedStacksProps{
    selectedCards: Itechnology[]
    setSelectedCards: Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedStacks = ({selectedCards, setSelectedCards}: IselectedStacksProps) => {
    console.log(selectedCards, "Selected cards are")

    if(selectedCards.length === 0){
        return(
            <div>
                <p className='text-gray-400'>No technologies selected</p>
                <div className='w-full text-center py-3 mt-3 border-gray-300 border text-gray-300'>Your stack is empty</div>
            </div>
        )
    }
    

    return (
        <div>
            {/* <h2>Your Stack</h2> */}
            <p className='text-gray-400'>{selectedCards.length === 0 ? "No technology selected" : `${selectedCards.length} technology selected`}</p>
            {
                selectedCards.map((card:Itechnology) =>{
                  return (
                    <SelectedStacksCard key={card.id} card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></SelectedStacksCard>
                  ) 
                })
            }
            <button className='text-center text-red-500 border border-red-500 rounded-md w-full py-2.5 mt-12'>Remove All</button>
        </div>
    );
};

export default SelectedStacks;