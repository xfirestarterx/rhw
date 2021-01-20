import React from 'react';
import './Features.css';

const Features = (features) => {

    return (
        <div className="Features">
            <div>Features:</div>
            { Object.keys(features).map(k => <span key={Math.random()}>{k}</span>) }
        </div>
    );
}

export default Features;
