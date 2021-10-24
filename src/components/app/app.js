import React from 'react';
import './app.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import MainContainer from 'Containers/main-container';
import {
    LoginPage,
    RegisterPage,
    ConfirmEmailPage,
    VerifyEmailPage,
    QuestionsListPage,
    SearchPage,
} from '../pages';

const App = () => {
    return (
        <>
            <MainContainer>
                <Switch>
                    <Route path="/" render={() => <Redirect to='/questions' />} exact />
                    <Route path="/questions" component={QuestionsListPage} exact />
                    <Route path="/questions/:id" render={() => <p>Test PDP</p>} exact />
                    <Route exact path="/search" component={SearchPage} />
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