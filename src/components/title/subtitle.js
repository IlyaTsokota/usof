import React from 'react';
import './title.scss';

const Subtitle = ({ text, className = '' }) => <h2 className={`subtitle ${className}`}>{text}</h2>;

export default Subtitle;