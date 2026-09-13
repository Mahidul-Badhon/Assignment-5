import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../types/technologyType';
import { ImCross } from 'react-icons/im';
import { toast } from 'react-toastify';

interface ISelectedStacksCardProps{
    technologies: Itechnology[]
    technologyState: Itechnology[]
    settechnologyState: Dispatch<SetStateAction<Itechnology[]>>
    card: Itechnology
    selectedCards: Itechnology[]
    setSelectedCards: Dispatch<SetStateAction<Itechnology[]>>

}

const SelectedStacksCard = ({technologies,technologyState, settechnologyState, card, selectedCards, setSelectedCards}: ISelectedStacksCardProps) => {
    
    const handleRemoveCard = (card:Itechnology) =>{
        const remainCards = selectedCards.filter(
            (selectedCard) => selectedCard.id != card.id
        )
        setSelectedCards(remainCards)
        toast(`${card.name} removed from the stack!`)
    }
    
    return (
        <div className='flex justify-between items-center border border-gray-300 mt-2 mb-2 rounded-md p-3'>
            
            {/* <p>{selectedCards.length === 0 ? "No technology selected" : `${selectedCards.length} technology selected`}</p> */}
            <div className='flex justify-evenly items-center gap-2'>
                <img src={card.icon} alt="icon" className='w-[40px]' />
                <div>
                    <h3 className='font-semibold'>{card.name}</h3>
                    <p className='text-gray-400'>{card.category}</p>
                </div>
            </div>

            <span onClick={() => handleRemoveCard(card)}><ImCross /></span>

        </div>
    );
};

export default SelectedStacksCard;