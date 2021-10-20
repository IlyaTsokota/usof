import React from "react";
import PageContainer from "../../containers/page-container";
import { Subtitle } from "../title";

const ConfirmEmailPage = () => (
    <PageContainer name='confirm-email-page'>
        <Subtitle text='Please confirm your email address to complete registration!'/>
    </PageContainer>
);

export default ConfirmEmailPage;