import React from 'react';

const Subtitle = ({ address }) => {
    const { countryName, locality, streetAddress } = address;

    return (
        <div className="Subtitle">{ `${countryName}, ${locality}, ${streetAddress}` }</div>
    );
}

export default Subtitle;
