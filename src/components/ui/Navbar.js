import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory(); // Forma de acceder al history sin necesidad de exportarlo de las rutas

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout,
            payload: {
                name: '',
            }
        });


    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                HeoresApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search 
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                        { name }
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout } 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};