import React from 'react';
import Header from 'Components/header';

const MainContainer = ({ children }) => (
    <>
        <Header />
        <main role="main" className="container">
            {children}
        </main>
    </>
);

export default MainContainer;