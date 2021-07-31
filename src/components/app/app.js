import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import UsofServiceContext from '../usof-service-context';
import UserContext from '../user-context';
import UsofService from '../../services/usof-service'

import './app.scss';

const App = () => {
    const usofService = new UsofService();
    const [user, setUser] = useState(null);

    return (
        <ErrorBoundry>
            <UsofServiceContext.Provider value={usofService}>
                <UserContext.Provider value={{ user, setUser }}>
                    <Router>
                        <Switch>
                            <Route path="/" component={() => <h1>Main page</h1>} />

                            <Route render={() => <h1>This page not found!</h1>} />
                        </Switch>
                    </Router>
                </UserContext.Provider>
            </UsofServiceContext.Provider>
        </ErrorBoundry>
    );
};

export default App;