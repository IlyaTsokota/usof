import React, {memo, useEffect, useState} from 'react';
import { useTitle } from "../hooks";
import PageContainer from "Containers/page-container";
import {Subtitle, Title} from "../title";
import {withUsofService} from "../hoc";
import { fetchDataPromise } from "Actions/utills/fetch-data";
import FullPageLoader from "../full-page-loader";
import { useHistory } from "react-router-dom";
import QuestionsList from "../questions-list";
import queryString from 'query-string';
import updateURL from "Utils/update-url";

const SearchPage = memo(({ usofService }) => {
    const history = useHistory();
    const { page, term } = queryString.parse(history.location.search);
    const [questions, setQuestions] = useState(null);
    const [numberPage, setNumberPage] = useState(page || 1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [paginationLinks, setPaginationLinks] = useState(null);

    useTitle('Search Results');

    useEffect(() => {
        setLoading(true);
        fetchDataPromise({
            service: usofService.search,
            data: {
                page: numberPage,
                term: term.toLowerCase(),
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
        });
    },[usofService, term, numberPage, setQuestions, setLoading, setError, setPaginationLinks]);

    const content = loading ? <FullPageLoader />
        : error ? <Subtitle text='Not Found!' />
        : !questions.length ? <Subtitle text='Results Not Found!' />
        : (
            <>
                <Title text="Search Results:" />
                <Subtitle text={term} />
                <QuestionsList paginationLinks={paginationLinks} questions={questions} setCurrentPage={setNumberPage} />
            </>
        );

    return (
        <PageContainer name="questions-list search-page">
            {content}
        </PageContainer>
    );
});

export default withUsofService()(SearchPage);
