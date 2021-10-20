import PageContainer from "../page-container";
import { Title } from "Components/title";
import { RegisterForm } from "Components/forms";
import { bindActionCreators } from "redux";
import { fetchUserRegister, setDefault } from "Actions";
import { withUsofService } from "Components/hoc";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import actionTypes from "ActionTypes";

const RegisterPageContainer = ({ isSuccess, isError, formSubmit, setDefault }) => {
    useEffect(() => {
        return () => { setDefault(actionTypes.userRegisterSetDefault); }
    }, [setDefault]);

    if (isSuccess){
        return <Redirect to='/verify-register' />
    }

    return (
        <PageContainer name="register">
            <Title text="Sign Up" />
            <RegisterForm formSubmit={formSubmit} wasError={isError}/>
        </PageContainer>
    );
};

const mapStateToProps = ({ registerPage: { isError, isSuccess } }) => ({ isError, isSuccess });

const mapDispatchToProps = (dispatch, { usofService }) => {
    return bindActionCreators(
        {
            formSubmit: fetchUserRegister(usofService.register),
            setDefault,
        },
        dispatch
    );
};

export default  withUsofService()(connect(mapStateToProps, mapDispatchToProps)(RegisterPageContainer));
