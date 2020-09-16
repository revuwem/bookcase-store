import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';

import './app.css';

const App = () => {

    return(
        <ErrorBoundry>
            <ErrorButton />
        </ErrorBoundry>
    );
}

export default App;