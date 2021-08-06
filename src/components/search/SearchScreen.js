import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q='' } = queryString.parse( location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: '',
    });  
    
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() =>  getHeroesByName( q ), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row animate__animated animate__fadeIn">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form>
                        <input 
                            type="text"
                            placeholder="Find your hero!"
                            className="form control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }  
                        />
                        <p></p>
                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                            onClick={ handleSearch }
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q === '')
                            && 
                            <div className="alert alert-info">
                                Search a hero!
                            </div>
                    }

                    { 
                        (q !== '' && heroesFiltered.length === 0 )
                            && 
                            <div className="alert alert-danger">
                                There's not a hero with { q }
                            </div>
                    }

                    {

                        heroesFiltered.map( hero => (
                            <HeroeCard 
                                key = { hero.id }
                                { ... hero }
                            />
                        ))

                    }

                </div>
            </div>
        </div>
    );
};
