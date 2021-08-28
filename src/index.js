import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'Components/app';
import ErrorBoundry from 'Components/error-boundry';
import UsofService from 'Services/usof-service';
import { UsofServiceProvider } from 'Components/usof-service-context';

import store from './store';

const usofService = new UsofService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <UsofServiceProvider value={usofService}>
                <Router>
                    <App />
                </Router>
            </UsofServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);