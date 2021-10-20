import React from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import MainContainer from 'Containers/main-container';
import {
    LoginPage,
    RegisterPage,
    ConfirmEmailPage,
    VerifyEmailPage,
} from '../pages';

const App = () => {
    return (
        <>
            <MainContainer>
                <Switch>
                    <Route path="/" component={() => <h1 >Main page</h1>} exact />
                    <Route exact path="/search" component={() => <h1>Test search</h1>} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/verify-register"  component={ConfirmEmailPage} />
                    <Route path="/auth/email/verify/:request"  component={VerifyEmailPage} exact />

                    <Route render={() => <h1>This page not found!</h1>} />
                </Switch>
            </MainContainer>
        </>
    );
};

export default App;