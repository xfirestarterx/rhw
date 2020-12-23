import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

CardRecord.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
        username: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string
    })
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

CardFooter.propTypes = {
    user: PropTypes.shape({
        address: PropTypes.shape({
            street: PropTypes.string,
            suite: PropTypes.string,
            city: PropTypes.string,
            zipcode: PropTypes.string
        }),
        company: PropTypes.shape({
            name: PropTypes.string,
            catchPhrase: PropTypes.string,
            bs: PropTypes.string
        })
    })
};

const Card = ({ user }) => {
    return (
        <div className="Card">
            <Link to={`/user/${user.id}`}>
                <CardRecord user={user} />
                <CardFooter user={user} />
            </Link>
        </div>
    );
};

Card.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
        username: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string
    })
};

export  default  Card;
