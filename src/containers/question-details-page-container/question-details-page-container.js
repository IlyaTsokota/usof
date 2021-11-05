import React, {useEffect, useState} from "react";
import PageContainer from "../page-container";
import {useParams} from "react-router-dom";
import {fetchDataPromise} from "Actions/utills/fetch-data";
import {withUsofService} from "Components/hoc";
import FullPageLoader from "Components/full-page-loader";
import {useTitle} from "Components/hooks";
import QuestionDetailsContent from "Components/question-details-content";
import AnswersContainer from "../answers-container/answers-container";

const QuestionDetailsPageContainer = ({ usofService }) => {
    const { id: questionId } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    useTitle((question && question.title) || 'Question Details');

    useEffect(() => {
        setLoading(true);
        fetchDataPromise({
            service: usofService.getPost,
            data: questionId,
        }).then((resp) => {
            setQuestion(resp.data);
            setLoading(false);
        });
    }, [questionId, usofService]);



    return (
        <PageContainer name="question-details">
            {
                loading
                    ? <FullPageLoader />
                    : (
                        <>
                            <QuestionDetailsContent {...question} />
                            <AnswersContainer questionId={questionId} />
                        </>
                    )
            }
        </PageContainer>
    );
};


export default withUsofService()(QuestionDetailsPageContainer);
