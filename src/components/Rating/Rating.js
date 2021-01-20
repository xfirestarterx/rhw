import React from 'react';
import './Rating.css';

const getTextVal = val => val ?? '(--)';

const Rating = ({ text, rating }) => {

    return (
        <div className="Rating">
           <span>&#128077; { getTextVal(text) }</span>
           <span>&#9733; {rating}</span>
        </div>
    );
}

export default Rating;
