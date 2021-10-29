import React from 'react';
import './spinner.scss';
import SpinnerIcon from './spinner.svg';

const Spinner = ({classes = ''}) => {
    return (
        <div className='spinner'>
            <SpinnerIcon className={`spinner__img ${classes}`} />
        </div>
    );
};

export default Spinner;
