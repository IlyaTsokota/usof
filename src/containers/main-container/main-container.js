import React from 'react';
import Header from 'Components/header';
import Footer from "Components/footer";

const MainContainer = ({ children }) => (
    <>
        <Header />
        <main role="main" className="container content">
            {children}
        </main>
        <Footer />
    </>
);

export default MainContainer;