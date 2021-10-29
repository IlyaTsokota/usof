import React from "react";
import './full-page-loader.scss';
import Spinner from "../spinner";



const FullPageLoader = () => (
    <div className='full-page-loader in-component'>
        <Spinner />
    </div>
);

export default FullPageLoader;