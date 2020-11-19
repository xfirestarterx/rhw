import React from 'react';
import './Card.css';
import Button from "../Button/Button";

const CardRecord = ({ user }) => {
    const {
        name,
        email,
        username,
        phone,
        website
    } = user;

    return (
      <div className="CardRecord">
          <div><i>Name:</i> {name}</div>
          <div><i>Email:</i> {email}</div>
          <div><i>Username:</i> {username}</div>
          <div><i>Phone:</i> {phone}</div>
          <div><i>Website:</i> {website}</div>
      </div>
    );
};

const CardFooter = ({ user: { address, company } }) => {
    const { street, suite, city, zipcode } = address;
    const { name, catchPhrase, bs } = company;

    return (
        <div className="CardFooter">
            <div className="CardFooterContainer">
                <div className="CardFooterHeading">Address</div>
                <span><i>Street:</i> {street}</span>
                <span><i>Suite:</i> {suite}</span>
                <span><i>City:</i> {city}</span>
                <span><i>Zip code:</i> {zipcode}</span>
            </div>
            <div className="CardFooterContainer">
                <div className="CardFooterHeading">Company</div>
                <span><i>Name:</i> {name}</span>
                <span><i>Catch phrase:</i> {catchPhrase}</span>
                <span><i>BS:</i> {bs}</span>
            </div>
        </div>
    );
};

const Card = ({user, deleteHandler}) => {
    return (
        <div className="Card">
            <CardRecord user={user} />
            <CardFooter user={user} />
            <Button clickHandler={() => deleteHandler(user.id)}>Delete</Button>
        </div>
    );
};

export  default  Card;