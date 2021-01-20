import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const Card = ({ item }) => {
    const { address, name } = item;

    return (
        <div className="Card">
            <Subtitle address={address} />
            <Title name={name} />
        </div>
    );
}

export default Card;
