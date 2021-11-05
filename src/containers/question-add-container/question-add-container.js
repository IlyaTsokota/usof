import PageContainer from "../page-container";
import { Title } from "Components/title";
import { QuestionForm } from "Components/forms";
import { withUsofService } from "Components/hoc";
import React from "react";
import {fetchDataPromise} from "Actions/utills/fetch-data";
import {useHistory} from "react-router-dom";

const QuestionAddContainer = ({ usofService }) => {
    const history = useHistory();

    const formSubmit = (values, setSubmiting) => {
        console.log(values)
        fetchDataPromise({
            service: usofService.createPost,
            data: values,
        }).then(() => {
            setSubmiting(false);
            history.push('/');
        });
    };

    return (
        <PageContainer name="create-post">
            <Title text="Create Post" />
            <QuestionForm usofService={usofService} formSubmit={formSubmit} wasError={false} />
        </PageContainer>
    );
};

export default withUsofService()(QuestionAddContainer);
