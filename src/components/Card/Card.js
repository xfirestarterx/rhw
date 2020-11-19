import React from 'react';
import './Card.css';

const Card = ({user}) => {
    console.log(user)

    const {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = user;

    return (
        <div className="Card">
            { id }
        </div>
    );
};

export  default  Card;