import React from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import MainContainer from 'Containers/main-container';
import LoginPage from '../pages/login-page';

const App = () => {
    return (
        <>
            <MainContainer>
                <Switch>
                    <Route path="/" component={() => <h1 >Main page</h1>} exact />
                    <Route exact path="/search" component={() => <h1>Test search</h1>} />
                    <Route path="/login" render={() => <LoginPage />} />
                    <Route path="/register" component={() => <h1>Register</h1>} />

                    <Route render={() => <h1>This page not found!</h1>} />
                </Switch>
            </MainContainer>
        </>
    );
};

export default App;