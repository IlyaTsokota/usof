import AnswerForm from "Components/answer-form";
import Answers from "Components/answers";
import React, {useCallback, useEffect, useState} from "react";
import {withUsofService} from "Components/hoc";
import {connect} from "react-redux";
import {fetchDataPromise} from "../../actions/utills/fetch-data";
import Spinner from "Components/spinner";

const AnswersContainer = ({ questionId, user, usofService }) => {
    const { isLogged } = user;
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState(null);

    const loadAnswers = useCallback(() => {
        setLoading(true);
        fetchDataPromise({
            service: usofService.getAnswers,
            data: questionId,
        }).then((resp) => {
            setAnswers(resp.data);
        }).finally(() => {
            setLoading(false);
        });
    }, [questionId, usofService]);


    const onSubmit = (content) => {
        fetchDataPromise({
            service: usofService.addAnswer,
            data: {
                id: questionId,
                content,
            },
        }).then(() => {
            loadAnswers();
        });
    };

    useEffect(() => {
        loadAnswers();

        return () => {
            setLoading(true);
            setAnswers(null);
        };
    }, [loadAnswers])

    const answersContent = loading ? <Spinner /> : <Answers answers={answers}/>;

    return (
        <>
            <h3 style={{fontSize: '36px', marginTop: '25px',}}>Answers</h3>
            <AnswerForm  isLogged={isLogged}  onSubmit={onSubmit} />
            <div className='answers'>
                {answersContent}
            </div>
        </>
    );
};

const mapStateToProps = ({ user }) => ({ user });


export default withUsofService()(connect(mapStateToProps)(AnswersContainer));