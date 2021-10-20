import React from 'react';

const PageContainer = ({ name, children }) => (
    <div className={`page ${name}-page`}>
        {children}
    </div>
);

export default PageContainer;