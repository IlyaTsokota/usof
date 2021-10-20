import React from 'react';
import LoginPageContainer from "Containers/login-page-container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTitle } from "../hooks";

const LoginPage = ({ isLogged }) => {
    useTitle('Sign In');
    return isLogged ? <Redirect to="/" /> : <LoginPageContainer />;
};

const mapStateToProps = ({ user }) => ({ isLogged: user.isLogged });

export default connect(mapStateToProps)(LoginPage);