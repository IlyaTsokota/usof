import React from "react";
import './question-details-content.scss';
import {Title} from "../title";
import Rating from '../rating';
import {FacebookShareButton} from "react-share";

const QuestionDetailsContent = ({ id, title, body, created_at: createdAt }) => {
    const { protocol, host, pathname } = window.location;
    const shareUrl =  protocol + "//" + host + pathname;
    const date = new Date(createdAt).toLocaleString();

    return (
        <>
            <Title text={title} />
            <div className='question-details-header'>
                <Rating id={id} />
                <div>
                    {date}
                </div>
                <FacebookShareButton
                    url={`${shareUrl}/${id}`}
                    quote={title}
                    className='question-details-header__share'
                >
                    <div className='btn btn-green btn-mini btn--text-white'>Share</div>
                </FacebookShareButton>
            </div>
            <div className='question-details-body' dangerouslySetInnerHTML={{ __html: body }} />
        </>
    );
};

export default QuestionDetailsContent;
