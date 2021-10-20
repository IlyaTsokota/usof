import React from "react";
import './error-message.scss';

const ErrorMsg = ({text}) => (
    <div className='error-message'>
        <p className='error-message__text'>{text}</p>
    </div>
);

export default ErrorMsg;
