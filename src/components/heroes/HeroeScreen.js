import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';
import moduleName from '../../'

// import batman from '../../assets/heroes/dc-batman.jpg'; // estático
// const heroImages = require.context('../../assets/heroes', true ); // Con ayuda de Webpack

export const HeroeScreen = ({ history }) => {
    
    const { heroeId } = useParams();
    
    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ]); 
    //const hero = getHeroesById(heroeId);

    if( !hero ) {
        return <Redirect to="/" />;
    };

    const handleReturn = () => {

        if( history.lenght <= 2){
            history.push('/');
        } else {
        history.goBack();
        }
    };

    const {
        superhero, 
        alter_ego,
        first_appearance,
        characters,
        publisher,
    } = hero;
    
    return (
        <div className="container"> 
        <div className="row no-gutters">
            <div className="col-6">
                <img
                    src={ `/assets/heroes/${ heroeId }.jpg` } // Desde 'public/assets'
                    // src={ batman } // import
                    // src={ heroImages(`./dc-superman.jpg`) }
                    alt={ superhero }
                    className="img.thumbnail animate__animated animate__fadeInLeftBig"
                />
            </div>

            <div className="col-6">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First apperance: </b> { first_appearance } </li>
                </ul>

                <h5>Characters</h5>
                <p> { characters } </p>
            
                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
            </div>
        </div>
    );
};
