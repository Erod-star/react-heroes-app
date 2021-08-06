import React, { useContext } from "react";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRutes } from "./DashboardRutes";
import { PrivateRoute } from "./PrivateRoute";

import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                
                <Switch>
                    <PublicRoute 
                        exact path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ user.logged } 
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRutes }
                        isAuthenticated={ user.logged } 
                    />

                </Switch>
            </div>
        </Router>
    );
};
