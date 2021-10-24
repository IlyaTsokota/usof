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
import QuestionListFilters from "../questions-list-filters";
import Grid from '@mui/material/Grid';

const QuestionsListPage = memo(({ usofService }) => {
    const history = useHistory();
    const params = queryString.parse(history.location.search);
    const [questions, setQuestions] = useState(null);
    const [filters, setFilters] = useState(typeof params.filter === 'string' ? JSON.parse(params.filter) : params.filter || { statuses: ['PUBLISHED'] });
    const [sorting, setSorting] = useState(params.sorting || false);
    const [numberPage, setNumberPage] = useState(params.page || 1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [paginationLinks, setPaginationLinks] = useState(null);

    useTitle('Questions');

    useEffect(() => {
        setLoading(true);
        fetchDataPromise({
            service: usofService.getPosts,
            data: {
                page: numberPage,
                sorting,
                filter: filters,
            },
        }).then((response) => {
            console.log(response);
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
    },[usofService, filters, sorting, numberPage, setQuestions, setLoading, setError, setPaginationLinks]);

    const content = (
            <>
                <Title text="Questions" />
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        {
                            loading ? <FullPageLoader  />
                                : error || !questions.length ? <Subtitle text='Questions Not Found!' />
                                : <QuestionsList paginationLinks={paginationLinks} questions={questions} setCurrentPage={setNumberPage} />
                        }
                    </Grid>
                    <Grid item xs={2}>
                        <QuestionListFilters filters={filters} setFilters={setFilters} sorting={sorting} setSorting={setSorting} />
                    </Grid>
                </Grid>
            </>
        );

    return (
        <PageContainer name="questions-list">
            {content}
        </PageContainer>
    );
});

export default withUsofService()(QuestionsListPage);
