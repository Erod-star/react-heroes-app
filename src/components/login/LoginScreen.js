import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext( AuthContext );
    
    const handleLogin = () => {
        // history.push('/');  - - - - Cambia a la ruta seleccionada manteniendo el historial de navegación
        // history.replace('/'); // - - - Cambia a la ruta seleccionada remplazando dicha ruta en el historial de navegación
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Edson',
            }
        });

        history.replace( lastPath );   
    };

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    );
};
