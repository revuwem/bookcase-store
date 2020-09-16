import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookcaseService from './services/bookcase-service';
import { BookcaseServiceProvider} from './components/bookcase-service-context';

import store from './store';

const bookcaseService = new BookcaseService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookcaseServiceProvider value={bookcaseService}>
                <Router>
                    <App/>
                </Router>
            </BookcaseServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);