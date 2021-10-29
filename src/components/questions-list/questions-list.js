import React from "react";
import QuestionsListItem from "../question-list-item/question-list-item";

import './questions-list.scss';
import Pagination from "../pagination";

const QuestionsList = ({ questions, usofService, ...props  }) => {
    const questionItems = questions.map((data) => {
        return <QuestionsListItem key={data.id} data={data} usofService={usofService} />;
    });

    return (
        <div className='questions-list'>
            <div className='questions-list-inner'>
                {questionItems}
            </div>
            <Pagination {...props} />
        </div>
    );
};

export default QuestionsList;
