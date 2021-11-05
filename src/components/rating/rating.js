import React from "react";
import Spinner from "../spinner";
import {withLike, withUsofService} from "../hoc";
import {connect} from "react-redux";

import './rating.scss';

const Rating = ({likes, onLike, onDislike, loading, isLogged}) => {
    return (
        <div className='rating'>
            {isLogged && <div className='rating-minus' onClick={() => onDislike()} >
                -
            </div>}
            <div className='rating-count'>
                <span>Rating:</span>
                {loading ? <Spinner classes='spinner__img-mini' /> : likes}
            </div>
            {isLogged && <div className='rating-plus' onClick={() => onLike()}>
                +
            </div>}
        </div>
    );
};

const mapStateToProps = ({ user: { isLogged } }) => {
    return { isLogged };
};

export default  withUsofService()(withLike(connect(mapStateToProps)(Rating)));

