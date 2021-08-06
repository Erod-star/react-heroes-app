import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
    //const heroes = getHeroesByPublisher( publisher );
    
    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="row align-items-start ">
                {
                    heroes.map( hero => (
                        <HeroeCard 
                            key={ hero.id }
                            { ...hero }
                        >
                        </HeroeCard>
                    ))
                }   
            </div>
        </div>
    );
};

