import React from 'react';
import './Card.css';
import Button from "../Button/Button";

const getVal = val => val || '-';

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
          <div><i>Name:</i> {getVal(name)}</div>
          <div><i>Email:</i> {getVal(email)}</div>
          <div><i>Username:</i> {getVal(username)}</div>
          <div><i>Phone:</i> {getVal(phone)}</div>
          <div><i>Website:</i> {getVal(website)}</div>
      </div>
    );
};

const CardFooter = ({ user: { address = {}, company ={} } }) => {
    const { street, suite, city, zipcode } = address;
    const { name, catchPhrase, bs } = company;

    return (
        <div className="CardFooter">
            <div className="CardFooterContainer">
                <div className="CardFooterHeading">Address</div>
                <span><i>Street:</i> {getVal(street)}</span>
                <span><i>Suite:</i> {getVal(suite)}</span>
                <span><i>City:</i> {getVal(city)}</span>
                <span><i>Zip code:</i> {getVal(zipcode)}</span>
            </div>
            <div className="CardFooterContainer">
                <div className="CardFooterHeading">Company</div>
                <span><i>Name:</i> {getVal(name)}</span>
                <span><i>Catch phrase:</i> {getVal(catchPhrase)}</span>
                <span><i>BS:</i> {getVal(bs)}</span>
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