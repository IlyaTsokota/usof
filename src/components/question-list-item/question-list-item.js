import React  from "react";
import './question-list-item.scss';
import {useHistory} from "react-router-dom";
import {FacebookShareButton} from "react-share";
import {withLike} from "../hoc";

const RatingContent = ({likes, onLike, onDislike}) => (
    <div className='question-list-item__rating'>
        <div className='question-list-item__rating-minus' onClick={() => onDislike()} >
            -
        </div>
        <div className='question-list-item__rating-count'>
            {likes}
        </div>
        <div className='question-list-item__rating-plus' onClick={() => onLike()}>
            +
        </div>
    </div>
);

const Rating = withLike(RatingContent);

const QuestionsListItem = ({data, usofService}) => {
    const { id, title, body, created_at: createdAt } = data;
    const { protocol, host, pathname } = window.location;
    const shareUrl =  protocol + "//" + host + pathname;
    const history = useHistory();

    return (
        <div className='question-list-item'>
            <h3 className='question-list-item__title'>{title}</h3>
            <div className='question-list-item__desc' dangerouslySetInnerHTML={{ __html: body }} />
            <div className='question-list-item__bottom'>
                <Rating id={id} usofService={usofService} />
                <div className='question-list-item__more btn btn-blue' onClick={() => history.push(`/questions/${id}`)}>
                    Read
                </div>
                <FacebookShareButton
                    url={`${shareUrl}/${id}`}
                    quote={title}
                    className='question-list-item__share'
                >
                    <div className='btn btn-green'>Share</div>
                </FacebookShareButton>
                <div className='question-list-item__date'>
                    {createdAt}
                </div>
            </div>
        </div>
    )
};



export default QuestionsListItem;