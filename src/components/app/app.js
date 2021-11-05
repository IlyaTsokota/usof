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
    QuestionDetailsPage,
    MyQuestionsPage,
    QuestionAddPage,
} from '../pages';

const App = () => {
    return (
        <>
            <MainContainer>
                <Switch>
                    <Route path="/" render={() => <Redirect to='/questions' />} exact />
                    <Route path="/questions" component={QuestionsListPage} exact />
                    <Route path="/questions/:id" component={QuestionDetailsPage} exact />
                    <Route path="/search" component={SearchPage} exact />
                    <Route path="/my-questions" component={MyQuestionsPage} exact />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/verify-register"  component={ConfirmEmailPage} />
                    <Route path="/auth/email/verify/:request"  component={VerifyEmailPage} exact />
                    <Route path="/create/question" component={QuestionAddPage} exact />
                    <Route render={() => <h1>This page not found!</h1>} />
                </Switch>
            </MainContainer>
        </>
    );
};

export default App;