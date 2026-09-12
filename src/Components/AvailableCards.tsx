import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../types/technologyType';
import TechnologyCards from './TechnologyCards';

interface IavailableCardProps{
    technologies: Itechnology[]
    selectedCards: Itechnology[]
    setSelectedCards: Dispatch<SetStateAction<Itechnology[]>>
}

const AvailableCards = ({ technologies, selectedCards, setSelectedCards }: IavailableCardProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                technologies.map((technology: Itechnology) => {
                    return (
                        <TechnologyCards key={technology.id} technology={technology} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></TechnologyCards>
                    )
                })
            }
        </div>
    );
};

export default AvailableCards;