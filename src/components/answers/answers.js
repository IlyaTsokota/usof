import React from "react";
import './answers.scss';

const Answers = ({answers}) => {
    if (!answers || !answers.length) {
        return <h3 style={{textAlign: 'center'}}>No answers!</h3>;
    }

    const content = answers.map(({id, authorName, content, created_at: createdAt}) => {
        const date = new Date(createdAt).toLocaleString();

        return (
            <div key={id} className='answers-item'>
                <div className='answers-item__header'>
                    <div className='answers-item__header-name'>
                        {authorName}
                    </div>
                    <div className='answers-item__header-date'>
                        {date}
                    </div>
                </div>
                <div className='answers-item__content' dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        );
    });

    return content;
};

export default Answers;