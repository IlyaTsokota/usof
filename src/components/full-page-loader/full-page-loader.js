import React from "react";
import './full-page-loader.scss';
import spinner from './spinner.svg';

const FullPageLoader = () => (
    <div className='full-page-loader'>
        <img src={spinner} className='full-page-loader__spinner' alt='' />
    </div>
);

export default FullPageLoader;