import React, {memo, useEffect, useState} from 'react';
import { useTitle } from "../hooks";
import PageContainer from "Containers/page-container";
import {Subtitle, Title} from "../title";
import {withUsofService} from "../hoc";
import { fetchDataPromise } from "Actions/utills/fetch-data";
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import updateURL from "Utils/update-url";
import Spinner from "../spinner";
import QuestionsTable from "../questions-table";

const MyQuestionsPage = memo(({ usofService }) => {
    const history = useHistory();
    const { page } = queryString.parse(history.location.search);
    const [questions, setQuestions] = useState(null);
    const [numberPage, setNumberPage] = useState(page || 1);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const [error, setError] = useState(false);
    const [paginationLinks, setPaginationLinks] = useState(null);

    useTitle('Search Results');

    useEffect(() => {
        setLoading(true);
        fetchDataPromise({
            service: usofService.getMyPosts,
            data: {
                page: numberPage,
            },
        }).then((response) => {
            const {data, links} = response.data;
            const url = response.request.responseURL;
            const index = url.indexOf('?');

            if (index !== -1) {
                updateURL(url.slice(index));
            }

            setQuestions(data);
            setPaginationLinks(links);
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
            setRefresh(false);
        });
    },[usofService, numberPage, refresh, setQuestions, setLoading, setError, setPaginationLinks]);

    const content = error ? <Subtitle text='Not Found!' />
        : (
            <>
                <Title text="My Questions:" />
                <div style={{display: 'flex', justifyContent: 'flex-end', }}>
                    <div onClick={() => { history.push(`/create/question`) }}
                         style={{textAlign: 'center' }}
                         className='btn btn-green btn-smm btn-mini btn--text-white'>Create</div>
                </div>
                {
                    loading
                        ? <Spinner />
                        : !questions.length ? <Subtitle text='Your questions is empty!' />
                        :<QuestionsTable usofService={usofService} paginationLinks={paginationLinks} questions={questions} setCurrentPage={setNumberPage} setRefresh={setRefresh} />
                }
            </>
        );

    return (
        <PageContainer name="my-questions">
            {content}
        </PageContainer>
    );
});

export default withUsofService()(MyQuestionsPage);
