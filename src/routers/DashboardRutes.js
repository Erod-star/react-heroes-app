import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

import { DcScreen } from '../components/DC/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroeScreen } />


                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    );
};
