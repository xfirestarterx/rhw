import React from 'react';
import './Subtitle.css';

const Subtitle = ({ address }) => {
    const { countryName, locality, streetAddress } = address;

    return (
        <div className="Subtitle">{ `${countryName}, ${locality}, ${streetAddress}` }</div>
    );
}

export default Subtitle;
