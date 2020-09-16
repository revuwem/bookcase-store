import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../header';
import {
    HomePage,
    ShopPage,
    CartPage
} from '../pages';

import './app.css';

const App = () => {

    return (
        <div className="bookcase-store">
            <Header />


            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/shop/" component={ShopPage} />
                <Route path="/cart" component={CartPage} />

                <Redirect to="/" />
            </Switch>

        </div>
    );
}

export default App;