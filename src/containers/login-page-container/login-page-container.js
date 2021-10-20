import PageContainer from "../page-container";
import { Title } from "Components/title";
import { LoginForm } from "Components/forms";
import { bindActionCreators } from "redux";
import { fetchUserLogin, setDefault } from "Actions";
import { withUsofService } from "Components/hoc";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import actionTypes from "ActionTypes";

const LoginPageContainer = ({ isError, formSubmit, setDefault }) => {
    useEffect(() => {
        return () => { setDefault(actionTypes.userLoginSetDefault); }
    }, [setDefault]);

    return (
        <PageContainer name="login">
            <Title text="Sign In" />
            <LoginForm formSubmit={formSubmit} wasError={isError} />
        </PageContainer>
    );
};

const mapStateToProps = ({ loginPage: { isSuccess, isError} }) => ({ isSuccess, isError });

const mapDispatchToProps = (dispatch, { usofService }) => {
    return bindActionCreators(
        {
            formSubmit: fetchUserLogin(usofService.login),
            setDefault,
        },
        dispatch
    );
};


export default withUsofService()(connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer));
