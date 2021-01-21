import React from 'react';
import './Card.css';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Rating from '../Rating/Rating';
import Features from '../Features/Features';

const Card = ({ item }) => {
    const {
        address,
        name,
        thumbnailUrl,
        guestReviews: { badgeText, rating },
        ratePlan: { features, price: { current } }
    } = item;

    return (
        <div className="Card">
            <div className="CardImageWrapper">
                <img src={thumbnailUrl} />
            </div>

            <div className="CardDescriptionWrapper">
                <Subtitle address={address} />
                <Title text={name} />
                <Rating text={badgeText} rating={rating} />
                <Features {...features} />
                <div className="Price">{current}</div>
            </div>
        </div>
    );
}

export default Card;
