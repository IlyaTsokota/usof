import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FullPageLoader from "../full-page-loader";
import ErrorMsg from "../error-message";
import PageContainer from "Containers/page-container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserEmailVerify } from "Actions";
import { withUsofService } from "../hoc";
import { Subtitle } from "../title";

const VerifyEmailPage = ({ verification }) => {
    const history = useHistory();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const { pathname, search } = history.location;
        verification(`${pathname}${search}`)
            .then(() => {
                setSuccess(true);
            })
            .catch(() => {
                setError(true);
            });
    }, [verification, history.location])

    const content = success ? (
            <>
                <Subtitle text='Email successfully confirms please login!'/>
                <div className="btn-submit btn-center btn-sm text-white" onClick={() => history.push('/login')} >
                    Sign In
                </div>
            </>
        )
        : <FullPageLoader/>;

    return (
        <PageContainer>
            {error ? <ErrorMsg text={"Email confirmation error!"}/> : content}
        </PageContainer>
    );
};

const mapDispatchToProps = (dispatch, { usofService }) => {
    return bindActionCreators(
        {
            verification: fetchUserEmailVerify(usofService.verify),
        },
        dispatch
    );
};

export default withUsofService()(connect(null, mapDispatchToProps)(VerifyEmailPage));