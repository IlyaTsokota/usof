import React from 'react';
import './title.scss';

const Title = ({ text, className = '' }) => <h1 className={`title ${className}`}>{text}</h1>;

export default Title;