import React from 'react';
import './Card.css';
import Button from "../Button/Button";

const Card = ({user, deleteHandler}) => {
    // console.log(idx)

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
            <Button clickHandler={() => deleteHandler(id)}>Delete</Button>
        </div>
    );
};

export  default  Card;