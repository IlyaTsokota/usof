import React from "react";

import './pagination.scss';

const Pagination = ({ paginationLinks, setCurrentPage}) => {
    const pages = paginationLinks
        .map(({ url, label, active }) => {
            const page = url?.match(/[1-9]/)[0];
            return <p key={label} className={`pagination__link ${active ? 'pagination__link-active' : ''} ${!url ? 'pagination__link-disabled' : ''}`} onClick={() => setCurrentPage(page)} dangerouslySetInnerHTML={{ __html: label }} />;
        });

    return (
        <div className='pagination'>
            {pages}
        </div>
    );
};

export default Pagination;
