import React from 'react';
import RegisterPageContainer from "Containers/register-page-container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTitle } from "../hooks";

const RegisterPage = ({ isLogged }) => {
    useTitle('Sign Up');
    return isLogged ? <Redirect to="/" /> : <RegisterPageContainer />;
};

const mapStateToProps = ({ user }) => ({ isLogged: user.isLogged });

export default connect(mapStateToProps)(RegisterPage);
